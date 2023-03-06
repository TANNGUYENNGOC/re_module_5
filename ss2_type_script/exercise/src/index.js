// happy coding 👻
var fibonacci = function (num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};
var sum = 0;
var number = 10;
console.log("Dãy fibonacci: ");
for (var i = 0; i <= number; i++) {
    console.log(fibonacci(i));
    sum = sum + fibonacci(i);
}
console.log("sum: " + sum);
