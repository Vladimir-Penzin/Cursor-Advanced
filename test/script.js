let a = 0;
let b = 1;
let c;
for (i = 0; i < 8; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log (c);
}