document.addEventListener("DOMContentLoaded", () => {
    const createStoryForm = document.querySelector('.create-story-form');

    createStoryForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(createStoryForm);
        const title = formData.get("title")
        const subtitle = formData.get("subtitle")
        const body = formData.get("body")
        const genreId = formData.get("genreId")
        const story = { title, subtitle, body, genreId };
        try {
            const res = await fetch('/api/index', {
                method: "POST",
                body: JSON.stringify(story),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                    )}`,
                },
            });
        } catch (err) {

        }
    })
});
