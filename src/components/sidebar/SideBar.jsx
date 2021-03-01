import React from "react";
import "./sideBar.scss";

export default function () {
  return (
    <div className="profile-container p-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="profile d-flex">
            <img
                className="profile-img"
                src="https://instagram.fcia2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/30842002_1814516855516556_7247540549295538176_n.jpg?tp=1&_nc_ht=instagram.fcia2-2.fna.fbcdn.net&_nc_ohc=tCD2dBQRqYEAX8qne7N&oh=b34921dfa483655a8cb368c06bb49dd1&oe=606619BA"
                alt=""
            />
            <div className="d-flex flex-column ml-2">
                <h6>isakovkho</h6>
                <span className='text-secondary'>Isakov Khojiakbar</span>
            </div>
        </div>
        <button className='text-primary'>Switch</button>
      </div>
      <div className='my-3 d-flex justify-content-between'>
        <h6 className='text-secondary font-weight-bolder'> Suggestions for you</h6>
        <button>See all</button>
      </div>
        <div className=''>

        </div>

    </div>
  );
}
