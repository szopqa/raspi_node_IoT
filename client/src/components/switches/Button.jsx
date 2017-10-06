import React from 'react';

function Button(props) {
	return (
		<button className="switch-button" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Button;