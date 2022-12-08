const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let popUp = document.getElementById('popup');

function triggerPopup() {
  if (popup.classList.contains("open-popup")) {
    popup.classList.remove("open-popup");
  }
  else {
    popup.classList.add("open-popup");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
