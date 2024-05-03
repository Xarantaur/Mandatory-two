import "dotenv/config";
import express from "express"
const app = express();

import helmet from "helmet";
app.use(helmet())

app.use(express.json());

import path from "path"; 
app.use(express.static(path.resolve('../client/dist')));

import session from "express-session";
app.use(session({
  secret: process.env.SESSION_SECRET,  
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))


app.get("/session", (req, res) => {
  req.session.user = "user user set in busser"
  res.send({
    
  })
})



import emailrouter from "./routers/emailRouter.js";
app.use(emailrouter)

import loginRouter from "./routers/loginRouter.js"
app.use(loginRouter)




// ------------------- Live reload : ---------------------
/* import livereload from 'livereload';
import connectLivereload from 'connect-livereload'

const liveReloadServer = livereload.createServer();
liveReloadServer.watch('../client/dist');
liveReloadServer.server.once("connection", () => {
setTimeout(() => {
    liveReloadServer.refresh("/");
}, 500);
});

app.use(connectLivereload()); 
 */




app.get("*", (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
  });

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080));