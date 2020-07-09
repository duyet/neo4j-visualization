/*
 * Copyright (c) 2002-2020 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { types } from 'neo4j-driver'
import { applyGraphTypes } from './boltMappings'
import {
  CYPHER_ERROR_MESSAGE,
  CYPHER_RESPONSE_MESSAGE,
  POST_CANCEL_TRANSACTION_MESSAGE,
  BOLT_CONNECTION_ERROR_MESSAGE
} from './boltWorkerMessages'
import { reservedTypePropertyName } from './boltMappings'

export const setupBoltWorker = (
  boltWorkPool,
  id,
  workFn,
  onLostConnection = () => {}
) => {
  const workerPromise = new Promise((resolve, reject) => {
    const work = boltWorkPool.doWork({
      id,
      payload: workFn,
      onmessage: msg => {
        if (msg.data.type === BOLT_CONNECTION_ERROR_MESSAGE) {
          work.finish()
          onLostConnection(msg.data.error)
          return reject(msg.data.error)
        }
        if (msg.data.type === CYPHER_ERROR_MESSAGE) {
          work.finish()
          reject(msg.data.error)
        } else if (msg.data.type === CYPHER_RESPONSE_MESSAGE) {
          work.finish()
          resolve(addTypesAsField(msg.data.result))
        } else if (msg.data.type === POST_CANCEL_TRANSACTION_MESSAGE) {
          work.finish()
        }
      }
    })
  })
  return workerPromise
}

export const addTypesAsField = result => {
  const records = result.records.map(record => {
    const typedRecord = new types.Record(
      record.keys,
      record._fields,
      record._fieldLookup
    )
    if (typedRecord._fields) {
      typedRecord._fields = applyGraphTypes(typedRecord._fields)
    }
    return typedRecord
  })
  const summary = applyGraphTypes(result.summary)
  return { summary, records }
}

const addRecordClassType = fields => {
  for (let item in fields) {
    let field = fields[item]

    const classMapping = {
      PathSegment: ['start', 'end', 'relationship'],
      Relationship: ['identity', 'end', 'type', 'properties'],
      Node: ['identity', 'labels', 'properties'],
      Path: ['start', 'end', 'segments'],
      Point: ['srid', 'x', 'y', 'z'],
      Date: ['year', 'month', 'day'],
      DateTime: ['year', 'month', 'day', 'hour', 'minute'],
      Duration: ['months', 'days'],
      LocalDateTime: ['months', 'days'],
    }

    const hasOwnProperty = item => key => item.hasOwnProperty(key)

    for (var _className of Object.keys(classMapping)) {
      if (classMapping[_className].every(hasOwnProperty(field))) {
        fields[item][reservedTypePropertyName] = _className;
      }
    }
  }

  return fields
}

export const addTypesAsFieldHack = result => {
  const records = result.records.map(record => {
    const typedRecord = new types.Record(
      record.keys,
      record._fields,
      record._fieldLookup
    )
    if (typedRecord._fields) {
      typedRecord._fields = addRecordClassType(typedRecord._fields)
      typedRecord._fields = applyGraphTypes(typedRecord._fields)
    }
    return typedRecord
  })
  const summary = applyGraphTypes(result.summary)
  return { summary, records }
}
