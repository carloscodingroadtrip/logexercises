import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Records/Dialogs/create';
export default class Header extends Component {
	render () {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="headline" color="inherit" style={{ flex: 1 }}>
						Options Analysis
					</Typography>
					<CreateDialog />
				</Toolbar>
			</AppBar>
		);
	}
}
