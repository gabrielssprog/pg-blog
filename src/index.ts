import { PrismaClient } from "@prisma/client"
import { OAuth2Client } from "google-auth-library"
import { App } from "./App"

const PORT = process.env.PORT || 3001

const connection = new PrismaClient()
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const app = App.newApp(connection, googleClient)

app.listen(PORT, () => console.log('server running'))