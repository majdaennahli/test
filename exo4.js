
const div = document.createElement('div');

const nombre = document.createElement('h1');
nombre.textContent = '1';

const decrementer = document.createElement('button');
decrementer.textContent = '-';
decrementer.addEventListener('click', function() {
  if (valeur > 1) {
    valeur--;
    FizzBuzz();
  }
});

const incrementer = document.createElement('button');
incrementer.textContent = '+';
incrementer.addEventListener('click', function() {
  valeur++;
  FizzBuzz();
});

let valeur = 1;


function FizzBuzz() {
  let texte = '';
  
  if (valeur % 3 === 0) {
    texte += 'fizz';
  }
  
  if (valeur % 5 === 0) {
    texte += 'buzz';
  }
  
  if (texte === '') {
    texte = valeur;
  }
  
  nombre.textContent = texte;
}

div.appendChild(nombre);
div.appendChild(decrementer);
div.appendChild(incrementer);

FizzBuzz();

document.body.appendChild(div);




