let form = document.querySelector('.subscribe');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/send_email/', {
        email: form.querySelector('input').value,
    })
        .then(function (response) {
            form.querySelector('input').value = '';
        })
        .catch(function (error) {
            console.log(error);
        });
});