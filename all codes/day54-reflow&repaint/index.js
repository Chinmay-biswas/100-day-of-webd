


const t1=performance.now();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='this is para'+i;
    document.body.appendChild(para);
}
const t2=performance.now();

console.log(t2-t1);

//code 2
const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='this is para'+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv)

const t4=performance.now();
console.log(t4-t3);


// why second code is faster 

// so for that we have to know the repaint and reflow working

// best code

const t5=performance.now();
let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='this is para'+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6=performance.now();
console.log(t6-t5);
