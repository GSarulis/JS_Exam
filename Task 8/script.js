/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = () => {
    return this.a + this.b;
  };
  this.subtraction = () => {
    return this.a - this.b;
  };
  this.multiplication = () => {
    return this.a * this.b;
  };
  this.division = () => {
    return this.a / this.b;
  };
}

const tryCalculator = new Calculator(10, 10);

console.log(tryCalculator.division(10, 10));
console.log(tryCalculator.multiplication(10, 10));
