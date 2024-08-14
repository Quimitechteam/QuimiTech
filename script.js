document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('#periodic-table td');
    const infoBox = document.getElementById('element-info');
    const elementSymbol = document.getElementById('element-symbol');
    const elementName = document.getElementById('element-name');
    const elementAtomic = document.getElementById('element-atomic');
    const elementGroup = document.getElementById('element-group');
    const elementPeriod = document.getElementById('element-period');
    const elementOxidation = document.getElementById('element-oxidation');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            const symbol = element.getAttribute('data-symbol');
            const name = element.getAttribute('data-name');
            const atomic = element.getAttribute('data-atomic');
            const group = element.getAttribute('data-group');
            const period = element.getAttribute('data-period');
            const oxidation = element.getAttribute('data-oxidation') || 'N/A';

            elementSymbol.textContent = symbol;
            elementName.textContent = name;
            elementAtomic.textContent = atomic;
            elementGroup.textContent = group;
            elementPeriod.textContent = period;
            elementOxidation.textContent = oxidation;

            infoBox.style.display = 'block';
        });
    });

    // Close the info box if clicked outside
    document.addEventListener('click', (event) => {
        if (!infoBox.contains(event.target) && !event.target.matches('#periodic-table td')) {
            infoBox.style.display = 'none';
        }
    });
});
