//event monitorEvents(document);//unmonitor
//event-target


function changetext(event){
    console.log(event);
let fpara=document.getElementById('fpara');
fpara.textContent="hello chinmay";
}
let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changetext)
//fpara.remove EventListener('click',changetext)

// event object console.log(event);


//change the default behaviour of anchor tag
let anc =  document.getElementById('anchor');

anc.addEventListener('click',function(event){
    event.preventDefault();
    anc.textContent="chal na nahi hota"
});
///avoid too many listners

// let paras=document.querySelectorAll('p');
 let aler =  (event)=> {
    alert("you jhav clike the para  : " + event.target.textContent );
 }

// for(let i=0 ; i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',aler);



// }
let mydiv=document.getElementById('div2');
mydiv.addEventListener('click',aler)
