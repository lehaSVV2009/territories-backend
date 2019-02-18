import "babel-polyfill";
import { Server } from "./libs/boardgame.io/server";
import { Game } from "territories-core";

const port = process.env.PORT || 8000;
const server = Server({ games: [Game] });

server.run(port, () => {
  console.log("App is running on port " + port);
});
