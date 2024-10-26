console.log("Hello Wolrd") 

let firstName = "Peter"
let lastName = "Kurrill"
console.log(firstName, lastName);

/*

function movingBox() {
    var box = document.getElementById('box');
    var box = document.addEventListener();
}
*/

let age1 = 25; /*Pri písaní premenných "let" a "var" musíme dodržať pravidlo že, hodnoty premenných 
musia byť priamo špecifikované, nesmú sa prekrývať*/ 
let age2 = 35; /*Premenné vieme pomenovať napr znakom $, _ alebo číslami. Tie však musia byť
 na konci špecifikovaného príkazu (nesmieme pomenovanie premennej začať číslom). */
console.log("Volám sa " + firstName, lastName + " a mám " + age1 + " a môj brat má " + age2);

const ageAdult = 18 /* const = konštanta - číslo ktoré sa nemení*/
let number = 19
    if  (ageAdult <= number){  /*v takomto tvare sa správne zapisuje statement if a else*/
         console.log("si dospelý");
    }   else {
        console.log("si dieťa");  
}

let secondName = "1" 

if (secondName === "1"){
    console.log("Čo obnáša pracovná pozícia")
} else if (secondName === "2"){  /* Zapisujeme v tvare else if ak má mať podmienka ďalšiu valídnu hodnotu!*/
    console.log("Kde sa firma nachádza a je možné pracovať z domu?")
} else if (secondName === "3"){
    console.log("Aké je finančné ohodnotenie")
} else {
    console.log("Ďakujem za pozornosť")
}

/*Logický operátor*/
let thirdName = "Bohuš" /* Pri zapisovaní viacerých 
informácií do statementu If a esle používame elementy "&&" (čo znamená "zároveň") alebo "||" (čo znamená "alebo")
V dôsledku toho stačí keď iba jedna z daných informácií bude pravdivá pre valídny výsledok syntaxu*/
let fourName = "Krupa Peťo"
let height = 155
let secondHeight = 187

if (thirdName === "Bohuš" && height === 155){
    console.log("You are Right!")
}   else{
    console.log("You are Foolish!!!")
}

if (thirdName === "Bohuš" && height === 155 || fourName === "Krupa Peťo" && secondHeight === 187 ){
    console.log("You are Right!")
}   else{
    console.log("You are Foolish!!!")
}


/*
Rozsah - Global a Local scope sú pravidlá syntaxu
- veličiny a premenné ktoré sú zavedené na vrch kódu majú účinnosť nad celým kódom ako takým
(tomuto javu hovoríme GLOBAL SCOPE)
- veličiny ktorú sú zavedené priamo v kóde majú dosah len na dianie priamo v lokálnom kóde a nikdy mimo neho
(tomuto javu hovoríme LOCAL SCOPE)
*/

/*Variable shadowing*/

let myName = "Peteu" /* --> Global scope*/
/* Jedná sa o vrstvenie premenných v kóde, local scope môže mať premennú s rovnakým názvom ako global scope. Čím bližšie sa nachádza local scope 
k vykonatelnej akcii tým bližšie nachádzajúcu sa premennú si zoberie*/
if(true){
    let myName = "Petrík" /* --> Local scope*/
    
    if(true){
        let myName ="Peťo" /* --> Local scope*/
        console.log(myName)
    }
}
/* Táto podmieka je sesterská - berie si premennú z vrchu kódu.*/
if(true){
    console.log(myName)
}

/*FUNCTIONS*/
/*pri písaní funkcií sa najprv vypíše funkcia a potom sa v kóde zavolá*/
/*prvý prílad*/
function greetings(){ /* --> význam funkcie*/
    console.log("AHOJ")
}

greetings() /* --> zavolanie funkcie*/
/*druhý príklad*/
let secondGreetings = function(){
    console.log("AHOJKY")
}

secondGreetings()
/*tretí príklad*/
let thirdGreetings = () => console.log("ČAVINY")

thirdGreetings()

/*Parametre a argumenty*/
/*Vďaka tomuto vieme nastavovať a programovať matematické príklady keďže syntax JavaScriptu je matematicky podložená*/

/*prvý príklad*/
let naDruhou = function(number){  /* --> Parameter*/
    console.log((number * number) + number * (number - number))
}

naDruhou(3.145672) /* --> Argument*/

