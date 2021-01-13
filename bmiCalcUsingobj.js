let lakra = {
    fullName: 'Saransh Lakra',
    height: 1.75,
    weight: 68,
    calcBMI: function(){
        this.BMI = this.weight/(this.height*this.height);
        return this.BMI;
    }
    //-----other way-----
    // calcBMI: function(a,b){
    //     this.BMI = a/(b*b);
    //     return this.BMI;
    // }
}

let gupta = {
    fullName: 'Abhishek Gupta',
    height: 1.78,
    weight: 90,
    calcBMI: lakra.calcBMI // calling or borrowing others function.
}
lakra.calcBMI();
gupta.calcBMI();

// console.log(lakra.calcBMI(68,1.75));
// console.log(lakra.calcBMI());
// console.log(gupta.calcBMI());
// console.log(lakra);
// console.log(gupta);

if( lakra.BMI > gupta.BMI){
console.log(` ${lakra.fullName}'s BMI (${lakra.BMI}) is higher than ${gupta.fullName}'s BMI (${gupta.BMI}). `);
}

else{
    console.log(`${gupta.fullName}'s BMI (${gupta.BMI}) is higher than ${lakra.fullName}'s BMI (${lakra.BMI}).`);
}
