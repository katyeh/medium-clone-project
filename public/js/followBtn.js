const followBtns = document.querySelectorAll(".followBtn");

followBtns.forEach((followBtn) => {
    followBtn.addEventListener('click', () => {
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
