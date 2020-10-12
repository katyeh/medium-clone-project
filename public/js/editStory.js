import { handleErrors } from "./utils.js"

document.addEventListener("DOMContentLoaded", () => {

    function publish() {
        const publishBtn = document.querySelector('.beans');
        if (publishBtn.innerHTML === "Publish") {
            publishBtn.innerHTML = "Published"
            publishBtn.style.background = 'rgba(3, 168, 124, .25)';
            publishBtn.style.color = 'white';
        }
    }

    const storyForm = document.querySelector('.createStory-form');
    const publishBtn = document.querySelector('.beans');

    publishBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const formData = new FormData(storyForm);
        const title = formData.get("title")
        const subtitle = formData.get("subtitle")
        const body = formData.get("body")
        const genreId = formData.get("genreId")
        const storyId = formData.get("storyId")
        const story = { title, subtitle, body, genreId };

        try {
            const res = await fetch(`/api/stories/${storyId}`, {
                method: "PUT",
                body: JSON.stringify(story),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                    )}`,
                },
            });
            if (res.status === 401) {
 /*                window.location.href = '/splash'
                return; */
            }
            if (!res.ok) {
                throw res;
            }
            publish();
            window.location.href = `/stories/${storyId}`
            storyForm.reset();
        } catch (err) {
          console.log(err);
          handleErrors(err);
        }
    })
});
