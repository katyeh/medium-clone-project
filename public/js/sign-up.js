import { handleErrors } from "./utils.js";

const signUpForm = document.querySelector(".sign-up-form");

signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(signUpForm);
    const username = formData.get("username");
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const body = { username, fullName, email, password, confirmPassword };

    try {
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (!res.ok) {
            console.log("error happened")
            throw res;
        }
        const {
            token,
            user: { id }
        } = await res.json();
        localStorage.setItem("READIUM_ACCESS_TOKEN", token);
        localStorage.setItem("READIUM_CURRENT_USER_ID", id);
    } catch (error) {
        handleErrors(error)
    }
})
