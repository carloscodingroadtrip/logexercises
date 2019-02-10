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

const icons = [ <BullishIcon />, <BearishIcon />, <AllIcon /> ];

export default ({ muscles }) => (
	<Paper square className={styles.root}>
		<Tabs
			value={0}
			// onChange={this.handleChange}
			variant="fullWidth"
			indicatorColor="secondary"
			textColor="secondary">
			{muscles.map((muscles_category, index) => <Tab label={muscles_category} icon={icons[index]} />)}

			<Tab label="All" />
			{/* <Tab icon={<BullishIcon />} label="BULLISH" />
			<Tab icon={<BearishIcon />} label="BEARISH" />
			<Tab icon={<AllIcon />} label="ALL" /> */}
		</Tabs>
	</Paper>
);
