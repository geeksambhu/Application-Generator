/* set global variable i */

var i=0; 

function increment(){
i +=1;                         /* function for automatic increament of feild's "Name" attribute*/                 
}

/* 
---------------------------------------------

function to remove fom elements dynamically
---------------------------------------------

*/

function removeElement(parentDiv, childDiv){
 

     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
}


 /* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the Name text field
 
 ---------------------------------------------------------------------------
 */
function nameFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","Full Name");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}


/*

/* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the websites text field
 
 ---------------------------------------------------------------------------
 */
function websitesFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","websites");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}



/* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the address text field
 
 ---------------------------------------------------------------------------
 */
function addressFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","address");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}


/*
/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Email text field

------------------------------------------------------------------------------
*/
function emailFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Email");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Contact text field

------------------------------------------------------------------------------
*/

function contactFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Contact");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}

/*


functions  that will be called upon, when user click on the work text field

------------------------------------------------------------------------------
*/

function workFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Job title");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);


var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Company name");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);

var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "start year-end year");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);

}



/* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the Qualifications text field
 
 ---------------------------------------------------------------------------
 */
function qualificationFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","Qualifications");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}



/* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the education text field
 
 ---------------------------------------------------------------------------
 */
function educationFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","Course name");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);

var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","Institution name name");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);

var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","start year-end year");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);


}


/* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the Qualifications text field
 
 ---------------------------------------------------------------------------
 */
function interestsFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","Interests");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}

/* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the Qualifications text field
 
 ---------------------------------------------------------------------------
 */
function otherFunction()
{
var r=document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder","Other Information");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment(); 
y.setAttribute("Name","textelement_"+i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
r.appendChild(g);
r.setAttribute("id", "id_"+i);
document.getElementById("myForm").appendChild(r);
}


/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Reset Button

------------------------------------------------------------------------------
*/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}


/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Messege textarea field

------------------------------------------------------------------------------
*/

// function textareaFunction()
// {
// var r=document.createElement('span');

// var y = document.createElement("TEXTAREA");
// var g = document.createElement("IMG");
// y.setAttribute("cols", "17");
// y.setAttribute("placeholder", "message..");
// g.setAttribute("src", "delete.png");
// increment();
// y.setAttribute("Name","textelement_"+i);
// r.appendChild(y);
// g.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
// r.appendChild(g);
// r.setAttribute("id", "id_"+i);
// document.getElementById("myForm").appendChild(r);

// }

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Reset Button

------------------------------------------------------------------------------
*/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}

