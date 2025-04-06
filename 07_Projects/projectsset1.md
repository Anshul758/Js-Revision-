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

## proect 2 solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //checks
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `Under Weight: ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Normal Weight: ${bmi}`;
    } else {
      results.innerHTML = `Over Weight:${bmi}`;
    }
  }
});
```