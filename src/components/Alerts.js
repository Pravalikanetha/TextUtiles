import React from 'react'

function Alerts(props) {
	const capitalize = (word)=>{
		//const lower = word.toLowerCase();
		const username = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		return username;
	}
	return (
		props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
			<strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
			{/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
		</div>
	)
}

export default Alerts
