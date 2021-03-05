import React from "react";
import ContentLoader from "react-content-loader";

const StoryLoader = (props) => (
	<ContentLoader
		speed={3}
		width={400}
		height={150}
		viewBox='0 0 400 150'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<circle cx='165' cy='66' r='45' />
	</ContentLoader>
);

export default StoryLoader;
