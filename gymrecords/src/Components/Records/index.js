import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LeftPane from './leftPane';
import RightPane from './rightPane';
const styles = {
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: 20,
		margin: 10,
		marginbottom: 10,
		textAlign: 'center',
		// color: palsette.text.secondary,
	},
};

export default (props) => (
	<Grid container spacing={24}>
		<Grid item xs={6}>
			<LeftPane styles={styles} />
		</Grid>
		<Grid item xs={6}>
			<RightPane styles={styles} />
		</Grid>
	</Grid>
);
