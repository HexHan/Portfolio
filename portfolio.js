const navButton = document.getElementById('nav-button-list');

const navList = document.getElementById('nav-link-list')


let hideList = () => {
     if (navList.style.display === "none") {
        navList.style.display = "block";
        
    } else {
        navList.style.display = "none"
       
    }
   
}
let displayList = () => {
    navList.style.display = "none";
  
}

navButton.addEventListener("mouseover", hideList); 
navList.addEventListener("mouseleave", displayList)