const weightInput = document.querySelector('#weight');
const ariBox      = document.querySelector('#ari');

weightInput.addEventListener('input', event => {
    const weight = parseInt(event.target.value, 10);
    const ari    = weight * 40 / 212;

    ariBox.textContent = Math.round(ari * 2) / 2;
});

const currentDateInput = document.querySelector('#current-date');
const datesBox         = document.querySelector('#dates');

currentDateInput.addEventListener('change', event => {
    const dates = [ 0, 3, 7, 14, 30, 90 ].map((day, id) => {
        const date = new Date(event.target.value);

        date.setDate(date.getDate() + day);

        const li = document.createElement('li');

        li.textContent = `${day} день - ${date.toLocaleString().split(',')[0]}`;

        return li;
    });

    datesBox.replaceChildren(...dates)
});
