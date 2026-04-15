document.addEventListener('DOMContentLoaded', () => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('mishnaSettings');

    if (savedSettings) {
        const settings = JSON.parse(savedSettings);

        // Loop through each card (card1, card2, etc.)
        for (const cardId in settings) {
            const cardElement = document.getElementById(cardId);
            const textElement = cardElement ? cardElement.querySelector('p') : null;

            if (cardElement && textElement) {
                const cardSettings = settings[cardId];

                // Apply styles to the card and text elements
                cardElement.style.backgroundColor = cardSettings.backgroundColor || '';
                cardElement.style.borderColor = cardSettings.borderColor || '';
                textElement.textContent = cardSettings.text || '';
                textElement.style.color = cardSettings.color || '';
                textElement.style.fontFamily = cardSettings.fontFamily || '';
                textElement.style.textAlign = cardSettings.textAlign || 'center';
                textElement.style.fontSize = cardSettings.fontSize || '1.5rem'; // Default size if not set
            }
        }
    } else {
        // Optional: You can log a message if no settings are found
        console.log("No saved settings found. Displaying default poster.");
    }
});