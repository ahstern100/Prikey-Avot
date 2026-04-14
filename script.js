
document.addEventListener('DOMContentLoaded', () => {
  // Make text areas editable
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', () => {
      autoResize(textarea);
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
    });
  });

  // "Show Final Poster" button
  const showPosterButton = document.querySelector('.show-poster-button');
  if (showPosterButton) {
    showPosterButton.addEventListener('click', () => {
      window.location.href = 'print.html';
    });
  }
});

