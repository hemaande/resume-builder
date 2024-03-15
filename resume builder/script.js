function addnewField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weObj= document.getElementById('we');
    let weAddbtns= document.getElementById('weAddbtn');
    weObj.insertBefore(newNode, weAddbtns);
}

function addNewAQ(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let eqObj= document.getElementById('aq');
    let eqAddbtns= document.getElementById('aqAddbtn');
    eqObj.insertBefore(newNode, eqAddbtns);
}

function generateCV(){
   let namefield=document.getElementById('nameField').value;
   let namet1=document.getElementById('namet1');
   namet1.innerHTML = namefield;
   
    document.getElementById('namet2').innerHTML = namefield;
    document.getElementById('contactt').innerHTML = document.getElementById("contactField").value;
    document.getElementById('addresst').innerHTML = document.getElementById("addressField").value;
    document.getElementById('ldt').innerHTML=document.getElementById('ldField').value;
    document.getElementById('hrt').innerHTML = document.getElementById('hrField').value;
    document.getElementById('lct').innerHTML = document.getElementById('lcField').value;

    document.getElementById('objectivet').innerHTML = document.getElementById("objectiveField").value;
    let we = document.getElementsByClassName('weField');
    let str="";
    for(let e of we){
        str=str+ `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML= str;

    let aq = document.getElementsByClassName('aqField');
    let str1="";
    for(let e of aq){
        str1=str1+ `<li> ${e.value} </li>`;
    }
    document.getElementById('aqt').innerHTML= str1;

    document.getElementById('cv-form').style.display= 'none';
    document.getElementById('cv-template').style.display='block';
}


function printcv(){
    window.print();
}