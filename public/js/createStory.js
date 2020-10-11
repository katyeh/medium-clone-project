import { handleErrors } from "./utils.js"

(async () => {
  const profileLink = document.querySelector(".nav-profile-link");
  const profileNavImg = document.querySelector(".modal__prof-pic");
  const profileDropdownImg = document.querySelector("#navbar__prof-icon");
  const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");
  const picUrl = localStorage.getItem(`READIUM_CURRENT_USER_PIC_URL`);
  profileNavImg.setAttribute("src", `${picUrl}`);
  profileDropdownImg.setAttribute("src", `${picUrl}`);
  profileLink.setAttribute("href", `/users/${userId}/profile`);
})()

document.addEventListener("DOMContentLoaded", () => {
    const createStoryForm = document.querySelector('.create-story-form');

    createStoryForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(createStoryForm);
        const title = formData.get("title")
        const subtitle = formData.get("subtitle")
        const body = formData.get("body")
        const genreId = formData.get("genreId")
        const _csrf = formData.get("_csrf")
        const story = { title, subtitle, body, genreId, _csrf };
        try {
            const res = await fetch('/api/stories', {
                method: "POST",
                body: JSON.stringify(story),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                    )}`,
                },
            });
            if (!res.ok) {
                throw res;
            }
            formData.reset();
            // window.location.href = '/'
        } catch (err) {
          handleErrors(err);
        }
    })
});
