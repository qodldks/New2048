import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "Poppins Regular";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Regular"),
			url("../fonts/Poppins-Regular.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Italic"),
			url("../fonts/Poppins-Italic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Thin";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Thin"), url("../fonts/Poppins-Thin.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Thin Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Thin Italic"),
			url("../fonts/Poppins-ThinItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins ExtraLight";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins ExtraLight"),
			url("../fonts/Poppins-ExtraLight.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins ExtraLight Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins ExtraLight Italic"),
			url("../fonts/Poppins-ExtraLightItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Light";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Light"),
			url("../fonts/Poppins-Light.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Light Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Light Italic"),
			url("../fonts/Poppins-LightItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Medium";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Medium"),
			url("../fonts/Poppins-Medium.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Medium Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Medium Italic"),
			url("../fonts/Poppins-MediumItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins SemiBold";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins SemiBold"),
			url("../fonts/Poppins-SemiBold.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins SemiBold Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins SemiBold Italic"),
			url("../fonts/Poppins-SemiBoldItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Bold";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Bold"), url("../fonts/Poppins-Bold.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Bold Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Bold Italic"),
			url("../fonts/Poppins-BoldItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins ExtraBold";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins ExtraBold"),
			url("../fonts/Poppins-ExtraBold.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins ExtraBold Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins ExtraBold Italic"),
			url("../fonts/Poppins-ExtraBoldItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Black";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Black"),
			url("../fonts/Poppins-Black.woff") format("woff");
	}

	@font-face {
		font-family: "Poppins Black Italic";
		font-style: normal;
		font-weight: normal;
		src: local("Poppins Black Italic"),
			url("../fonts/Poppins-BlackItalic.woff") format("woff");
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: Poppins;
		font-feature-settings: 'ss04' on;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input,
	textarea {
		-moz-user-select: auto;
		-webkit-user-select: auto;
		-ms-user-select: auto;
		user-select: auto;
	}

	input:focus {
		outline: none;
	}

	button {
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
	}

	.fp-watermark {
		display: none !important;
	}

	.fp-watermark > a {
		display: none !important;
	}

	body{
		background-color: #FAF8EF;
	}
`;

export default GlobalStyle;
