const profileimage = document.querySelector("#profileimage")
const firstNameSpan = document.querySelector("#firstname")
const ageSpan = document.querySelector("#age")
const statusSpan = document.querySelector("#status")
const isDuck = confirm("Duck?");
const btnUpdateProfile = document.querySelector("#UpdateProfile")

if(isDuck === true){
    console.log("Ducks!!!")
}
else{
    console.log("Duck off")

    profileimage.src = "images/Oliver Suurorg.jpg"; 
    firstNameSpan.innerHTML = "Devourer of Gods"
    ageSpan.innerHTML = "9999+"
    statusSpan.innerHTML = "Attacking"
}

btnUpdateProfile.addEventListener("click", () => {
    console.log("click");
    profileimage.src = "images/Mr-Duck.jpg"; 
    firstNameSpan.innerHTML = "Mr.Duck"
    ageSpan.innerHTML = "2"
    statusSpan.innerHTML = "Cute"
});