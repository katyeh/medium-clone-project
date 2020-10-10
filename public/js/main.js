const followingContainer = document.querySelector(
  ".following-users-container"
);

const getUserInfo = userId => {
  return fetch(`api/users/${userId}`)
    .then((res) => res.json())
    .then((res) => res.user.fullName)
}
// const followingContainer = document.getElementById("main__from-following");
// document.addEventListener("DOMContentLoaded", async () => {
(async () => {
    const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");

    console.log(await getUserInfo(2));
  const followingRes = await fetch(`/api/users/${userId}/main`);
  const { followingUsers } = await followingRes.json();
  await followingUsers.forEach(async (followingUser, i) => {
    followingContainer.innerHTML += `<div>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png">
        <div>${getUserInfo(followingUser.followeeId)}</div>
      </div>
    `
    })
  }
)()
    // ${console.log(getUserInfo(followingUser.followeeId))}
    // ${console.log(followingUser.followeeId)}
    // ${console.log(i, getUserInfo(followingUser.followeeId))}
    // <span>${getUserInfo(followingUser.followeeId)}</span>