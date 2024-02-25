var search = document.querySelector(".collection-search"); // Corrected selector for class
var element = document.querySelector(".products"); // Corrected selector for class
var elements = element.querySelectorAll("div");
search.addEventListener("keyup", function() {
  var enteredValue = event.target.value.toUpperCase(); // Corrected toUpperCase() method
  for (var count = 0; count < elements.length; count++) { // Corrected loop condition
    var elementsList = elements[count].querySelector("p").textContent;
    if (elementsList.toUpperCase().indexOf(enteredValue) < 0) {
      elements[count].style.display = "none";
    } else {
      elements[count].style.display = "block"; // Corrected property name
    }
  }
});
var submitbtn=document.querySelecttor(".contact-submitbtn");
submitbtn.addEventListener("onclick",function(){
    alert=("Your feedback successfully submited");
   
})