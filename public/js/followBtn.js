document.addEventListener("DOMContentLoaded", async () => {
  const followBtn = document.querySelector(".followBtn");

  const followeeId = followBtn.value
  const followerId = localStorage.getItem("READIUM_CURRENT_USER_ID");
  const res = await fetch(`/api/users/${followeeId}/${followerId}/checkfollow`)
    if (res.ok) {
      const following = await res.json();
      if (following === true) {
        followBtn.innerHTML = "Following"
        followBtn.style.background = 'rgba(3, 168, 124, 1)';
        followBtn.style.color = 'white';
      } else {
        followBtn.innerHTML = "Follow";
        followBtn.style.background = 0;
        followBtn.style.color = 'rgba(3, 168, 124, 1)';
      }
    }

  followBtn.addEventListener('click', async () => {
    const followeeId = followBtn.value
    const followerId = localStorage.getItem("READIUM_CURRENT_USER_ID");
    if (followBtn.innerHTML === "Following") {
      console.log(followBtn.innerHTML)
      const res = await fetch("/api/users/follow", {
        method: "DELETE",
        body: JSON.stringify({followeeId, followerId}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
              "READIUM_ACCESS_TOKEN"
          )}`,
        },
      })
      if (res.ok) {
        followBtn.innerHTML = "Follow";
        followBtn.style.background = 0;
        followBtn.style.color = 'rgba(3, 168, 124, 1)';
      }
    } else if (followBtn.innerHTML === "Follow") {
      console.log(followBtn.innerHTMl)
      const res = await fetch("/api/users/follow", {
        method: "POST",
        body: JSON.stringify({followeeId, followerId}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
              "READIUM_ACCESS_TOKEN"
          )}`,
        },
      })
      if (res.ok) {
        followBtn.innerHTML = "Following"
        followBtn.style.background = 'rgba(3, 168, 124, 1)';
        followBtn.style.color = 'white'
      }
    }
  })
})
