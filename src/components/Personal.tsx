import React from "react";

type PersonalProps = {
	formData: {
		firstName: string;
		lastName: string;
		phoneNumber: number | string;
		email: string;
	};
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Personal = ({ formData, handleInputChange }: PersonalProps) => {
	const { firstName, lastName, phoneNumber, email } = formData;

	return (
		<div className="personalInfo">
			<h2>Personal Information</h2>
			<input
				value={firstName}
				type="text"
				placeholder="First Name"
				className="input"
				name="firstName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={lastName}
				type="text"
				placeholder="Last Name"
				className="input"
				name="lastName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={phoneNumber}
				type="number"
				placeholder="Phone Number"
				className="input"
				name="phoneNumber"
				min="1000000000"
				max="9999999999"
				onChange={handleInputChange}
				required
			/>
			<input
				value={email}
				type="text"
				placeholder="Email Address"
				className="input"
				name="email"
				onChange={handleInputChange}
				required
			/>
		</div>
	);
};

export default Personal;
