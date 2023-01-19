import axios from "axios";
const header = (axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
  "X-CSRF-TOKEN": window.csrf_token,
  "Content-Type": "application/json",
});

export const PostData = (url, value) => {
  axios
    .post(url, value, header)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// https://ppdbmin.kkafi09.my.id/api/auth/register
