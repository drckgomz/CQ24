/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let currentFilter = ''; // This will hold the current filter type


function filterAccounts() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function filterResults(type) {
    console.log("Filtering for:", type);
    // Here you'd filter your results based on the type (credit, debit, savings)
    // This could involve hiding/showing elements, making API calls, etc.
  }

  function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

  // Display the card details
window.onload = function() {
    var cardType = getURLParameter('type');
    var cardNumber = getURLParameter('number');
    document.getElementById('cardInfo').innerHTML = `<h4>${cardType} Card</h4><p>${cardNumber}</p>`;
    // Load and display the card statement here
    document.getElementById('cardStatement').innerHTML = `<p>Statement for ${cardType} Card</p>`;
}

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Updated cards array to include a 'type' for each card
let cards = [
    { type: "Credit", number: "**** **** **** 1234" },
    { type: "Credit", number: "**** **** **** 1023" },
    { type: "Debit", number: "**** **** **** 5678" },
    // { type: "Savings", number: "**** **** **** 9012" },
    { type: "Credit", number: "**** **** **** 4856" } // Example savings card
    // Add more cards as needed
  ];
  
  let currentIndex = 0; // Track the current index for navigation
  
  const colorThemes = {
    "Credit": "blueviolet", // Original color
    "Debit": "skyblue",
    "Savings": "lightgreen",
    // Add more types and colors as needed
};

  function displayCards(type = '') {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = ''; // Clear existing cards

    let filteredCards = cards.filter(card => !type || card.type === type);

    // Calculate indices for the current set of filtered cards
    let start = currentIndex * 4; // Display 4 cards at a time
    let end = start + 4;
    let currentCards = filteredCards.slice(start, end);

    currentCards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<h4>${card.type} Card</h4><p>${card.number}</p>`;
        // Set background color based on card type using the colorThemes object
        cardElement.style.backgroundColor = colorThemes[card.type] || "grey"; // Fallback color if type not found
        container.appendChild(cardElement);

        // Add click event for navigation
        cardElement.onclick = function() {
            if (card.type === 'Savings') {
                window.location.href = 'savings.html';
            } else {
                window.location.href = `cardDetails.html?type=${encodeURIComponent(card.type)}&number=${encodeURIComponent(card.number)}`;
            }
        };
    });

    // Adjust the visibility of navigation buttons based on the number of filtered cards
    adjustNavigationVisibility(filteredCards);
}

function adjustNavigationVisibility(filteredCards) {
    const navigation = document.querySelector('.navigation');
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');
    
    navigation.style.display = filteredCards.length > 4 ? 'flex' : 'none';
    prevButton.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
    nextButton.style.visibility = (currentIndex + 1) * 4 < filteredCards.length ? 'visible' : 'hidden';
}


  
  function filterResults(type) {
    console.log("Filtering for:", type);
    currentIndex = 0; // Reset index when filter changes

    // Ensure 'all' is treated as an empty string for no filter
    currentFilter = type.toLowerCase() === 'all' ? '' : type.charAt(0).toUpperCase() + type.slice(1);

    displayCards(currentFilter); // Pass the properly formatted filter type
}


  // Initial display without any filter
  displayCards();
  
  currentCards.forEach(card => {
    let cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `<h4>${card.type} Card</h4><p>${card.number}</p>`;
    container.appendChild(cardElement);
  
    // Navigate to the card details page with parameters on click
    cardElement.onclick = function() {
      window.location.href = `cardDetails.html?type=${encodeURIComponent(card.type)}&number=${encodeURIComponent(card.number)}`;
    };
  });
  

  function nextSet() {
    const totalPages = Math.ceil(cards.length / 4); // Assuming 4 cards per "page"
    if ((currentIndex + 1) * 4 < cards.length) {
      currentIndex++;
      displayCards(currentFilter); // Make sure to reapply the current filter
    }
  }
  
  function previousSet() {
    if (currentIndex > 0) {
      currentIndex--;
      displayCards(currentFilter); // Make sure to reapply the current filter
    }
  }
  
  