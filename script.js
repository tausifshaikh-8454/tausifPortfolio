// toggle menu
let navbar = document.querySelector(".navbar")

function showMenu(){
    navbar.classList.toggle("navbar-block")

}
// onscrol header

let header = document.querySelector("Header")

let section = document.querySelectorAll("Section")
let navLinks = document.querySelectorAll("nav a")




window.onscroll = (()=>{

    // header sticky color
    header.classList.toggle('sticky', window.scrollY > 100);

    // nav active color
    section.forEach((sec)=>{
        

        let top = scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.height;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach((links)=>{
                links.classList.remove('Active');
                links.classList.contains(`href*=${id}`).add('Active');
            
                

            })
        }

    })

})