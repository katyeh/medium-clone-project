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

    editStory.addEventListener('click', (e) => {
        const storyId = e.target.value
        window.location.href = `/stories/${storyId}/edit`
    });

    const userId = localStorage.getItem("READIUM_CURRENT_USER_ID", );
    const picUrl = localStorage.getItem(`READIUM_CURRENT_USER_PIC_URL`);
    const fullName = localStorage.getItem("READIUM_CURRENT_USER_FULLNAME");
    const username = localStorage.getItem("READIUM_CURRENT_USER_USERNAME");
    const responseUserImg = document.querySelector(".story__user_response_img")
    const responseName = document.querySelector(".story__user_response_name")
    const responseCountHeader = document.querySelector(".response-count-header");

    responseUserImg.setAttribute("src", `${picUrl}`);
    responseName.setAttribute("href", `/users/${userId}/profile`);
    responseName.innerText = `${fullName}`;


    const responseSubmit = document.querySelector(".story-response-submit");
    const responseForm = document.querySelector(".responseForm")
    const responseDiv = document.querySelector(".story__response_body")
    const responseAmount = document.querySelector(".responseAmount")

    responseSubmit.addEventListener("click", async (e) => {
      e.preventDefault();
      // console.log("clicked")
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
          responseForm.reset();
          const { count } = await res.json();
          responseDiv.insertAdjacentHTML('afterbegin',
          `
            <div class="story__response-preview">
              <img class="response-preview_img" src="${picUrl}" height="40px" width="40px">
              <div class="response-list-preview_name">
                <a class="response-preview_name" href='/users/${userId}/profile'>${fullName}</a>
              </div>
              <div class="response-list-preview_body">
                <p class="response-preview_body">${body}
              </div>
            </div>
          `)
          responseAmount.innerHTML = `${count} responses`
          responseCountHeader.innerText = `Responses (${count})`
      } catch (err) {
        console.log(err);
      }
  })

});

const responseButton = document.querySelector(".responseImg");
responseButton.addEventListener('click', () => {
  const responseContainer = document.getElementById("story__response");
  responseContainer.classList.add("appear")
})

const closeResponseBtn = document.getElementById("closeResponseButton");
closeResponseBtn.addEventListener('click', () => {
  // console.log("got it")
  const responseContainer = document.getElementById("story__response");
  responseContainer.classList.remove("appear")
})
