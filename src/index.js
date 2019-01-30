import "babel-polyfill";
import { Server } from "./libs/boardgame.io/server";
import { Game } from "territories-core";

const port = process.env.PORT || 8000;
const game = Game({ board: null, dices: null });
const server = Server({ games: [game] });

server.run(port, () => {
  console.log("App is running on port " + port);
});
