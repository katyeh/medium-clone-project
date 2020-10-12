

document.addEventListener("DOMContentLoaded", () => {
    const deleteStory = document.querySelector(".deleteStoryBtn");

    deleteStory.addEventListener('click', async (e) => {
      let storyId = e.target.value
        try {
            const res = await fetch(`/api/stories/${storyId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                        )}`,
                    },
                });
            if (!res.ok) {
                throw res;
            }
            window.location.href = "/main"
        } catch (err) {
            console.log("error")
        }
    });
});
