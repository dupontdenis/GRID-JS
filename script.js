import { animaux, fruits, transports } from './gridData.js'
import { buildColumns } from './gridUtils.js';

console.table(fruits)

buildColumns(fruits);
buildColumns(animaux);
buildColumns(transports);