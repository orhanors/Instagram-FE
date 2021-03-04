import React from "react";
import ContentLoader from "react-content-loader";

const UserInfoLoader = (props) => (
	<ContentLoader
		speed={1.5}
		width={400}
		height={460}
		viewBox='0 0 400 460'
		backgroundColor='rgb(224, 224, 224)'
		foregroundColor='#ecebeb'
		{...props}>
		<circle cx='65' cy='58' r='24' />
		<rect x='100' y='49' rx='2' ry='2' width='71' height='5' />
		<rect x='98' y='66' rx='2' ry='2' width='140' height='10' />
	</ContentLoader>
);

export default UserInfoLoader;
