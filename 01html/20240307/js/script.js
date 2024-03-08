const toggleEle = document.getElementsByClassName('toggle_button')
let changToggle = true;

toggleEle[0].addEventListener("click",function(){
    if(changToggle == true) {
        toggleEle[0].classList.add("active")
        changToggle = false
    } else {
        toggleEle[0].classList.remove("active")
        changToggle = true
    }
})