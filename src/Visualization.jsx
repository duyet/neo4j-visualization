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

import React, { Component } from 'react'

import { deepEquals } from 'services/utils'
import bolt from 'services/bolt/bolt'
import { ExplorerComponent } from './D3Visualization/components/Explorer'
import { StyledVisContainer } from './Visualization.styled'
import { addTypesAsFieldHack } from './shared/services/bolt/setup-bolt-worker';

import './browser/init'

const resultHasTruncatedFields = () => false;

export class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      relationships: []
    }
  }

  componentDidMount() {
    const { records = [] } = this.props.result
    if (records && records.length > 0) {
      this.populateDataToStateFromProps(this.props)
    }
  }

  shouldComponentUpdate(props, state) {
    return (
      this.props.updated !== props.updated ||
      !deepEquals(props.graphStyleData, this.props.graphStyleData) ||
      this.state.updated !== state.updated ||
      this.props.frameHeight !== props.frameHeight
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.updated !== prevProps.updated) {
      this.populateDataToStateFromProps(this.props)
    }
  }


  populateDataToStateFromProps(props) {
    const result = addTypesAsFieldHack(this.props.result)

    const {
      nodes,
      relationships
    } = bolt.extractNodesAndRelationshipsFromRecordsForOldVis(
      result.records,
      true,
      props.maxFieldItems
    )
    const hasTruncatedFields = resultHasTruncatedFields(
      result,
      props.maxFieldItems
    )
    this.setState({
      nodes,
      relationships,
      hasTruncatedFields,
      updated: new Date().getTime()
    })
  }

  getNeighbours(id, currentNeighbourIds = []) {
    // TODO
  }

  setGraph(graph) {
    this.graph = graph
  }

  render() {
    if (!this.state.nodes.length) return null

    return (
      <StyledVisContainer fullscreen={this.props.fullscreen}>
        <ExplorerComponent
          maxNeighbours={this.props.maxNeighbours}
          hasTruncatedFields={this.state.hasTruncatedFields}
          initialNodeDisplay={this.props.initialNodeDisplay}
          graphStyleData={this.props.graphStyleData}
          updateStyle={this.props.updateStyle}
          getNeighbours={this.getNeighbours.bind(this)}
          nodes={this.state.nodes}
          relationships={this.state.relationships}
          fullscreen={this.props.fullscreen}
          frameHeight={this.props.frameHeight}
          assignVisElement={this.props.assignVisElement}
          setGraph={this.setGraph.bind(this)}
        />
      </StyledVisContainer>
    )
  }
}

Visualization.defaultProps = {
  fullscreen: true,
  updateStyle: () => {}
}
