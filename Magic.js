//used in the function and a means to console.log my function.
var output ;
//sentence to show when the if statement's conditions are not met.
var p = "Please enter either add, subtract, multiply, or divide for x and 2 numbers for y and z.";
 
 //function with if statement
function calculator(x, y, z) {
 if (x == "add"){
    output = y + z;
} else if (x == "subtract"){
    output = y - z;
} else if (x == "multiply"){
    output = y * z;
} else if (x == "divide"){
    output = y / z;
} else {
	output = p;
}
}

//inputs for x, y, and z.
calculator( "multiply", 10, 5);
console.log(output);

