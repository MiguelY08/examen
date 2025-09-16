import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewurlParser : true,
            useunifieldtopology :true,
        });
        console.log(conectado)
    } catch(error){
    console.error("Error de conexion ",error)
    process.exit(1)
    }
}