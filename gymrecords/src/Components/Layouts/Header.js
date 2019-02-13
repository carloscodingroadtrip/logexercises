import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Records/Dialogs/create';

export default ({ muscles, onExerciseCreate }) => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="headline" color="inherit" style={{ flex: 1 }}>
				Exercises Log Application
			</Typography>
			<CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
		</Toolbar>
	</AppBar>
);
