import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Records from './Records';
export default class extends Component {
	render () {
		return (
			<Fragment>
				<Header />
				<Records />
				<Footer />
			</Fragment>
		);
	}
}
