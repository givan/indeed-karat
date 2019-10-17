const Router = require("express");

const Board = require("./Board");

const app = Router();

var boardData = [
    [0, 0, 0, -1, -1],
    [0, 0, -1, 0, 0],
    [0, -1, 0, -1, 0],
    [0, 0, -1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

let board = new Board(boardData);

app.get("/findLegalMoves", (req, res) => {
    const startIdx = req.query.start || 0;
    const endIdx = req.query.end || 0;

    const moves = board.findLegalMoves([startIdx, endIdx]);
    res.json(moves);
});

app.get("/isReachable", (req, res) => {
    const startIdx = req.query.start || 0;
    const endIdx = req.query.end || 0;

    const isReachable = board.isReachable([startIdx, endIdx]);
    res.json({ isReachable });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server liseting on port: ${PORT}...`);
});

module.exports = app;