var output ;

function calculator(x, y, z) {
 if (x == "add"){
    output = y + z;
} else if (x == "subtract"){
    output = y - z;
} else if (x == "multiply"){
    output = y * z;
} else if (x == "divide"){
    output = y / z;
} 
}

calculator("multiply", 5, 5);
console.log(output);