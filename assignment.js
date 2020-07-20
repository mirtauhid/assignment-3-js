// Feet to Mile converting program

function feetToMile(feet){
    if(feet < 0){
        console.log("Distance can't be negative");
    }else{
        mile = feet/5280;
        console.log(mile);
    }
}   

feetToMile(5280);


// Wood Calculating Program

function woodCalculator(chair,table,bed){
    woodForChair = chair * 1;
    woodForTable = table * 3;
    woodForBed = bed * 5;
    totalWood = woodForChair + woodForTable + woodForBed;
    console.log(totalWood);
}

woodCalculator(1,1,1);


// Brick Calculating Program

var brickPerFeet = 1000;
var firstPart = 15;
var secondPart = 12;
var thirdPart = 10;
var totalFloor;
function brickCalculator(floor){
    if(floor < 11){
        totalFeet = floor * firstPart;
        totalbrick = totalFeet * brickPerFeet;
        console.log(totalbrick);
    }
    else if( 10 < floor && floor < 21){
        inSecondPart = floor - 10;
        totalFeetInSecondPart = inSecondPart * secondPart;
        totalFeetInFirstPart = 10 * firstPart;
        totalFeet = totalFeetInFirstPart + totalFeetInSecondPart;
        totalbrick = totalFeet * brickPerFeet;
        console.log(totalbrick);
    }
    else{
        inThirdPart = floor - 20;
        totalFeetInThirdPart = inThirdPart * thirdPart;
        totalFeetInSecondPart = 10 * secondPart;
        totalFeetInFirstPart = 10 * firstPart;
        totalFeet = totalFeetInFirstPart + totalFeetInSecondPart + totalFeetInThirdPart;
        totalbrick = totalFeet * brickPerFeet;
        console.log(totalbrick);
    }
}

brickCalculator(30);


// Smallest word finding program from array

function tinyFriend(names){
    var shortest = names[0];
    for(var i=0; i<names.length; i++){
        var element = names[i];
        var elementLength = element.length;
        if (elementLength < shortest.length){
            shortest = element;
        }
    }
console.log(shortest);
}

tinyFriend(["Hridoy", "Rifat", "Mahfuzur", "Dipu", "Mosharrof"]);