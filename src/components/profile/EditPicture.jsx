import React, { useEffect, useState } from "react";
import "../newpost/newpost.scss";
import { Button, Modal, FormControl, Image } from "react-bootstrap";
import backend from "../../helpers/client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRefreshTrue } from "../../store/refresh";

function EditPicture(props) {
	const dispatch = useDispatch();
	const { refresh } = useSelector((state) => state);
	const [show, setShow] = useState(true);
	const [file, setFile] = useState();
	const [input, setInput] = useState();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    //useEffect((e) => handleFile(e), [])

	const handleFile = (e) => {
		const formData = new FormData();
		formData.append("image", e.target.files[0]);

		setFile(formData);
		setInput(URL.createObjectURL(e.target.files[0]));
	};

	const handleUpload = async (e) => {
		try {
			const response = await backend({
				url: "/users/me/update/image",
				method: "put",
				data: file,
			});
			console.log(response, "responnssssss");
			if (response.status == 201) {
				setShow(false);
				dispatch(setRefreshTrue(!refresh));
			}
		} catch (error) {
			console.log("handle upl img err: ", error);
		}
	};

	return (
		<div className='mb-4 p-2 py-3'>
			{/*<Button
				className='newpost-button btn-secondary text-secondary d-flex justify-content-start align-items-center'
				onClick={handleShow}>
				<i
					className='far fa-edit grey-text mr-1'
					style={{ fontSize: "1.2rem" }}></i>
				Start a post
            </Button>*/}
			<Modal show={props.showModal && show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update profile picture</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <Button type="file" className="newpost-button btn-secondary text-secondary mb-4"> Choose an item to post</Button> */}
					<div>
						{input !== 0 && (
							<Image id='image-to-post' src={input} fluid />
						)}
					</div>

					{/* <button onClick={(e) => handleUpload(e)}>upload</button> */}
				</Modal.Body>
				<Modal.Footer className='d-flex justify-content-between align-items-center'>
					<div>
						<div className='d-flex align-items-center'>
							<i
								id='plus'
								className='fas fa-plus d-flex justify-content-center align-items-center my-post-i'></i>
							<label
								id='select-to-upload-btn'
								className='d-flex justify-content-center py-1 my-1 mt-2 '>
								<i class='fas fa-image my-post-i d-flex justify-content-center align-items-center'></i>
								<input
									className='file-upload'
									type='file'
									multiple
									onChange={(e) => handleFile(e)}
								/>
							</label>
							<i className='fab fa-youtube my-post-i d-flex justify-content-center align-items-center'></i>
							<i className='fas fa-sticky-note my-post-i d-flex justify-content-center align-items-center'></i>
						</div>
					</div>
					<Button
						variant='primary'
						onClick={(e) => handleUpload(e)}
						style={{ backgroundColor: "#e647be", border: "none" }}>
						Post
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
export default EditPicture;
