// console.log('connected app js')

function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())  // aikhane res shortcut ba full response likhte paro then json ar akta promise a convert korba
.then(data => console.log(data)); // then oikhan theke j data ta paba oi data take console karbo ( akhane data akta parameter so j nam e diba oi namei pabe)

}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data)) // akhane j amra console.log karsi chaile amra akhane akta function keo call karte pari, niche dekhano holo
    .then(data => displayUsers(data))
}

function displayUsers(data){ // data ta parameter onno nam o dia jabe but data dile buja jai kon parameter ta jasse 
    console.log(data)

}
