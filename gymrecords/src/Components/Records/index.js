import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const styles = {
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: 20,
		margin: 10,
		marginbottom: 10,
		height: 700,
		overflowY: 'auto',
	},
};

export default ({ exercises_in_group }) => (
	<Grid container spacing={24}>
		<Grid item xs={6}>
			<Paper style={styles.paper}>
				{exercises_in_group.map(([ group, exercises ]) => (
					<Fragment>
						<Typography variant="headline" style={{ textTransform: 'capitalize' }}>
							{group}
						</Typography>
						<List component="ul">
							{exercises.map(({ title }) => (
								<ListItem button>
									<ListItemText primary={title} />
								</ListItem>
							))}
						</List>
					</Fragment>
				))}
			</Paper>
		</Grid>
		<Grid item xs={6}>
			<Paper style={styles.paper}>
				<Typography variant="display1">Welcome</Typography>
				<Typography variant="body1" style={{ marginTop: 20 }}>
					Please select some ideas from the list on the left.
				</Typography>
			</Paper>
		</Grid>
	</Grid>
);
