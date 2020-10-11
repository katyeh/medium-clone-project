const followingContainer = document.querySelector(
  ".following-users-container"
);

(async () => {
  const profileLink = document.querySelector(".nav-profile-link");
  const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");
  profileLink.setAttribute("href", `/users/${userId}/profile`)
})()

// profileLink.addEventListener("click", event => {
//   window.location.href = `/users/1/profile`
// });

const getUserInfo = userId => {
  return fetch(`api/users/${userId}`)
    .then((res) => res.json())
    .then((res) => res.user)
}

(async () => {
  const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");

  const res = await fetch(`/api/users/${userId}/main`);
  const { followingUsers } = await res.json();
  followingUsers.forEach(async (followingUser, i) => {
    let followee = await getUserInfo(followingUser.followeeId);
    followingContainer.innerHTML += `<div>
        <img src=${followee.picUrl}>
        <div>${followee.fullName}</div>
      </div>
    `;
  });

})();