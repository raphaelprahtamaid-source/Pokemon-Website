const cardsDiv = document.getElementById("cards");
const searchInput = document.getElementById("search");

let allCards = [];

fetch("https://darling-narwhal-87798c.netlify.app/pokemon_indonesia_cards.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    allCards = data;
    showCards(allCards);
  })
  .catch(err => console.error(err));

function showCards(cards) {
  cardsDiv.innerHTML = "";

  cards.forEach(card => {
    cardsDiv.innerHTML += `
      <div class="card">
        <img src="${card.images?.small || ''}">
        <h3>${card.name}</h3>
        <p>${card.supertype || ''}</p>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const text = searchInput.value.toLowerCase();

  const filtered = allCards.filter(card =>
    (card.name || "").toLowerCase().includes(text)
  );

  showCards(filtered);
});
