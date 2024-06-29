import { Router } from "express";
import { gamesCreate, gamesDelete, gamesGet, gamesGetID, gamesUpdate } from "../controllers/GamesController.js";

export const gamesRouter = Router()

gamesRouter.get('/games/', gamesGet)
gamesRouter.get('/games/:id', gamesGetID)
gamesRouter.post('/games/', gamesCreate)
gamesRouter.put('/games/:id', gamesUpdate)
gamesRouter.delete('/games/:id', gamesDelete)