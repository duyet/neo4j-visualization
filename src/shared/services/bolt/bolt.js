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

import neo4j from 'neo4j-driver'
import * as mappings from './boltMappings'
// import { addTypesAsField } from './setup-bolt-worker'


export default {
  extractNodesAndRelationshipsFromRecordsForOldVis: (
    records,
    filterRels = true,
    maxFieldItems
  ) => {
    const intChecker = neo4j.isInt
    const intConverter = val => val.toString()

    return mappings.extractNodesAndRelationshipsFromRecordsForOldVis(
      records,
      neo4j.types,
      filterRels,
      {
        intChecker,
        intConverter,
        objectConverter: mappings.extractFromNeoObjects
      },
      maxFieldItems
    )
  },
  extractPlan: (result, calculateTotalDbHits) => {
    return mappings.extractPlan(result, calculateTotalDbHits)
  },
  retrieveFormattedUpdateStatistics: mappings.retrieveFormattedUpdateStatistics,
  itemIntToNumber: item =>
    mappings.itemIntToString(item, {
      intChecker: neo4j.isInt,
      intConverter: val => val.toNumber(),
      objectConverter: mappings.extractFromNeoObjects
    }),
  // addTypesAsField
}
