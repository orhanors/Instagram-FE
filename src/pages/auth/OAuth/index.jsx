import React from "react";
import "./oauth.scss";
function OAuth() {
	return (
		<div className='open-ids'>
			{/* <a href={process.env.REACT_APP_BE_URL + "/users/googleLogin"}>
				<div className='auth-provider google-login'>
					<svg
						aria-hidden='true'
						className='mr-3 svg-icon'
						width={18}
						height={18}
						viewBox='0 0 18 18'>
						<g>
							<path
								d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z'
								fill='#4285F4'
							/>
							<path
								d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z'
								fill='#34A853'
							/>
							<path
								d='M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z'
								fill='#FBBC05'
							/>
							<path
								d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z'
								fill='#EA4335'
							/>
						</g>
					</svg>
					Continue with Google
				</div>
			</a> */}
			<a href={process.env.REACT_APP_BE_URL + "/auth/facebookLogin"}>
				<div className='auth-provider facebook-login'>
					<svg
						aria-hidden='true'
						className='mr-3 svg-icon'
						width={18}
						height={18}
						viewBox='0 0 18 18'>
						<path
							d='M1.88 1C1.4 1 1 1.4 1 1.88v14.24c0 .48.4.88.88.88h7.67v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h4.08c.48 0 .88-.4.88-.88V1.88c0-.48-.4-.88-.88-.88H1.88z'
							fill='#fff'
						/>
					</svg>
					Continue with Facebook
				</div>
			</a>
		</div>
	);
}

export default OAuth;
