import React from "react";
import color from "../styles/theme";
import styled from "styled-components";

const Block = ({ num }) => {
	const blockColorIndex = Math.log2(num) - 1;
	// 1024 -> 9
	// 512 -> 8
	// log2num - 1
	console.log(num);

	return (
		<Box
			style={{
				color: num === 2 || num === 4 ? color.brown400 : color.brown100,
				backgroundColor: color.block[blockColorIndex],
				fontSize: num < 10 ? 58 : num < 100 ? 52 : num < 1000 ? 42 : 32,
			}}>
			{num !== 0 ? num : ""}
		</Box>
	);
};

const Box = styled.div`
	height: 90px;
	width: 90px;
	margin: 10px;
	display: flex;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	background-color: #cdc0b4;
`;

export default Block;
