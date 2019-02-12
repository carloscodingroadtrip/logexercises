import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
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

export default ({
	exercises_in_group,
	category,
	onSelect,
	exercise: { id, title = 'Welcome!', description = 'Please select some ideas from the list on the left.' },
}) => (
	<Grid container spacing={24}>
		<Grid item xs={6}>
			<Paper style={styles.paper}>
				{exercises_in_group.map(
					([ group, exercises ]) =>
						//if category is undefined or empty string or category equals the group we selected
						//we display the fragment
						!category || category === group ? (
							<Fragment key={group}>
								<Typography variant="headline" style={{ textTransform: 'capitalize' }}>
									{group}
								</Typography>
								<List component="ul">
									{exercises.map(({ id, title }) => (
										<ListItem key={id} button onClick={() => onSelect(id)}>
											<ListItemText primary={title} />
										</ListItem>
									))}
								</List>
							</Fragment>
						) : null
				)}
			</Paper>
		</Grid>
		<Grid item xs={6}>
			<Paper style={styles.paper}>
				<Typography variant="display1">{title}</Typography>
				<Typography variant="body1" style={{ marginTop: 20 }}>
					{description}
				</Typography>
			</Paper>
		</Grid>
	</Grid>
);
