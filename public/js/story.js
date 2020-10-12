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

const responseButton = document.getElementById("responseicon1");
responseButton.addEventListener('click', () => {
  const responseContainer = document.getElementById("story__response");
  responseContainer.classList.add("appear")
})

const closeResponseBtn = document.getElementById("closeResponseButton");
closeResponseBtn.addEventListener('click', () => {
  console.log("got it")
  const responseContainer = document.getElementById("story__response");
  responseContainer.classList.remove("appear")
})
