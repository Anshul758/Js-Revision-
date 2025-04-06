# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3epi8b1v?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js)

# Solution code

## project 1

```javascript
const allButons = document.querySelectorAll('.button');
const body = document.querySelector('body');

allButons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```