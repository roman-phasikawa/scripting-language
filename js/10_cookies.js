// Create / Set Cookie
function setCookie(cname, cvalue, exdays) {
  let date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
setCookie("username", "JohnDoe", 7);

// Get Cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
}
console.log(getCookie("username"));

// Delete Cookie
function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
deleteCookie("username");
