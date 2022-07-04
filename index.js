// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",database)
var sdet=JSON.parse(localStorage.getItem("admission"))||[]
    function database(e){
        
        e.preventDefault()
        var name=document.querySelector("#name").value
        var email=document.querySelector("#email").value
        var phone=document.querySelector("#phone").value
        var gender=document.querySelector("#gender").value
        var cours=document.querySelector("#course").value
        
        var detail={
            Name:name,
            Email:email,
            Phn:phone,
            gen:gender,
            course:cours,
        }
        sdet.push(detail)

        // console.log(detail)
        localStorage.setItem("admission",JSON.stringify(sdet));
    }