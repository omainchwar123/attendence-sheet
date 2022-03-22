noftsa=[];

function submit()
{
var name1=document.getElementById("name_of_the_student_1").value;
var name2=document.getElementById("name_of_the_student_2").value;
var name3=document.getElementById("name_of_the_student_3").value;
var name4=document.getElementById("name_of_the_student_4").value;
 
noftsa.push(name1);
noftsa.push(name2);
noftsa.push(name3);
noftsa.push(name4);

console.log(noftsa);

document.getElementById("dn").innerHTML=noftsa;
document.getElementById("sb1").style.display="none";
document.getElementById("sb2").style.display="inline-block";
}

function sort() 
{

noftsa.sort();
console.log(noftsa);
document.getElementById(dn).innerHTML=noftsa;



}