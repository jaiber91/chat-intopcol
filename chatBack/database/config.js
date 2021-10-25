//Con este archivo configuro la conexión de la base de datos
//la exporto y la uso en server.js
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.DB_CNN_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
                    
        });

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - vea logs');
    }


}


module.exports = {
    dbConnection
}
