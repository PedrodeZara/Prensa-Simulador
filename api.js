const host = 'https://dattebayo-api.onrender.com';

    fetch(`${host}/clans`)
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data.clans.length);
    })

    .catch(error => {
        console.error(error);
    })
