tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "primary": "#0058bc",
                "secondary": "#a53500",
                "tertiary": "#765600",
                "outline": "#558400",
                "surface-container": "#f8fafc"
            },
            "borderRadius": {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            "fontFamily": {
                "headline": ["Heebo", "sans-serif"],
                "body": ["Assistant", "sans-serif"]
            }
        },
    },
};

document.addEventListener('DOMContentLoaded', () => {
  const savedSettings = JSON.parse(localStorage.getItem('mishnaSettings'));

  if (savedSettings) {
    for (const cardId in savedSettings) {
      const cardSettings = savedSettings[cardId];
      const cardElement = document.getElementById(cardId);

      if (cardElement) {
        const paragraph = cardElement.querySelector('p');

        if (cardSettings.text) {
          paragraph.textContent = cardSettings.text;
        }
        if (cardSettings.backgroundColor) {
          cardElement.style.backgroundColor = cardSettings.backgroundColor;
        }
        if (cardSettings.borderColor) {
          cardElement.style.borderColor = cardSettings.borderColor;
        }
        if (cardSettings.color) {
          paragraph.style.color = cardSettings.color;
        }
        if (cardSettings.fontFamily) {
          paragraph.style.fontFamily = cardSettings.fontFamily;
        }
        if (cardSettings.textAlign) {
          paragraph.style.textAlign = cardSettings.textAlign;
        }
      }
    }
  }
});
