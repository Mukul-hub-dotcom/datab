// All the Code for the Rejected page goes here
var rejecto=JSON.parse(localStorage.getItem("reject"))||[];
window.addEventListener("load",displayData)
// var body=document.querySelector("#tbody")
function displayData(){
    rejecto.map(function(ele){
var row=document.createElement("tr")
var td1=document.createElement("td")
td1.innerText=ele.Name
var td2=document.createElement("td")
td2.innerText=ele.Email
var td3=document.createElement("td")
td3.innerText=ele.course
var td4=document.createElement("td")
td4.innerText=ele.gen
var td5=document.createElement("td")
td5.innerText=ele.Phn


row.append(td1,td2,td3,td4,td5);
document.querySelector("tbody").append(row)
    })
}
