import React, { useState } from "react";
import "./newpost.scss";
import { Button, Modal, FormControl, Image } from "react-bootstrap";
import backend from "../../helpers/client";

export default function NewPost(props) {
	const [show, setShow] = useState(false);
	const [file, setFile] = useState();
	const [input, setInput] = useState();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleFile = (e) => {
		const formData = new FormData();
		formData.append("post", e.target.files[0]);

		setFile(formData);
		setInput(URL.createObjectURL(e.target.files[0]));
	};

	const handleUpload = async (e) => {
		try {
			const response = await backend({
				url: "/posts/image/upload",
				method: "post",
				data: file,
			});
			console.log(response, "responnssssss");
			if (response.status === 200) {
				setShow(false);
			}
		} catch (error) {
			console.log("handle upl img err: ", error);
		}
	};

	return (
		<div className='mb-4 newpost-container p-2 py-3'>
			<Button
				className='newpost-button btn-secondary text-secondary d-flex justify-content-start align-items-center'
				onClick={handleShow}>
				<i
					className='far fa-edit grey-text mr-1'
					style={{ fontSize: "1.2rem" }}></i>
				Start a post
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create a new post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <Button type="file" className="newpost-button btn-secondary text-secondary mb-4"> Choose an item to post</Button> */}
					<div>
						{input !== 0 && (
							<Image id='image-to-post' src={input} fluid />
						)}
					</div>

					{/* <button onClick={(e) => handleUpload(e)}>upload</button> */}
					<FormControl
						placeholder='Write a description'
						className='post-description mt-2'
					/>
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
