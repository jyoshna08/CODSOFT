document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            switch(value) {
                case '=':
                    try {
                        display.textContent = eval(display.textContent);
                    } catch {
                        display.textContent = 'Error';
                    }
                    break;
                case 'C':
                    display.textContent = '';
                    break;
                default:
                    display.textContent += value;
                    break;
            }
        });
    });
});
