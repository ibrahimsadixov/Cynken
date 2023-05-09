const firebaseConfig = {
    apiKey: "AIzaSyCO9A7rcbLFxMMWhkfs8syY2zFiVA9BpMc",
    authDomain: "cynken-3cdc9.firebaseapp.com",
    databaseURL: "https://cynken-3cdc9-default-rtdb.firebaseio.com",
    projectId: "cynken-3cdc9",
    storageBucket: "cynken-3cdc9.appspot.com",
    messagingSenderId: "357834373558",
    appId: "1:357834373558:web:b822b02602c3040e242917",
    measurementId: "G-63EZE21DV8"
  };

 

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref("Cynken");

dbRef.once("value", function (snapshot) {
  const data = snapshot.val();

  // Create HTML elements based on data
  const content = document.getElementById("content");
  let toggledCard = null; // keep track of currently toggled card

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const item = data[key];
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const card = document.createElement("div");
      card.className = "card";
      h2.textContent = item.header;
      p.textContent = item.text;
      card.appendChild(h2);
      card.appendChild(p);
      content.appendChild(card);

      // add click event listener to card
      card.addEventListener("click", () => {
        if (toggledCard !== null && toggledCard !== card) {
          toggledCard.classList.remove("open");
        }
        card.classList.toggle("open");
        toggledCard = card;
      });
    }
  }
});