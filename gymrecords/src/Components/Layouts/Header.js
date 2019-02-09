import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Header extends Component {
	render () {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="headline" color="inherit">
						Options Analysis
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}
