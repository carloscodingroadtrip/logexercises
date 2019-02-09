import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import AllIcon from '@material-ui/icons/FormatLineSpacing';
import BullishIcon from '@material-ui/icons/Timeline';
import BearishIcon from '@material-ui/icons/TrendingDown';

const styles = {
	root: {
		flexGrow: 1,
		maxWidth: '100%',
	},
};

class Footer extends Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render () {
		const { classes } = this.props;

		return (
			<Paper square className={classes.root}>
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					variant="fullWidth"
					indicatorColor="secondary"
					textColor="secondary">
					<Tab icon={<BullishIcon />} label="BULLISH" />
					<Tab icon={<BearishIcon />} label="BEARISH" />
					<Tab icon={<AllIcon />} label="ALL" />
				</Tabs>
			</Paper>
		);
	}
}

export default withStyles(styles)(Footer);
