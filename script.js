//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Handle typing forward
codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value && index < codes.length - 1) {
      // ✅ Focus shift after small delay
      setTimeout(() => codes[index + 1].focus(), 10);
    }
  });

  // Handle backspace
  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (!code.value && index > 0) {
        // ✅ Focus shift after backspace processing
        setTimeout(() => codes[index - 1].focus(), 10);
      }
    }
  });

  // Clean non-numeric characters
  code.addEventListener('input', () => {
    code.value = code.value.replace(/[^0-9]/g, '');
  });
});

// ✅ Automatically focus first input on load
window.addEventListener('load', () => codes[0].focus());
