document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('echoForm');
  const input = document.getElementById('textInput');
  const result = document.getElementById('result');
  const resInput = document.getElementById('resInput');
  const resOutput = document.getElementById('resOutput');
  const resLength = document.getElementById('resLength');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value;
    try {
      const resp = await fetch('/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await resp.json();
      resInput.textContent = data.input;
      resOutput.textContent = data.output;
      resLength.textContent = data.length;
      result.style.display = 'block';
    } catch (err) {
      console.error(err);
      alert('Request failed. See console for details.');
    }
  });
});
