
    let img = document.querySelector('#myimg');

    function reload() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(result => {
        img.src = result.message;
        })
        .catch(error => console.log('error', error)); 

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('../sw.js').then( () => {
                console.log('Service Worker Registered');
              })
            })
          }
        }