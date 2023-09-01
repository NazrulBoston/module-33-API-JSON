
const user = {id: 1, name: 'Goriber Amir', job: 'actor'}

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

/**
{ id: 1, name: 'Goriber Amir', job: 'actor' }
{"id":1,"name":"Goriber Amir","job":"actor"}
 */

// kono number and boolean value true, false sara, JSON a joto (string) property name and
// value ase sobgulu kei double cottation ar moddhe rakhbe


//**** JSON a javascript ar object a string a convert kara jai, abar jaba script ar string k
// object a convert kara jai

const shop = {
    owner : 'Alia',
    address: {
        street: 'Vuter goli',
        city: 'Dhaka',
        country: 'Bangladesh',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true, 
    isNew: false,
}

// console.log(shop)
const shopJSON = JSON.stringify(shop)
// console.log(shopJSON)


// akhon abr string k object a convet kara hosse
const objJSON = JSON.parse(shopJSON)
console.log(objJSON)


// javascript ar kono array keo json stringify ar maddhome string a convet karte parbe

// string ke convert kare javascript object a ante hole JSON.parse karbo and
// javascript a string a convert karte hole JSON.stringify karbo