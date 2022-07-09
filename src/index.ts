import { PrismaClient } from "@prisma/client"
import { OAuth2Client } from "google-auth-library"
import { App } from "./App"

const PORT = process.env.PORT || 3001

const connection = new PrismaClient()
const googleClient = new OAuth2Client("656652188818-neg9ptfhhpc176vt4edrnd8jvvl4e3lt.apps.googleusercontent.com")
const app = App.newApp(connection, googleClient)

app.listen(PORT, () => console.log('server running'))