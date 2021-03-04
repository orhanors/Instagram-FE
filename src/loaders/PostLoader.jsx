import React from "react";
import { Instagram } from "react-content-loader";

function PostLoader(props) {
	return (
		<div>
			<Instagram backgroundColor='rgb(224, 224, 224)' speed={1.5} />
			{/* <Instagram backgroundColor='gray' />
			<Instagram backgroundColor='gray' />
			<Instagram backgroundColor='gray' /> */}
		</div>
	);
}

export default PostLoader;
