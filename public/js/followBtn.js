const followBtns = document.querySelectorAll(".followBtn");
document.addEventListener("DOMContentLoaded", () => {

    followBtns.forEach((followBtn) => {
        followBtn.addEventListener('click', async () => {
            try {
                const res = await fetch("/follow", {
                    method: "POST",
                    // body: JSON.stringify(followeeId, followerId),
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
   /*              if(user && user.id != currentUser.id) {
                    const following = user.fol
                } */
            } catch (err) {
                //TODO: Handle errors
            }


            if (followBtn.innerHTML === "Follow") {
                followBtn.innerHTML = "Following"
                followBtn.style.background = 'rgba(3, 168, 124, 1)';
                followBtn.style.color = 'white';
            } else {
                followBtn.innerHTML = "Follow";
                followBtn.style.background = 0;
                followBtn.style.color = 'rgba(3, 168, 124, 1)';
            }
        });
    });
})
