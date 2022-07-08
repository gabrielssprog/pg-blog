import { PrismaClient } from "@prisma/client"
import { App } from "./App"

const PORT = process.env.PORT || 3001

const connection = new PrismaClient()
const app = App.newApp(connection)

app.listen(PORT, () => console.log('server running'))