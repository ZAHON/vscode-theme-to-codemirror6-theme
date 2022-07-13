export const javascriptValue = `const btn = document.querySelector('#btn');
let count = 0;

function render() {
  const text = 'Count: ' + count
  btn.textContent = text;
}

btn.addEventListener('click', () => {
  // Count from 1 to 10
  if (count < 10) {
    count += 1;
    render();
  }
});
`;
