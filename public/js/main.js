const followingContainer = document.querySelector(
  ".following-users-container"
);

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


// profileLink.addEventListener("click", event => {
//   window.location.href = `/users/1/profile`
// });

const getUserInfo = userId => {
  return fetch(`api/users/${userId}`)
    .then((res) => res.json())
    .then((res) => res.user
      // console.log(res.user.fullName)
      // console.log(res.user.imageUrl)
    // }
    )
}

// const fetchUser = id => {
//   return fetch(`api/users/${userId}`)
//     .then(res => res.json())
//     .then(res => console.log(res))
// }

// const followingContainer = document.getElementById("main__from-following");
// document.addEventListener("DOMContentLoaded", async () => {
(async () => {
    const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");

    // console.log(await getUserInfo(2));
  const followingRes = await fetch(`/api/users/${userId}/main`);
  const { followingUsers } = await followingRes.json();
  followingUsers.forEach(async (followingUser, i) => {
    // console.log(followingUser.followeeId);
    let followee = await getUserInfo(followingUser.followeeId);
    console.log(followee.picUrl);
    followingContainer.innerHTML += `<div>
        <img src=${followee.picUrl}>
        <div>${followee.fullName}</div>
      </div>
    `;
  });
  }
)()
    // ${console.log(getUserInfo(followingUser.followeeId))}
    // ${console.log(followingUser.followeeId)}
    // ${console.log(i, getUserInfo(followingUser.followeeId))}
    // <span>${getUserInfo(followingUser.followeeId)}</span>
