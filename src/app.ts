import express,{Application, Request,Response} from "express"
import cors from "cors"
import { userRoutes } from "./app/modules/user/user.routes";
const app:Application = express()

app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.get('/',(req:Request,res:Response) => {
 res.json({
    message:'user manage app is successfully is running'
 })
})


export default app;