/*druhý príklad*/
let age3 = 30
let greetingsFunction = function(name){
    console.log("Ahoj, volám sa " + name, age3)
}

greetingsFunction("Renata")


/*RETURN*/
/*used to specify the value that a function should output or "return" back to the caller*/
/*príklad prvý*/
let naDruhu = function(number){
    let result = number * number
    return result
}

let value1 = naDruhu(20)
console.log(value1)

/*príklad druhý*/
valueNumber = 18
let adultChekers = function(age){ /* --> Podmienka*/
    if(age >= valueNumber){
        let result = "Adult"
        return result
    } else {
        let result = "Kid"
        return result
    }
}

let value2 = adultChekers(20) /*--> Argument*/
if(value2 === "Adult"){
    console.log("Your are an " + value2)
    console.log("You are authorized!")
} else {
    console.log("You are a " + value2)
    console.log("Authorization denied!")
}


/*Null a undefined*/
/*Vyjadruje chýbajúcu hodnotu*/
/* Undefined je chyba v syntaxe kedy nie je zaradená hodnota v parametry. Naopak null je definované developerom a vynulovanie parametru
bolo zámerné*/
let age = 21 /* ---> undefined znamená že hodnota nebola definovaná*/
let secondAge = null
if(age === undefined){
    console.log("KOLKO ŽE TO MAŠ KURVA ROKOV?!")
} else if (age === 21){
    console.log("HAHAHAHAH STARY KOKOT")
} else {
    console.log(age)
}

console.log(secondAge)
/*
var name = "žena"
if(name === "muž"){
    console.log("Starý kokot")
} else if (name === "žena"){
    console.log("Stará piča")
}
*/

/*Funkcia s viacerými parametrami*/
let multiple = function(a, b, c){
    return a + b + c
}

let values = multiple(1, 2, 3)
console.log(values)

/*Default value*/
let game = function(name = "Anonymous", score = 0){
    console.log("Player: " + name, "Score: " + score)
    if(score > 5){
        console.log("You won!")
    } else {
        console.log("You loose!")
    }
}

game("Peetah", 2)

/* Definované hodnoty*/
let num1 = 1
let num2 = 2
let num3 = 3

/*Funkcia*/
let pristup = function(a, b, c){
    if( a === num1 && b === num2 && c === num3){
        console.log("OK POĎ")
    } else {
        console.log("CHOJ DO PIČE")
    }
}
/*Volanie funkcie*/
pristup(num1,num2,num3)


/*Objects*/

let thisTitle = {
    thisName: "Romino",
    thisState: "Slovensko",
    thisBirthDate: 18062012,
    thisPlaceOfBirth: "Bratislava"
}

console.log(thisTitle)
console.log(thisTitle.thisName)

/*Objekty s viacerými hodnotami*/

let thisName = "Jakub"
let thisState = "Slovensko"
/*pri vpisovaní hodnôt v objekte máme jeden hlavný objekt ktorý vieme použiť podobne ako "Global scope",
Do main_object sme vložili viaceré sub_objects ktoré si berú premenné z Global Scopu ktoré sú na čele definované.*/
let groupOfPeople = { /*---> main_object*/
    personOne: { /*---> sub_object num1*/
        personOneName: "Peter",
        personOneAge: 18,
        personOneHome: "Bratislava"
    },
    personTwo: { /*---> sub_object num2*/
        personTwoName: thisName, /*sub_object num2 si berie predom vypísané hodnoty z global scopu*/
        personTwoAge: 50,
        personTwoHome: thisState /*tieto hodnoty ak nebudú vypísané skončia ako "undenified"*/
    },
    personThree: { /*---> sub_object num3*/
        personThreeName: "Oswald",
        personThreeAge: 6,
        personThreeHome: "Pezinok"
    }

}

console.log(groupOfPeople)

/*Object - this*/
/*For defying object in console.log of global scope if there's more than one*/

let person1 = {
    nameOfNames: "Petríček" ,
    ageOfAges: 12 ,
    greet: function(){
        console.log(this.nameOfNames)
    }
}

person1.greet()

let person2 = {
    nameOfNames: "Krumpel Krupa" ,
    ageOfAges: 12 ,
    greet: function(){
        console.log(this.nameOfNames)
    }
}

person2.greet()

/*Volanie fukncie cez element*/
let textGenerator = function(active) {
    let button = document.getElementById("button")
    if (active === "button") {
        console.log("hello world!")
    } 
}

