console.log('M service Worker');

self.addEventListener('push',(event)=> {
    console.log(' Push message ', event);
    var title = "Corona";
    event.waitUnitil(
        self.registration.showNotification(title, {
            body: 'protect urself from corona Virus',
            tag:  'Fatima & Nada'
            
        }));

})