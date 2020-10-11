document.addEventListener("DOMContentLoaded", () => {
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
})
