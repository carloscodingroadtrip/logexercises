import React, { Component } from 'react';
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

const icons = [ <BullishIcon />, <BearishIcon />, <AllIcon />, <BullishIcon />, <BullishIcon /> ];

export default ({ muscles, category, onSelect }) => {
	//index below will default to index 5 (All) when loading since no category has been selected by user
	const index = category ? muscles.findIndex((category_group) => category_group === category) + 1 : 0;

	const onIndexSelected = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1]);

	return (
		<Paper square className={styles.root}>
			<Tabs
				value={index}
				onChange={onIndexSelected}
				variant="fullWidth"
				indicatorColor="secondary"
				textColor="secondary">
				<Tab label="All" />
				{muscles.map((muscles_category, index) => <Tab label={muscles_category} icon={icons[index]} />)}
			</Tabs>
		</Paper>
	);
};
