const followingContainer = document.querySelector(
  ".following-users-container"
);
// const followingContainer = document.getElementById("main__from-following");
// document.addEventListener("DOMContentLoaded", async () => {
(async () => {
  const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");
  
  const followingRes = await fetch(`/api/users/${userId}/main`);
  const { followingUsers } = await followingRes.json();
  console.log(followingUsers);
  followingUsers.forEach(followingUser => {
    followingContainer.innerHTML += `
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png">
        ${followingUser.followeeId}
      </div>
    `;
  })
  console.log(followingContainer);
})();