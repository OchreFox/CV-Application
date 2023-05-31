import "../styles/DisplayCV.css";
type DisplayProps = {
	formData: {
		firstName: string;
		lastName: string;
		phoneNumber: number | string;
		email: string;
		schoolName: string;
		degreeName: string;
		schoolStartDate: string;
		schoolEndDate: string;
		companyName: string;
		positionTitle: string;
		jobStartDate: string;
		jobEndDate: string;
	};
};

const DisplayCV = ({ formData }: DisplayProps) => {
	const {
		firstName,
		lastName,
		phoneNumber,
		email,
		schoolName,
		degreeName,
		schoolStartDate,
		schoolEndDate,
		companyName,
		positionTitle,
		jobStartDate,
		jobEndDate,
	} = formData;
	return (
		<div>
			<h2>{firstName} {lastName}</h2>
			<p>{phoneNumber}</p>
			<p>{email}</p>
			<h2>Education:</h2>
			<p>School Name: {schoolName}</p>
			<p>Degree Name: {degreeName}</p>
			<p>School Start Date: {schoolStartDate}</p>
			<p>School End Date: {schoolEndDate}</p>
			<p>Company Name: {companyName}</p>
			<h2>Work Experience:</h2>

			<p>Position Title: {positionTitle}</p>
			<p>Job Start Date: {jobStartDate}</p>
			<p>Job End Date: {jobEndDate}</p>
		</div>
	);
};

export default DisplayCV;
