import React from "react";

type JobProps = {
	formData: {
		companyName: string;
		positionTitle: string;
		jobStartDate: string;
		jobEndDate: string;
	};
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Job = ({ formData, handleInputChange }: JobProps) => {
	const currentYear = new Date().getFullYear();
	const { companyName, positionTitle, jobStartDate, jobEndDate } = formData;

	return (
		<div className="jobInfo">
			<h2>Job Experience</h2>
			<input
				value={companyName}
				type="text"
				placeholder="Company Name"
				className="input"
				name="companyName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={positionTitle}
				type="text"
				placeholder="Position Title"
				className="input"
				name="positionTitle"
				onChange={handleInputChange}
				required
			/>
			<input
				value={jobStartDate}
				type="date"
				placeholder="Start Year"
				className="input"
				name="jobStartDate"
				min="1"
				max={currentYear}
				onChange={handleInputChange}
				required
			/>
			<input
				value={jobEndDate}
				type="date"
				placeholder="End Year"
				className="input"
				name="jobEndDate"
				min="1"
				max={currentYear}
				onChange={handleInputChange}
				required
			/>
		</div>
	);
};

export default Job;
