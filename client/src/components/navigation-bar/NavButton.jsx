import React from 'react';

function NavButton(props) {
	return (
		<button  disabled={props.isDisabled} className="nav-button" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default NavButton;