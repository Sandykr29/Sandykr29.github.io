let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// GitHubCalendar(".react-activity-calendar", "Sandykr29")
GitHubCalendar(".react-activity-calendar", "Sandykr29", { responsive: true });

document.getElementById("resume-button-1").onclick = ()=>{
    // location.href= "\\static\\pdf\\Sandeep_Kumar_Resume.pdf"
    window.open("\\static\\pdf\\Sandeep_Kumar_Resume.pdf",'_blank')
}
document.getElementById("resume-button-2").onclick = ()=>{
    // location.href= "\\static\\pdf\\Sandeep_Kumar_Resume.pdf"
    window.open("\\static\\pdf\\Sandeep_Kumar_Resume.pdf",'_blank')
}
