import { GamesModel } from "../models/GamesModel.js";

export const gamesGet = async (req, res) => {
    try {
        const data = await GamesModel.find()
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
export const gamesGetID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await GamesModel.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
export const gamesCreate = async (req, res) => {
    try {
        const body = req.body
        const data = new GamesModel(body)
        await data.save()
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
export const gamesUpdate = async (req, res) => {
    try {
        const body = req.body
        const { id } = req.params
        const data = await GamesModel.findByIdAndUpdate(id, body)
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
export const gamesDelete = async (req, res) => {
    try {
        const { id } = req.params
        const data = await GamesModel.findByIdAndDelete(id)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}