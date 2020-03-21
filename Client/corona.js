console.log('M service Worker');

self.addEventListener('push',(event)=> {
    console.log(' Push message ', event);
    var title = "Corona";
    event.waitUnitil(
        self.registration.showNotification(title, {
            body:'Wash ur hands & Protect urself from corona Virus',
            icon:'index.jpg',
            tag: 'Fatima & Nada'
            
        }));

})