
document.addEventListener('DOMContentLoaded', () => {
  const settings = {
    card1: {},
    card2: {},
    card3: {},
    card4: {}
  };

  function saveSettings() {
    localStorage.setItem('mishnaSettings', JSON.stringify(settings));
  }

  function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('mishnaSettings'));
    if (savedSettings) {
      Object.assign(settings, savedSettings);
      applySettings();
    }
  }

  function applySettings() {
    for (const cardId in settings) {
      const cardSettings = settings[cardId];
      const cardElement = document.getElementById(cardId);

      if (cardElement) {
        const mishnahPreview = cardElement.querySelector('.mishnah-preview');
        const textarea = cardElement.querySelector('textarea');

        if (cardSettings.text) {
          textarea.value = cardSettings.text;
          autoResize(textarea);
        }
        if (cardSettings.backgroundColor) {
          mishnahPreview.style.backgroundColor = cardSettings.backgroundColor;
        }
        if (cardSettings.borderColor) {
          mishnahPreview.style.borderColor = cardSettings.borderColor;
        }
        if (cardSettings.color) {
          textarea.style.color = cardSettings.color;
        }
        if (cardSettings.fontFamily) {
          textarea.style.fontFamily = cardSettings.fontFamily;
        }
        if (cardSettings.textAlign) {
          textarea.style.textAlign = cardSettings.textAlign;
        }
      }
    }
  }

  // Make text areas editable and save content
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', () => {
      autoResize(textarea);
      const cardId = textarea.closest('.flex.flex-col.gap-8').id;
      settings[cardId].text = textarea.value;
      saveSettings();
    });
    autoResize(textarea);
  });

  function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // Handle color selections
  const colorPickers = document.querySelectorAll('[data-color]');
  colorPickers.forEach(picker => {
    picker.addEventListener('click', () => {
      const target = picker.dataset.target;
      const property = picker.dataset.property;
      const color = picker.dataset.color;
      const elements = document.querySelectorAll(target);
      elements.forEach(element => {
        element.style[property] = color;
      });

      const cardId = picker.closest('.flex.flex-col.gap-8').id;
      settings[cardId][property] = color;
      saveSettings();
    });
  });

  // Handle alignment buttons
  const alignmentButtons = document.querySelectorAll('[data-align]');
  alignmentButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      const alignment = button.dataset.align;
      const elements = document.querySelectorAll(target);
      elements.forEach(element => {
        element.style.textAlign = alignment;
      });

      const cardId = button.closest('.flex.flex-col.gap-8').id;
      settings[cardId].textAlign = alignment;
      saveSettings();
    });
  });

  // Handle font selection
  const fontSelectors = document.querySelectorAll('select');
  fontSelectors.forEach(selector => {
    selector.addEventListener('change', (event) => {
      const target = selector.dataset.target;
      const font = event.target.value;
      const elements = document.querySelectorAll(target);
      elements.forEach(element => {
        element.style.fontFamily = font;
      });

      const cardId = selector.closest('.flex.flex-col.gap-8').id;
      settings[cardId].fontFamily = font;
      saveSettings();
    });
  });

  // "Show Final Poster" button
  const showPosterButton = document.querySelector('.show-poster-button');
  if (showPosterButton) {
    showPosterButton.addEventListener('click', () => {
      window.location.href = 'print.html';
    });
  }

  loadSettings();
});
