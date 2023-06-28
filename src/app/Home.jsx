import { React, Component, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global.style";
import { useEvent } from "../hooks/useEvent";
import cloneDeep from "clone-deep";
import Block from "../components/Block";

const Home = () => {
	const UP_ARROW = 38;
	const DOWN_ARROW = 40;
	const LEFT_ARROW = 37;
	const RIGHT_ARROW = 39;

	const [data, setData] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);

	const initialize = () => {
		let newGrid = cloneDeep(data);
		addNumber(newGrid);
		addNumber(newGrid);
		setData(newGrid);
	};

	const resetGame = () => {
		const emptyGrid = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		];
		setGameOver(false);
		setScore(0);
		addNumber(emptyGrid);
		addNumber(emptyGrid);
		setData(emptyGrid);
	};

	const addNumber = newGrid => {
		let added = false;
		let gridFull = false;
		let attempts = 0;
		while (!added) {
			if (gridFull) {
				break;
			}
			let rand1 = Math.floor(Math.random() * 4);
			let rand2 = Math.floor(Math.random() * 4);
			attempts++;
			if (newGrid[rand1][rand2] === 0) {
				newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
				added = true;
			}
		}
	};

	const swipeLeft = dummy => {
		console.log("left");
		let oldGrid = data;
		let newArray = cloneDeep(data);
		for (let i = 0; i < 4; i++) {
			let b = newArray[i];
			let slow = 0;
			let fast = 1;
			while (slow < 4) {
				if (fast === 4) {
					fast = slow + 1;
					slow++;
					continue;
				}
				if (b[slow] === 0 && b[fast] === 0) {
					fast++;
				} else if (b[slow] === 0 && b[fast] !== 0) {
					b[slow] = b[fast];
					b[fast] = 0;
					fast++;
				} else if (b[slow] !== 0 && b[fast] === 0) {
					fast++;
				} else if (b[slow] !== 0 && b[fast] !== 0) {
					if (b[slow] === b[fast]) {
						b[slow] += b[fast];
						console.log("%d + %d = %d", score, b[slow], score + b[slow]);
						setScore(score + b[slow]);
						b[fast] = 0;
						fast = slow + 1;
						slow++;
					} else {
						slow++;
						fast = slow + 1;
					}
				}
			}
		}
		if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
			addNumber(newArray);
		}
		if (dummy) {
			return newArray;
		} else {
			setData(newArray);
		}
	};

	const checkLeft = dummy => {
		console.log("check left");
		let oldGrid = data;
		let newArray = cloneDeep(data);
		for (let i = 0; i < 4; i++) {
			let b = newArray[i];
			let slow = 0;
			let fast = 1;
			while (slow < 4) {
				if (fast === 4) {
					fast = slow + 1;
					slow++;
					continue;
				}
				if (b[slow] === 0 && b[fast] === 0) {
					fast++;
				} else if (b[slow] === 0 && b[fast] !== 0) {
					b[slow] = b[fast];
					b[fast] = 0;
					fast++;
				} else if (b[slow] !== 0 && b[fast] === 0) {
					fast++;
				} else if (b[slow] !== 0 && b[fast] !== 0) {
					if (b[slow] === b[fast]) {
						b[slow] += b[fast];
						b[fast] = 0;
						fast = slow + 1;
						slow++;
					} else {
						slow++;
						fast = slow + 1;
					}
				}
			}
		}
		if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
			addNumber(newArray);
		}
		if (dummy) {
			return newArray;
		} else {
			setData(newArray);
		}
	};

	const swipeRight = dummy => {
		console.log("right");
		let oldGrid = data;
		let newArray = cloneDeep(data);
		for (let i = 3; i >= 0; i--) {
			let b = newArray[i];
			let slow = b.length - 1;
			let fast = slow - 1;
			while (slow > 0) {
				if (fast === -1) {
					fast = slow - 1;
					slow--;
					continue;
				}
				if (b[slow] === 0 && b[fast] === 0) {
					fast--;
				} else if (b[slow] === 0 && b[fast] !== 0) {
					b[slow] = b[fast];
					b[fast] = 0;
					fast--;
				} else if (b[slow] !== 0 && b[fast] === 0) {
					fast--;
				} else if (b[slow] !== 0 && b[fast] !== 0) {
					if (b[slow] === b[fast]) {
						b[slow] += b[fast];
						console.log("%d + %d = %d", score, b[slow], score + b[slow]);
						setScore(score + b[slow]);
						b[fast] = 0;
						fast = slow - 1;
						slow--;
					} else {
						slow--;
						fast = slow - 1;
					}
				}
			}
		}
		if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
			addNumber(newArray);
		}
		if (dummy) {
			return newArray;
		} else {
			setData(newArray);
		}
	};

	const checkRight = dummy => {
		console.log("check right");
		let oldGrid = data;
		let newArray = cloneDeep(data);
		for (let i = 3; i >= 0; i--) {
			let b = newArray[i];
			let slow = b.length - 1;
			let fast = slow - 1;
			while (slow > 0) {
				if (fast === -1) {
					fast = slow - 1;
					slow--;
					continue;
				}
				if (b[slow] === 0 && b[fast] === 0) {
					fast--;
				} else if (b[slow] === 0 && b[fast] !== 0) {
					b[slow] = b[fast];
					b[fast] = 0;
					fast--;
				} else if (b[slow] !== 0 && b[fast] === 0) {
					fast--;
				} else if (b[slow] !== 0 && b[fast] !== 0) {
					if (b[slow] === b[fast]) {
						b[slow] += b[fast];
						b[fast] = 0;
						fast = slow - 1;
						slow--;
					} else {
						slow--;
						fast = slow - 1;
					}
				}
			}
		}
		if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
			addNumber(newArray);
		}
		if (dummy) {
			return newArray;
		} else {
			setData(newArray);
		}
	};

	const swipeUp = dummy => {
		console.log("up");
		let b = [...data];
		let oldData = JSON.parse(JSON.stringify(data));
		for (let i = 0; i < 4; i++) {
			let slow = 0;
			let fast = 1;
			while (slow < 4) {
				if (fast === 4) {
					fast = slow + 1;
					slow++;
					continue;
				}
				if (b[slow][i] === 0 && b[fast][i] === 0) {
					fast++;
				} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
					b[slow][i] = b[fast][i];
					b[fast][i] = 0;
					fast++;
				} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
					fast++;
				} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
					if (b[slow][i] === b[fast][i]) {
						b[slow][i] += b[fast][i];
						console.log("%d + %d = %d", score, b[slow][i], score + b[slow][i]);
						setScore(score + b[slow][i]);
						b[fast][i] = 0;
						fast = slow + 1;
						slow++;
					} else {
						slow++;
						fast = slow + 1;
					}
				}
			}
		}
		if (JSON.stringify(oldData) !== JSON.stringify(b)) {
			addNumber(b);
		}
		if (dummy) {
			return b;
		} else {
			setData(b);
		}
	};

	const checkUp = dummy => {
		console.log("check up");
		let b = [...data];
		let oldData = JSON.parse(JSON.stringify(data));
		for (let i = 0; i < 4; i++) {
			let slow = 0;
			let fast = 1;
			while (slow < 4) {
				if (fast === 4) {
					fast = slow + 1;
					slow++;
					continue;
				}
				if (b[slow][i] === 0 && b[fast][i] === 0) {
					fast++;
				} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
					b[slow][i] = b[fast][i];
					b[fast][i] = 0;
					fast++;
				} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
					fast++;
				} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
					if (b[slow][i] === b[fast][i]) {
						b[slow][i] += b[fast][i];
						b[fast][i] = 0;
						fast = slow + 1;
						slow++;
					} else {
						slow++;
						fast = slow + 1;
					}
				}
			}
		}
		if (JSON.stringify(oldData) !== JSON.stringify(b)) {
			addNumber(b);
		}
		if (dummy) {
			return b;
		} else {
			setData(b);
		}
	};

	const swipeDown = dummy => {
		console.log("down");
		let b = [...data];
		let oldData = JSON.parse(JSON.stringify(data));
		for (let i = 3; i >= 0; i--) {
			let slow = b.length - 1;
			let fast = slow - 1;
			while (slow > 0) {
				if (fast === -1) {
					fast = slow - 1;
					slow--;
					continue;
				}
				if (b[slow][i] === 0 && b[fast][i] === 0) {
					fast--;
				} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
					b[slow][i] = b[fast][i];
					b[fast][i] = 0;
					fast--;
				} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
					fast--;
				} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
					if (b[slow][i] === b[fast][i]) {
						b[slow][i] += b[fast][i];
						console.log("%d + %d = %d", score, b[slow][i], score + b[slow][i]);
						setScore(score + b[slow][i]);
						b[fast][i] = 0;
						fast = slow - 1;
						slow--;
					} else {
						slow--;
						fast = slow - 1;
					}
				}
			}
		}
		if (JSON.stringify(b) !== JSON.stringify(oldData)) {
			addNumber(b);
		}
		if (dummy) {
			return b;
		} else {
			setData(b);
		}
	};

	const checkDown = dummy => {
		console.log("check down");
		let b = [...data];
		let oldData = JSON.parse(JSON.stringify(data));
		for (let i = 3; i >= 0; i--) {
			let slow = b.length - 1;
			let fast = slow - 1;
			while (slow > 0) {
				if (fast === -1) {
					fast = slow - 1;
					slow--;
					continue;
				}
				if (b[slow][i] === 0 && b[fast][i] === 0) {
					fast--;
				} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
					b[slow][i] = b[fast][i];
					b[fast][i] = 0;
					fast--;
				} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
					fast--;
				} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
					if (b[slow][i] === b[fast][i]) {
						b[slow][i] += b[fast][i];
						b[fast][i] = 0;
						fast = slow - 1;
						slow--;
					} else {
						slow--;
						fast = slow - 1;
					}
				}
			}
		}
		if (JSON.stringify(b) !== JSON.stringify(oldData)) {
			addNumber(b);
		}
		if (dummy) {
			return b;
		} else {
			setData(b);
		}
	};

	const checkIfGameOver = () => {
		let checker = checkLeft(true);
		if (JSON.stringify(data) !== JSON.stringify(checker)) {
			return false;
		}

		let checker2 = checkDown(true);
		if (JSON.stringify(data) !== JSON.stringify(checker2)) {
			return false;
		}

		let checker3 = checkRight(true);
		if (JSON.stringify(data) !== JSON.stringify(checker3)) {
			return false;
		}

		let checker4 = checkUp(true);
		if (JSON.stringify(data) !== JSON.stringify(checker4)) {
			return false;
		}
		return true;
	};

	const handleKeyDown = event => {
		if (gameOver) {
			return;
		}
		let gameOverr = false;
		switch (event.keyCode) {
			case UP_ARROW:
				swipeUp();
				gameOverr = checkIfGameOver();
				break;
			case DOWN_ARROW:
				gameOverr = checkIfGameOver();
				swipeDown();
				break;
			case LEFT_ARROW:
				gameOverr = checkIfGameOver();
				swipeLeft();
				break;
			case RIGHT_ARROW:
				gameOverr = checkIfGameOver();
				swipeRight();
				break;
			default:
				break;
		}
		if (gameOverr) {
			alert("game over\nyour score is " + score);
			setGameOver(true);
		}
	};

	useEffect(() => {
		initialize();
	}, []);

	useEvent("keydown", handleKeyDown);

	{
		data.map((row, oneIndex) => {
			return (
				<div style={{ display: "flex" }} key={oneIndex}>
					{row.map((digit, index) => (
						<Block num={digit} key={index}></Block>
					))}
				</div>
			);
		});
	}

	return (
		<>
			<GlobalStyle />
			<Container>
				<ScoreContainer>
					<ScoreTitle>score</ScoreTitle>
					<ScoreValue>{score}</ScoreValue>
				</ScoreContainer>
				<ButtonsContainer>
					{/* <button className="rank" onClick={rankOpen}>
					RANK
				</button> */}
					{/* <Rank /> */}
					<NewGameButton onClick={resetGame}>NEW GAME</NewGameButton>
				</ButtonsContainer>
				<Board>
					{data.map((row, oneIndex) => {
						return (
							<div style={{ display: "flex" }} key={oneIndex}>
								{row.map((digit, index) => (
									<Block num={digit} key={index}></Block>
								))}
							</div>
						);
					})}
				</Board>
			</Container>
		</>
	);
};

const Container = styled.div`
	display: flex;
	text-align: center;
	width: 100%;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
`;

const ScoreContainer = styled.div`
	width: 460px;
	height: 128px;
	text-align: center;
	align-items: center;
`;

const ScoreTitle = styled.div`
	font-weight: 600;
	font-size: 36px;
	line-height: 100%;
	text-align: center;
	color: #bbada1;
	cursor: default;
`;

const ScoreValue = styled.div`
	cursor: default;
	display: inline-block;
	font-weight: 700;
	font-size: 84px;
	line-height: 100%;
	text-align: center;
	color: #7a7168;
`;

const ButtonsContainer = styled.div`
	width: 460px;
	display: flex;
	justify-content: space-between;
`;

const NewGameButton = styled.button`
	cursor: pointer;
	display: flex;
	padding: 8px 16px;
	background-color: #bbada1;
	color: #faf8ef;
	border-radius: 5px;
	margin: 10px 0;
	font-weight: 500;
	font-size: 18px;
	box-sizing: content-box;
	border: none;
`;

const Board = styled.div`
	background-color: #bbada1;
	width: 460px;
	height: 460px;
	/* margin: auto; */
	padding: 10px;
	border-radius: 5px;
	box-sizing: border-box;
`;

export default Home;
