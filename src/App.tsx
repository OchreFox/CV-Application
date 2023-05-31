import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Job from "./components/Job";
import ResetButton from "./components/ResetButton";
import DisplayCV from "./components/DisplayCV";

function App() {
	const initialFormData = {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		schoolName: "",
		degreeName: "",
		schoolStartDate: "",
		schoolEndDate: "",
		companyName: "",
		positionTitle: "",
		jobStartDate: "",
		jobEndDate: "",
	};

	const [formData, setFormData] = useState(initialFormData);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitted(true);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleReset = () => {
		setFormData(initialFormData);
		setIsSubmitted(false);
		console.log("reset hit");
	};

	return (
		<>
			<div className="header">
				<Header />
			</div>
			{isSubmitted ? ( //if the form state is = submitted, we display the information to the user
				<div className="submittedInformation">
					<DisplayCV formData={formData} />
					<ResetButton handleReset={handleReset} />
				</div>
			) : (
				//if not submitted, we continue to display the form
				<form className="userForm" onSubmit={handleFormSubmit}>
					<Personal formData={formData} handleInputChange={handleInputChange} />
					<Education formData={formData} handleInputChange={handleInputChange} />
					<Job formData={formData} handleInputChange={handleInputChange} />

					<div className="buttonGroup">
						<button type="submit">Submit</button>
						<ResetButton handleReset={handleReset} />
					</div>
				</form>
			)}
		</>
	);
}

export default App;
