document.addEventListener('DOMContentLoaded', function() {
    const colorThemes = {
        "Credit": "blueviolet",
        "Debit": "skyblue",
        "Savings": "lightgreen",
    };

    const params = new URLSearchParams(window.location.search);
    const cardType = params.get('type');
    const cardNumber = params.get('number');

    // Update the content
    document.getElementById('cardType').textContent = `${cardType} Card`;
    document.getElementById('cardNumber').textContent = cardNumber;

    // Update the background color
    const card = document.getElementById('creditCard');
    card.style.backgroundColor = colorThemes[cardType] || "grey"; // Default to grey if type is not found
});
