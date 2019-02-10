import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import LeftPane from './leftPane';
const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

class Records extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Grid item xs={6}>
						<LeftPane className={classes.paper} />
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>Right Pane</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Records);
