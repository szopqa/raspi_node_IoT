import React from 'react';

function Button(props) {
	return (
		<button  disabled={props.isDisabled} className="switch-button" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Button;