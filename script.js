//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value && index < codes.length - 1) {
      // ✅ Focus after value is set
      setTimeout(() => codes[index + 1].focus(), 10);
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (index > 0 && !code.value) {
        // ✅ Ensure backspace moves focus correctly
        setTimeout(() => codes[index - 1].focus(), 10);
      }
    }
  });

  code.addEventListener('input', () => {
    code.value = code.value.replace(/[^0-9]/g, '');
  });
});

// ✅ Automatically focus first input on load
window.addEventListener('load', () => codes[0].focus());
