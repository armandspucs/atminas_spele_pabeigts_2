
//no adreses iegūst vārdu un ievieto to virsrakstā
let adrese = window.location.hash;
adrese = adrese.replace('#','');
adrese = decodeURI(adrese);
adrese = adrese.split(",");

let vards   = adrese[0]
let klikski = adrese[1]
//document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards;

let tops = [{ "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }]
