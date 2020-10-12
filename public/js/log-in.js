
const logInForm = document.querySelector(".log-in-form");


logInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(logInForm);
  const email = formData.get("email");
  const password = formData.get("password");
  const _csrf = formData.get("_csrf");
  const body = { email, password, _csrf };

  try {
    const res = await fetch("api/users/token", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    });

    if (!res.ok) {
      throw res;
    }
    const {
      token,
      user: { id },
      user: { picUrl },
      user: { fullName },
      user: { username }
    } = await res.json();

    localStorage.setItem("READIUM_ACCESS_TOKEN", token);
    localStorage.setItem("READIUM_CURRENT_USER_ID", id);
    localStorage.setItem("READIUM_CURRENT_USER_PIC_URL", picUrl);
    localStorage.setItem("READIUM_CURRENT_USER_FULLNAME", fullName);
    localStorage.setItem("READIUM_CURRENT_USER_USERNAME", username);

    window.location.href = "/main"
  } catch (err) {
        if (err.status >= 400 && err.status < 600) {
          const errorJSON = await err.json();
          const errorsContainer = document.querySelector(".errors-container-login");
          let errorsHtml = [
            `
              <div class="alert">
                  Something went wrong. Please try again.
              </div>
            `,
          ];
          const { errors } = errorJSON;
          if (errors && Array.isArray(errors)) {
              errorsHtml = errors.map(
                (message) => `
                  <div class="alert">
                    ${message}
                  </div>
                `
              );
          }
          errorsContainer.innerHTML = errorsHtml.join("");
      } else {
          alert(
              "Something went wrong. Please check your internet connection and try again!"
          );
      }
  }
})
