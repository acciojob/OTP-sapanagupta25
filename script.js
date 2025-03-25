//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value && index < codes.length - 1) {
      // ✅ Move to next input if value is entered
      codes[index + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (index > 0 && !code.value) {
        // ✅ Move to previous input on backspace
        codes[index - 1].focus();
      }
    }
  });

  // ✅ Prevent entering more than one digit
  code.addEventListener('input', () => {
    code.value = code.value.replace(/[^0-9]/g, '');
  });
});

// ✅ Automatically focus first input on load
window.addEventListener('load', () => codes[0].focus());
