import React from "react";

type EducationProps = {
	schoolName: string;
	degreeName: string;
	startYear: string;
	endYear: string;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Education = ({
	schoolName,
	degreeName,
	startYear,
	endYear,
	handleInputChange,
}: EducationProps) => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="educationInfo">
			<h2>Education Experience</h2>
			<input
				value={schoolName}
				type="text"
				placeholder="School Name"
				className="input"
				name="schoolName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={degreeName}
				type="text"
				placeholder="Degree Name"
				className="input"
				name="degreeName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={startYear}
				type="date"
				placeholder="Start Year"
				className="input"
				name="startYear"
				min="1000000000"
				max={currentYear}
				onChange={handleInputChange}
				required
			/>
			<input
				value={endYear}
				type="date"
				placeholder="End Year"
				className="input"
				name="endYear"
				min="1"
				max={currentYear}
				onChange={handleInputChange}
				required
			/>
		</div>
	);
};

export default Education;
