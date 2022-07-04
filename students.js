// All the Code for All Students Page Goes Here
var stprof=JSON.parse(localStorage.getItem("admission"))||[];
window.addEventListener("load",displayData)
// var body=document.querySelector("#tbody")
function displayData(){
    stprof.map(function(ele){
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
var td6=document.createElement("td")
td6.innerText="Accept"
td6.addEventListener("click",function(){
    yess(ele)
}
)
var td7=document.createElement("td")
td7.innerText="reject"
td7.addEventListener("click",function(){
    noob(ele)
})
row.append(td1,td2,td3,td4,td5,td6,td7);
document.querySelector("tbody").append(row)
    })
}
var admit=JSON.parse(localStorage.getItem("admit"))||[]
function yess(ele){
    console.log(ele)
admit.push(ele)
localStorage.setItem("admit",JSON.stringify(admit))
}
var not=JSON.parse(localStorage.getItem("reject"))||[]
function noob(ele){
not.push(ele)
localStorage.setItem("reject",JSON.stringify(not))
}