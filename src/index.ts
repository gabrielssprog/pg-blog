import { App } from "./App"

const app = App.newApp()

app.listen(3001, () => console.log('server running'))