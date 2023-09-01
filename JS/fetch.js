// json placeholder die search dile nicher ai fetch paoa jabe

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())  // .json is not similar but close to JSON.parse
//     .then(json => console.log(json))


function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))

}