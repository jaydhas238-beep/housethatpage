document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("projectsBtn");
    const menu = document.getElementById("projectsMenu");

    const types = document.querySelectorAll(".project-type");
    const lists = document.querySelectorAll(".project-list");

    btn.addEventListener("click", (e) => {

        e.stopPropagation();

        menu.classList.toggle("show");

        lists.forEach(list => {

            list.classList.remove("show");

        });

    });

    types.forEach(type => {

        type.addEventListener("mouseenter", () => {

            lists.forEach(list => {

                list.classList.remove("show");

            });

            const target = document.getElementById(type.dataset.target);

            if(target){

                target.classList.add("show");

            }

        });

    });

    document.addEventListener("click", () => {

        menu.classList.remove("show");

        lists.forEach(list => {

            list.classList.remove("show");

        });

    });

});
