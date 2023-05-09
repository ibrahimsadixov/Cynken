const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function(event) {
    const query = event.target.value.toLocaleLowerCase('tr-TR').replace(/i̇/g, "i");

  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    const h2Text = card.querySelector("h2").textContent.toLocaleLowerCase('tr-TR').replace(/i̇/g, "i");
    const pText = card.querySelector("p").textContent.toLocaleLowerCase('tr-TR').replace(/i̇/g, "i");

    if (h2Text.includes(query) || pText.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
