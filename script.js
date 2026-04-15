document.getElementById('mishnaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mishnayot = {
        mishna1: document.getElementById('mishna1').value,
        mishna2: document.getElementById('mishna2').value,
        mishna3: document.getElementById('mishna3').value,
        mishna4: document.getElementById('mishna4').value,
    };
    localStorage.setItem('mishnayot', JSON.stringify(mishnayot));
    window.location.href = 'result.html';
});