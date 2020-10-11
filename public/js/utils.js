export const handleErrors = async (err) => {
    if (err.status >= 400 && err.status < 600) {
        const errorJSON = await err.json();
        const errorsContainer = document.querySelector(".errors-container");
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

export const dateFormatter = (string) => {
    const date = new Date(string);
    const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    return month+' '+day+', '+year;
};

export const randomIcon = () => {
  const icons = ['https://www.flaticon.com/svg/static/icons/svg/2729/2729001.svg','https://www.flaticon.com/svg/static/icons/svg/3612/3612081.svg','https://www.flaticon.com/svg/static/icons/svg/27/27106.svg','https://www.flaticon.com/svg/static/icons/svg/3603/3603989.svg','https://www.flaticon.com/svg/static/icons/svg/2933/2933488.svg','https://www.flaticon.com/svg/static/icons/svg/2689/2689183.svg','https://www.flaticon.com/svg/static/icons/svg/2726/2726422.svg','https://www.flaticon.com/svg/static/icons/svg/201/201811.svg'];
  const randomNum = Math.floor(Math.random() * (icons.length - 1) + 1);
  return icons[randomNum];
};