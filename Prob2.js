var a = 1;
var b = 2;
var c = 0;
console.log(a);
while(c < 400)
{
var c = a + b;
var a = b;
var b = c;
console.log(a);
}

------------------

var a = 1;
var b = 2;
var c = 0;
var sumEven = 0;
while(c < 4000000)
{
var c = a + b;
var a = b;
var b = c;
if (a % 2 === 0)
{
    var sumEven = sumEven + a;
};
};

console.log(sumEven);
