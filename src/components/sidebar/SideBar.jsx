import React from "react";
import "./sideBar.scss";
import { useSelector } from "react-redux";
import UserInfoLoader from "../../loaders/UserInfoLoader";

function SideBar() {
	const { loading, data } = useSelector((state) => state.user);
	const showSidebar = () => {
		return (
			<>
				<div className='profile-container p-2'>
					<div className='d-flex justify-content-between '>
						<div className='profile d-flex align-items-center'>
							<img
								className='profile-home-img'
								src={data.image}
								alt=''
							/>
							<div className='d-flex flex-column ml-2'>
								<h6>{data.username}</h6>
								<medium className='text-secondary'>
									{data.name + " " + data.surname}
								</medium>
							</div>
						</div>
						<button className='text-primary'>Switch</button>
					</div>
					<div className='my-3 d-flex justify-content-between'>
						<h6 className='text-secondary font-weight-bolder'>
							{" "}
							Suggestions for you
						</h6>
						<button>See all</button>
					</div>
					<div className=''></div>
				</div>
			</>
		);
	};
	return <> {loading ? UserInfoLoader() : showSidebar()} </>;
}

export default SideBar;
