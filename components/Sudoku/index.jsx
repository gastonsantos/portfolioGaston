// App.js
"use client"
import React, { useState } from 'react';
//import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import Sudoku from 'sudoku-umd';
//import "./sudoku.css";

const generateRandomSudoku = () => {

	// Difficulty can be adjusted here
	const difficulty = 'easy'; 
	const puzzle = Sudoku.generate(difficulty);
	return Sudoku.board_string_to_grid(puzzle);
};

const SudokuGame = () => {
	const [initialPuzzle, setInitialPuzzle] = useState(generateRandomSudoku());
	const [puzzle, setPuzzle] = useState(JSON.parse(JSON.stringify(initialPuzzle)));
	const [solvedPuzzle, setSolvedPuzzle] = useState([]);
	const [validationResult, setValidationResult] = useState('');

	const validatePuzzle = () => {
		const isPuzzleValid = 
			JSON.stringify(puzzle) === JSON.stringify(solvedPuzzle);
			setValidationResult(isPuzzleValid ? 'Correct' : 'Incorrect');
	};

	const solveSudoku = (board) => {
		const flattenedBoard = board.flat().join('');
		const solved = Sudoku.solve(flattenedBoard);
		if (solved) {
			const solvedGrid = Sudoku.board_string_to_grid(solved);
			return solvedGrid;
		} else {
			console.log('Puzzle is not solvable.');
			return board;
		}
	};

	const solvePuzzle = () => {
		const solved = solveSudoku(puzzle);
		setPuzzle(solved);
		setSolvedPuzzle(solved);
	};

	const resetPuzzle = () => {
		const newPuzzle = generateRandomSudoku();
		setInitialPuzzle(newPuzzle);
		setPuzzle(JSON.parse(JSON.stringify(newPuzzle)));
		setSolvedPuzzle([]);
		setValidationResult('');
	};

	const handleCellChange = (value, row, col) => {
		const newPuzzle = puzzle.map((r, rowIndex) =>
			r.map((cell, colIndex) => 
				(rowIndex === row && colIndex === col ? +value : cell))
		);
		setPuzzle(newPuzzle);
	};

	const clearCell = (row, col) => {
		const newPuzzle = puzzle.map((r, rowIndex) =>
			r.map((cell, colIndex) => 
				(rowIndex === row && colIndex === col ? 0 : cell))
		);
		setPuzzle(newPuzzle);
	};

	return (
		<div>
       <h2 className='mx-auto text-center text-3xl'>Sudoku</h2>
      
		<div className="container mx-auto p-4 mt-12 max-w-md">
		  <div className="grid grid-cols-3 gap-2">
			{puzzle.map((row, rowIndex) => (
			  <div key={rowIndex} className="rows grid grid-cols-3 gap-2 row-gap-2"> 
				{row.map((cell, columnIndex) => (
					<div key={`${rowIndex}-${columnIndex}`}>
				  <input
					key={columnIndex}
					type="number"
					className={`cells border border-gray-300 px-2 py-1 rounded-md w-10  ${
					  (rowIndex + columnIndex) % 2 === 0
						? 'bg-gray-100'
						: 'bg-white text-black'
					}`}
					value={cell !== 0 ? String(cell) : ''}
					onChange={(e) => handleCellChange(e.target.value, rowIndex, columnIndex)}
					maxLength={1}
					onFocus={() => clearCell(rowIndex, columnIndex)}
				  />
				 
				  </div>
				))}
			
			  </div>
			))}
		  </div>
	  
		  <div className="mt-4">
			<div className="button-container space-x-4">
			  <button className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30" onClick={validatePuzzle}>
				Validar
			  </button>
			  <button className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30" onClick={solvePuzzle}>
				Resolver
			  </button>
			  <button className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30" onClick={resetPuzzle}>
				Reiniciar
			  </button>
			</div>
	  
			{validationResult !== '' && (
  			<div className={`text-center mt-4 ${validationResult === 'Correct' ? 'text-green-500' : 'text-red-500'}`}>
    			{validationResult}
  			</div>
			)}

		  </div>
		</div>
		</div>
	  );
	  
};


export default SudokuGame;
