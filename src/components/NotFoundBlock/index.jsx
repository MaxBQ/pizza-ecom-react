import React from "react";
import styled from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
	return (
		<div className={styled.root}>
			<div className={styled.box}>
				<h1>Page Not Found</h1>
				<p>404</p>
			</div>
		</div>
	);
};
