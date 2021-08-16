import React from 'react'

function Button(props) {

	const onClick = () =>{
		console.log('in onclick',props.name)
		props.handle(props.name)
	}

	return (
		<>
			<button disabled={false} onClick={() => onClick()}>Submit</button>
		</>
	)
}

export default Button;
