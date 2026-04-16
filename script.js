document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mishnaForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        // Process each Mishna
        for (let i = 1; i <= 4; i++) {
            const mishnaPrefix = `mishna${i}`;
            data[mishnaPrefix] = {
                text: formData.get(`${mishnaPrefix}`),
                borderColor: formData.get(`${mishnaPrefix}_borderColor`),
                bgColor: formData.get(`${mishnaPrefix}_bgColor`),
                textColor: formData.get(`${mishnaPrefix}_textColor`),
                fontFamily: formData.get(`${mishnaPrefix}_fontFamily`),
                fontSize: formData.get(`${mishnaPrefix}_fontSize`)
            };
        }

        // Process page settings
        data.page_bgColor = formData.get('page_bgColor');

        // Store data in localStorage to be accessed by the result page
        localStorage.setItem('mishnaData', JSON.stringify(data));

        // Open the result page in a new tab
        window.open('result.html', '_blank');
    });
});