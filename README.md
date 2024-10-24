# Neo4j Graph Visualization

![Code lint](https://github.com/duyet/neo4j-visualization/workflows/Code%20lint/badge.svg)
![Deploy GH Pages](https://github.com/duyet/neo4j-visualization/workflows/Deploy%20GH%20Pages/badge.svg)

## Live demo

https://duyet.github.io/neo4j-visualization/

## Install 

```
yarn add https://github.com/duyet/neo4j-visualization
```

## Usage

```js
import { render } from 'react-dom';
import Neo4jVisualization from 'neo4j-visualization';
import mockData from 'neo4j-visualization/examples/src/mock-small.json';

const result = { records: mockData };

render(<Neo4jVisualization result={result} fullscreen={true} />, mountNode);
```

## Development

```
yarn
yarn dev
```