document.addEventListener('DOMContentLoaded', () => {
const ellipsis = document.querySelector(".fa-ellipsis-h")
const followBtn = document.querySelector(".followBtn");
const editStory = document.querySelector(".editStoryBtn");

    function showMenu() {
        var menu = document.getElementById("story__menu")
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }

    function follow() {
        const followBtn = document.querySelector(".followBtn");
        if (followBtn.innerHTML === "Follow") {
            followBtn.innerHTML = "Following"
            followBtn.style.background = 'rgba(3, 168, 124, 1)';
            followBtn.style.color = 'white';
        } else {
            followBtn.innerHTML = "Follow";
            followBtn.style.background = 0;
            followBtn.style.color = 'rgba(3, 168, 124, 1)';
        }
    }
    ellipsis.addEventListener('click', () => {
        showMenu();
    })

    followBtn.addEventListener('click', () => {
        follow();
    })

    editStory.addEventListener('click', () => {
        //TODO: Edit story page
    })

});
