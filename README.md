# Neo4j Graph Visualization

## Live demo

https://duyet.github.io/neo4j-visualization/

## Install 

```
yarn add https://github.com/duyet/neo4j-visualization
```

## Usage

```js
import Neo4jVisualization from 'neo4j-visualization';
import { render } from 'react-dom';
import mockData from 'neo4j-visualization/examples/src/mock-small.json';

const result = { records: mockData };

render(<Neo4jVisualization result={result} fullscreen={true} />, mountNode);
```

## Development

```
yarn
yarn dev
```