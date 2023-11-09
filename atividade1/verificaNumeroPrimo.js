function numeroPrimo(num) {
  var i = 2;
    if (num % i == 0) return 0;
    else return 1;
}

console.log(numeroPrimo(54));
