import React from "react";

type ButtonProps = {
	handleReset: React.MouseEventHandler<HTMLButtonElement>;
};

const ResetButton = ({ handleReset }: ButtonProps) => {
	return (
		<div className="ResetButton">

			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default ResetButton;
