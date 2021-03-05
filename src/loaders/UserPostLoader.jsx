import React from "react";
import ContentLoader from "react-content-loader";

const UserPostLoader = (props) => (
	<ContentLoader
		speed={3}
		width={12000}
		height={460}
		viewBox='0 0 12000 460'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='-14' y='108' rx='2' ry='2' width='228' height='228' />
		<rect x='260' y='104' rx='2' ry='2' width='228' height='228' />
		<rect x='514' y='101' rx='2' ry='2' width='228' height='228' />
	</ContentLoader>
);

export default UserPostLoader;
