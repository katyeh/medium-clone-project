document.addEventListener('DOMContentLoaded', () => {
const ellipsis = document.querySelector(".fa-ellipsis-h")
const editStory = document.querySelector(".editStoryBtn");

    function showMenu() {
        var menu = document.getElementById("story__menu")
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }

    ellipsis.addEventListener('click', () => {
        showMenu();
    })

    editStory.addEventListener('click', () => {
        //TODO: Edit story page
    })

});
