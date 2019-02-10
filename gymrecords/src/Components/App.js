import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Records from './Records';
import { muscles, exercises } from '../store.js';

export default class extends Component {
	state = {
		exercises,
	};

	getExercisesByCategory () {
		return Object.entries(
			this.state.exercises.reduce((cat_group, excercise) => {
				const { muscles } = excercise;
				cat_group[muscles] = cat_group[muscles] ? [ ...cat_group[muscles], excercise ] : [ excercise ];
				return cat_group;
			}, {})
		);
	}

	render () {
		// console.log(this.getExercisesByCategory());
		const exercises_by_cat = this.getExercisesByCategory();
		return (
			<Fragment>
				<Header />
				<Records exercises_in_group={exercises_by_cat} />
				<Footer muscles={muscles} />
			</Fragment>
		);
	}
}
