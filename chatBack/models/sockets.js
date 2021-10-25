

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            //Validar el JWT

            //Saber que usuario está activo mediante el UID

            //Emitir todos los usuarios conectados

            //Socket join (unir un user a una sala)

            //Escuchar cuando el cliente manda un mensaje

            //Disconnect, marcar en el DB que el usuario está desconectado
            
           
        
        });
    }


}


module.exports = Sockets;