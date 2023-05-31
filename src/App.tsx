import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Buttons from "./components/Buttons";

function App() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		schoolName: "",
		degreeName: "",
		startYear: "",
		endYear: "",
	});

	useEffect(() => {
		console.table(formData);
	}, []);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.table(formData);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<Header></Header>
			<form className="userForm" onSubmit={handleFormSubmit}>
				<Personal
					firstName={formData.firstName}
					lastName={formData.lastName}
					phoneNumber={formData.phoneNumber}
					email={formData.email}
					handleInputChange={handleInputChange}
				/>
				<Education
					schoolName={formData.schoolName}
					degreeName={formData.degreeName}
					startYear={formData.startYear}
					endYear={formData.endYear}
					handleInputChange={handleInputChange}
				/>
				<Buttons />
			</form>
		</>
	);
}

export default App;
