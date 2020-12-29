import { dateFormatter, randomIcon } from "./utils.js";
const followingContainer = document.querySelector(
  ".following-users-container"
);
const clapsContainer = document.getElementById("main__clapsList");

const getUserInfo = userId => {
  return fetch(`api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
          "READIUM_ACCESS_TOKEN"
          )}`,
      },
  })
    .then((res) => res.json())
    .then((res) => res.user)
}

(async () => {
  const userId = localStorage.getItem("READIUM_CURRENT_USER_ID");

  const res = await fetch(`/api/users/${userId}/main`);
  const { followingUsers, claps } = await res.json();

  followingUsers.forEach(async (followingUser, i) => {
    let followee = await getUserInfo(followingUser.followeeId);
    followingContainer.innerHTML += `<div>
        <a href=/users/${followee.id}/profile>
        <img src=${followee.picUrl}>
        </a>
        <div>${followee.fullName}</div>
      </div>
    `;
  });

  claps.forEach(async (clap, i) => {
    clapsContainer.innerHTML += `
      <div class="clapped-stories">
        <a href=/users/${clap.User.id}/profile/following>
          <img src=${randomIcon()} class="prof-icon">
          <span><strong>${clap.User.fullName + " "}</strong>in<strong>${
      " " + clap.User.username
    }</strong></span>
        </a>
          <a href=/stories/${clap.Story.id}>
          <h4>${clap.Story.title}</h4>
          </a>
          <p>${dateFormatter(
            clap.Story.createdAt
          )} &#9733; <span class="est"></span></p>
          </div>
      `;
  });

  clapsContainer.innerHTML += `<a class='green-link' href='/users/${userId}/profile/claps'>See your full clap list</a>`;
})();
