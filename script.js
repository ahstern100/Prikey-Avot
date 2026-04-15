
document.addEventListener('DOMContentLoaded', () => {
  // --- Live visual feedback on the settings page ---

  // Auto-resize textareas
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', () => autoResize(textarea));
    autoResize(textarea);
  });
  function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  // Handle style changes (color, alignment, font)
  document.querySelectorAll('[data-color]').forEach(picker => {
    picker.addEventListener('click', () => {
      const target = document.querySelector(picker.dataset.target);
      if (target) {
        target.style[picker.dataset.property] = picker.dataset.color;
      }
    });
  });

  document.querySelectorAll('[data-align]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      if (target) {
        target.style.textAlign = button.dataset.align;
      }
    });
  });

  document.querySelectorAll('select[data-target]').forEach(selector => {
    selector.addEventListener('change', (event) => {
      const target = document.querySelector(selector.dataset.target);
      if (target) {
        target.style.fontFamily = event.target.value;
      }
    });
  });

  // --- Saving the final settings ---

  const showPosterButton = document.querySelector('.show-poster-button');
  if (showPosterButton) {
    showPosterButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigating immediately
      const settings = {};

      document.querySelectorAll('[id^="card"]').forEach(card => {
        const cardId = card.id;
        const textarea = card.querySelector('textarea');
        const mishnahPreview = card.querySelector('.mishnah-preview');

        if (textarea && mishnahPreview) {
          // Use getComputedStyle to capture all styles, whether from classes or inline
          const computedPreviewStyles = getComputedStyle(mishnahPreview);
          const computedTextStyles = getComputedStyle(textarea);

          settings[cardId] = {
            text: textarea.value,
            backgroundColor: computedPreviewStyles.backgroundColor,
            borderColor: computedPreviewStyles.borderColor,
            color: computedTextStyles.color,
            fontFamily: computedTextStyles.fontFamily,
            textAlign: computedTextStyles.textAlign,
            fontSize: computedTextStyles.fontSize,
          };
        }
      });

      localStorage.setItem('mishnaSettings', JSON.stringify(settings));
      window.location.href = 'print.html'; // Navigate after saving
    });
  }
});
