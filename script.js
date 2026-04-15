document.getElementById('mishnaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mishnayot = {
        mishna1: document.getElementById('mishna1').value,
        mishna2: document.getElementById('mishna2').value,
        mishna3: document.getElementById('mishna3').value,
        mishna4: document.getElementById('mishna4').value,
    };
    localStorage.setItem('mishnayot', JSON.stringify(mishnayot));

    const mishnaStyles = {};
    for (let i = 1; i <= 4; i++) {
        mishnaStyles['mishna' + i] = {
            backgroundColor: document.getElementById(`mishna${i}_bgColor`).value,
            borderColor: document.getElementById(`mishna${i}_borderColor`).value,
            color: document.getElementById(`mishna${i}_textColor`).value,
            fontFamily: document.getElementById(`mishna${i}_fontFamily`).value,
            fontSize: document.getElementById(`mishna${i}_fontSize`).value + 'px',
        };
    }
    localStorage.setItem('mishnaStyles', JSON.stringify(mishnaStyles));

    const borderStyle = document.getElementById('borderStyle').value;
    const borderWidth = document.getElementById('borderWidth').value;
    const borderColor = document.getElementById('borderColor').value;

    const printSettings = {
        border: `${borderWidth}px ${borderStyle} ${borderColor}`
    };

    if (borderStyle === 'none') {
        printSettings.border = 'none';
    }

    localStorage.setItem('printSettings', JSON.stringify(printSettings));

    window.location.href = 'result.html';
});