const simpsonsname= document.getElementById('firstname');
const simpsonslastname =document.getElementById('lastname');
const simpsonsage =document.getElementById('age');


const simpsonsname2= document.getElementById('firstname2');
const simpsonslastname2 =document.getElementById('lastname2');
const simpsonsage2 =document.getElementById('age2');


const simpsonsname3= document.getElementById('firstname3');
const simpsonslastname3 =document.getElementById('lastname3');
const simpsonsage3 =document.getElementById('age3');

const simpsonsname4= document.getElementById('firstname4');
const simpsonslastname4 =document.getElementById('lastname4');
const simpsonsage4 =document.getElementById('age4');

const simpsonsname5= document.getElementById('firstname5');
const simpsonslastname5 =document.getElementById('lastname5');
const simpsonsage5 =document.getElementById('age5');

const simpsonsname6= document.getElementById('firstname6');
const simpsonslastname6 =document.getElementById('lastname6');
const simpsonsage6 =document.getElementById('age6');

const simpsonsname7= document.getElementById('firstname7');
const simpsonslastname7 =document.getElementById('lastname7');
const simpsonsage7 =document.getElementById('age7');

const simpsonsname8= document.getElementById('firstname8');
const simpsonslastname8 =document.getElementById('lastname8');
const simpsonsage8 =document.getElementById('age8');

const simpsonsname9= document.getElementById('firstname9');
const simpsonslastname9=document.getElementById('lastname9');
const simpsonsage9 =document.getElementById('age9');

const simpsonsname10= document.getElementById('firstname10');
const simpsonslastname10 =document.getElementById('lastname10');
const simpsonsage10 =document.getElementById('age10');



const apiUrl="https://localhost:5001/gravityfalls/character";
const apiResponse=async ()=>{
    const response=await fetch(apiUrl);
    const data= await response.json();
    console.log(data);
  
    simpsonsname.innerText=data[0].firstName;
    simpsonslastname.innerText=data[0].lastName; 
    simpsonsage.innerText=data[0].age; 

    simpsonsname2.innerText=data[1].firstName;
    simpsonslastname2.innerText=data[1].lastName; 
    simpsonsage2.innerText=data[1].age; 

    simpsonsname3.innerText=data[2].firstName;
    simpsonslastname3.innerText=data[2].lastName; 
    simpsonsage3.innerText=data[2].age; 

    simpsonsname4.innerText=data[3].firstName;
    simpsonslastname4.innerText=data[3].lastName; 
    simpsonsage4.innerText=data[3].age; 

    simpsonsname5.innerText=data[4].firstName;
    simpsonslastname5.innerText=data[4].lastName; 
    simpsonsage5.innerText=data[4].age; 
    
    simpsonsname6.innerText=data[5].firstName;
    simpsonslastname6.innerText=data[5].lastName; 
    simpsonsage6.innerText=data[5].age; 
    
    simpsonsname7.innerText=data[6].firstName;
    simpsonslastname7.innerText=data[6].lastName; 
    simpsonsage7.innerText=data[6].age; 

    simpsonsname8.innerText=data[7].firstName;
    simpsonslastname8.innerText=data[7].lastName; 
    simpsonsage8.innerText=data[7].age; 

    simpsonsname9.innerText=data[8].firstName;
    simpsonslastname9.innerText=data[8].lastName; 
    simpsonsage9.innerText=data[8].age; 

    simpsonsname10.innerText=data[9].firstName;
    simpsonslastname10.innerText=data[9].lastName; 
    simpsonsage10.innerText=data[9].age; 

   
    
  
    
    

   
}

apiResponse();

