/***** Deliverable 1 *****/
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector("#header");
  console.log("Here's your header:", header);
  header.style.color = 'red';


  const div = document.querySelector('.player-container');

  PLAYERS.forEach(function(playerObj) {
    let playerDiv = document.createElement('div');
    playerDiv.className = 'player';
    // console.log(playerDiv)
    playerDiv.setAttribute('data-number', playerObj.number);


    let playerEMTag = document.createElement('em');
    playerEMTag.innerHTML = `${playerObj.nickname}`
    // console.log(playerEMTag);

    let playerHTag = document.createElement('h3');
    playerHTag.textContent = `${playerObj.name} `;

    let playerIMGTag = document.createElement('img');
    playerIMGTag.src = playerObj.photo;
    playerIMGTag.setAttribute('alt', playerObj.name);

    div.appendChild(playerDiv).appendChild(playerHTag).appendChild(playerEMTag);
    div.appendChild(playerDiv).appendChild(playerIMGTag);
    // console.log(div);
  });
  const manchesterCityPlayer = document.querySelector('div[data-number="7"]');
  div.removeChild(manchesterCityPlayer);
});

/***** Deliverable 2 *****/


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


/***** Deliverable 4 *****/


// 0: {number: 11, name: "Mo Salah", nickname: "The Egyptian King", photo: "https://cdn.cnn.com/cnnnext/dam/assets/190501145802-mo-salah-exlarge-169.jpg"}

// <div class="player-container">

// </div>

// <div class="player" data-number="(Player Number)">
//   <h3>
//     {player name} (<em>{player nickname}</em>)
//   </h3>
//   <img src="{player image}" alt="{player name}">
// </div>