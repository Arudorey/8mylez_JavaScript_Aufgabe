// Image from https://pixabay.com/photos/amaryllis-flowers-autumn-2810993/

const btn = document.getElementById('hinzufügen');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'grey';
  btn.innerHTML = "Wird in den Warenkorb gelegt";
  setTimeout(function() {
    btn.style.backgroundColor = 'teal';
    btn.innerHTML = "In den Warenkorb";
  }, 1000);
});