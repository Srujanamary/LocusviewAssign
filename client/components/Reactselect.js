import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import Button from './Button'
let result = []
const config = {
	'Content-Type': 'application/json',
}

function Reactselect(props) {
	const [selectedOption, setSelectedOption] = useState(null);
	const [charaterList, setCharaterList] = useState([]);
	const [character, setCharater] = useState()

	const handleChange = e => {
		setSelectedOption(e.value)
	}

	useEffect(() => {
		axios.get('http://localhost:5000/starwar', config)
			.then(function (response) {
				if (response.status === 200) {
					response.data.response.map(res => {
						let obj = {
							"value": res.name,
							"label": res.name
						}
						result.push(obj)
					})
					setCharaterList(result);
				}
			});
	}, [])

	const handle = (name) => {
		const payload = {
			"name": name
		}
		axios.post('http://localhost:5000/character/detail', payload)
			.then(function (response) {
				setCharater(response.data.response)
			});
	}

	return (
		<>
		<h1>Welcome to React</h1>
			<div>
				<Select
					defaultValue={selectedOption}
					onChange={e => handleChange(e)}
					options={charaterList}
				/>
			</div>
			<Button name={selectedOption} handle={handle} />
			<h4>{selectedOption}</h4>
			<div><h4>{JSON.stringify(character)}</h4></div>
		</>
	)
}

export default Reactselect;
