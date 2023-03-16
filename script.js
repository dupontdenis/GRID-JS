
import { animaux, fruits, transports } from './grid.js'

const buildGrid = ({ selector, columnStart, columnNb = 1 }) => {
  console.log(selector, columnStart, columnNb)

  const items = document.querySelectorAll(`${selector}`);

  items.forEach(function (item, index) {
    let col = (index % columnNb);
    console.log(`${item.textContent}: col[${col}]`);
    item.style.cssText = `grid-column:${columnStart + col}`;

  }
  );
}

console.log(fruits)

buildGrid(fruits);
buildGrid(animaux);
buildGrid(transports);