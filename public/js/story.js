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

    const responseSubmit = document.querySelector(".story-response-submit");
    const responseForm = document.querySelector(".responseForm")

    responseSubmit.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("clicked")
      const formData = new FormData(responseForm);
      const body = formData.get("body");
      const storyId = formData.get("storyId");
      const response = { body };

      try {
          const res = await fetch(`/api/stories/${storyId}/responses`, {
              method: "POST",
              body: JSON.stringify(response),
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                      "READIUM_ACCESS_TOKEN"
                  )}`,
              },
          });
          if (!res.ok) {
              throw res;
          }
          form.reset();
      } catch (err) {
        console.log(err);
      }
  })

});
