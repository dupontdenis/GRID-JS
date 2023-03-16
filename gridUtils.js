export const buildColumns = ({ selector, columnStart, columnNb = 1 }) => {

  console.log(`For  ${selector} create Col[${columnStart}-${columnStart + columnNb}]`)

  const items = document.querySelectorAll(`${selector}`);

  items.forEach(function (item, index) {
    let col = (index % columnNb);
    console.log(`${item.textContent}: col[${columnStart + col}]`);
    item.style.cssText = `grid-column:${columnStart + col}`;

  }
  );
}