console.log("Navbar JS Loaded");

const projectsBtn = document.getElementById("projectsBtn");
const projectsMenu = document.getElementById("projectsMenu");
const projectTypes = document.querySelectorAll(".project-type");
const projectLists = document.querySelectorAll(".project-list");

projectsBtn.onclick = function(e){

    e.stopPropagation();

    projectsMenu.classList.toggle("show");

    projectLists.forEach(list=>{

        list.classList.remove("show");

    });

};

projectTypes.forEach(type=>{

    type.onclick=function(e){

        e.stopPropagation();

        projectLists.forEach(list=>{

            list.classList.remove("show");

        });

        document
            .getElementById(type.dataset.target)
            .classList.add("show");

    }

});

document.onclick=function(){

    projectsMenu.classList.remove("show");

    projectLists.forEach(list=>{

        list.classList.remove("show");

    });

}
