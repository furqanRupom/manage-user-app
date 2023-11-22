import mongoose from "mongoose";
import app from "./app"
import config from "./app/config";

const main = async () => {
    try {
       const dbConnect =  await mongoose.connect(config.database_url as string)
       if(dbConnect)
        app.listen(config.port,() => {
            console.log(`The app is running on port ${config.port}`)
        })

    } catch (error) {
       console.log(error)
    }
}

main();

