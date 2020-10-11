import { handleErrors } from "./utils.js"

document.addEventListener("DOMContentLoaded", () => {

    function publish() {
        const publishBtn = document.querySelector('.publishBtn');
        if (publishBtn.innerHTML === "Publish") {
            publishBtn.innerHTML = "Published"
            publishBtn.style.background = 'rgba(3, 168, 124, .25)';
            publishBtn.style.color = 'white';
        }
    }

    const publishBtn = document.querySelector('.publishBtn');
    const storyForm = document.querySelector('.createStory-form');

    publishBtn.addEventListener("click", async (e) => {
        publish();
        e.preventDefault();
        const formData = new FormData(storyForm);
        const title = formData.get("title")
        const subtitle = formData.get("subtitle")
        const body = formData.get("body")
        const genreId = formData.get("genreId")
        const _csrf = formData.get("_csrf")
        const story = { title, subtitle, body, genreId, _csrf };

        try {
            const res = await fetch('/api/stories', {
                method: "PUT",
                body: JSON.stringify(story),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                    )}`,
                },
            });
            if (res.status === 401) {
                window.location.href = '/splash'
                return;
            }
            if (!res.ok) {
                throw res;
            }
            form.reset();
        } catch (err) {
          handleErrors(err);
        }
    })
});
