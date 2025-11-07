document.addEventListener('DOMContentLoaded', function() {
    // The page uses a container <div id="form"> that contains the actual <form> element.
    // Make sure we select the real <form> so we can call form.reset() later.
    const formContainer = document.getElementById('form');
    if (!formContainer) return;

    const form = formContainer.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const data = new FormData();

        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const thoughtsEl = document.getElementById('thoughts');
        const feedbackEl = document.getElementById('feedback');
        const futureEl = document.getElementById('future');

        data.append('entry.1739256631', nameEl ? nameEl.value : '');
        data.append('entry.1103316345', emailEl ? emailEl.value : '');
        data.append('entry.783539224', thoughtsEl ? thoughtsEl.value : '');
        data.append('entry.988870154', feedbackEl ? feedbackEl.value : '');
        data.append('entry.315596148', futureEl ? futureEl.value : '');

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSesGRCPnsUmGSUmkcSO0kFarLv6kGKT-TJEfFKIbuNLUBVAdA/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(function() {
            alert('Thank you for your time!');
            window.location.href = 'https://froggy1018.github.io/Lives-Across-Cultures-Voices-From-Japan/'
            form.reset();
        }).catch(function() {
            alert('There was an error...');
        });
    });
});