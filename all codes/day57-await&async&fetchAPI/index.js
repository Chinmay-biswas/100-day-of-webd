// async function getData(){
//     setTimeout(() => {
// console.log("i am inside set time out block")        
//     }, 3000);
// }
// getData();
// //await logic 
// // learn fetch api

// async function  getData(){
//     //get request  ->async
//     let response= await fetch('https://jsonplaceholder.typicode.com/posts');
//     //parse json
//     let data = await response.json();
//     console.log(data);
// }
// getData();

//scenario
//prepare the url /api endpoint ->sync function
// we have to do await here ->fetch data -> network call -> async catagory
//process data ->sync

const myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");
const url="https://jsonplaceholder.typicode.com/posts";


const options ={
    method: "POST",
    body:JSON.stringify({username:"chinamy biswas"}),
    headers:myHeaders,
};

async function GetData(){
    const url="https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data->",data);
}

async function PostData(){
const response = await fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'chinamy I am in love with someone.',
    userId: 5,
    /* other post data */
  })
})
let data = await response.json();
console.log("post data->",data);
}

async function proceesdata(){
PostData();
GetData();
}

proceesdata();
