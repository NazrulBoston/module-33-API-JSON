// console.log('inside index js')

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}


function displayUsers2(data) { // data ta parameter onno nam o dia jabe but data dile buja jai kon parameter ta jasse 
    const ul = document.getElementById('users-list')    // akhane id take dhore ane akhane nie asa hoese jno pore amr ar moddhe append karte pari , ja niche kara hoese
    for (const user of data) {
        console.log(user.name)

        const li = document.createElement('li');   // li create kara hosse and nicher line innerText ar maddhome hard cord na likhe function user.name die user name gulo
        // li.innerText = 'user'                       // amra amdr windows a passi 
        li.innerText = user.name;
        ul.appendChild(li)


    }

}



//debugging dekhar jonno nicher function create kara hoese

function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}



function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}