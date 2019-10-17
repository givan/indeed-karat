const chai = require("chai");
const Board = require("../Board");

const expect = chai.expect;

describe("Board class", () => {
    var boardData = [
        [0,  0,  0, -1, -1],
        [0,  0, -1,  0,  0],
        [0, -1,  0, -1,  0],
        [0,  0, -1,  0,  0],
        [0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0],
      ];      

    var boardData1 = [
        [ 0,  0,  0, 0, -1 ],
        [ 0, -1, -1, 0,  0 ],
        [ 0,  0,  0, 0,  0 ],
        [ 0, -1,  0, 0,  0 ],
        [ 0,  0,  0, 0,  0 ],
        [ 0,  0,  0, 0,  0 ],
    ];

    var boardData2 = [
        [  0,  0,  0, 0, -1 ],
        [  0, -1, -1, 0,  0 ],
        [  0,  0,  0, 0,  0 ],
        [ -1, -1,  0, 0,  0 ],
        [  0, -1,  0, 0,  0 ],
        [  0, -1,  0, 0,  0 ],
    ];

    var start1 = [3, 1];
    var start2 = [5, 3];
    var start3 = [5, 1];
    var start4 = [6, 0];
    var start5 = [6, 4];
    var start6 = [0, 0];
    var start7 = [2, 2];

    var end1 = [0, 0];
    var end2 = [5, 0];

    it("will provide the possible solutions from starting point 1", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start1);

        expect(legalMoves).to.be.an('array').with.length(2);
    });

    it("will provide the possible solutions from starting point 2", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start2);

        expect(legalMoves).to.be.an('array').with.length(4);
    });

    it("will provide the possible solutions from starting point 3", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start3);

        expect(legalMoves).to.be.an('array').with.length(4);
    });

    it("will provide the possible solutions from starting point 4", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start4);

        expect(legalMoves).to.be.an('array').with.length(2);
    });

    it("will provide the possible solutions from starting point 5", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start5);

        expect(legalMoves).to.be.an('array').with.length(2);
    });

    it("will provide the possible solutions from starting point 6", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start6);

        expect(legalMoves).to.be.an('array').with.length(2);
    });

    it("will provide the possible solutions from starting point 7", () => {

        let board = new Board(boardData);

        const legalMoves = board.findLegalMoves(start7);

        expect(legalMoves).to.be.an('array').with.length(0);
    });

    it('will determine if endpoint is reachable using board1 and endpoint1', () => {
        let board1 = new Board(boardData1);
        
        const isReachable = board1.isReachable(end1);
        expect(isReachable).to.be.true;
    });

    it('will determine if endpoint is NOT reachable for board2 and endpoint2', () => {
        let board2 = new Board(boardData2);

        const isReachable = board2.isReachable(end2);
        expect(isReachable).to.be.false;
    });
});