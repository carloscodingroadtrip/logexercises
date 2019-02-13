import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import Save from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/CloseRounded';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getEnabledCategories } from '../../App';

const styles = (theme) => ({
	formControl: {
		width: 400,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
	selectField: {
		textTransform: 'capitalize',
	},
});

export default withStyles(styles)(
	class CreateDialog extends Component {
		state = {
			open: false,
			form: {
				title: '',
				description: '',
				muscles: '',
			},
		};

		handleToggle = () => {
			this.setState({
				open: !this.state.open,
			});
		};
		handleChange = (name) => ({ target: { value } }) => {
			this.setState({
				form: {
					...this.state.form,
					[name]: value,
				},
			});
		};

		handleSubmit = () => {
			//todo: validation
			const { exercise } = this.state;
			this.props.onCreate(exercise);
		};
		render () {
			const { open, form: { title, description, muscles } } = this.state,
				{ classes, muscles: categories } = this.props;
			//above we renamed muscles to categories coming from Header <createDialog/>
			return (
				<Fragment>
					<Button variant="fab" mini onClick={this.handleToggle}>
						<AddIcon />
					</Button>
					<Dialog
						disableBackdropClick="true"
						disableEscapeKeyDown="true"
						fullScreen
						open={open}
						onClose={this.handleToggle}>
						<AppBar
							style={{
								position: 'relative',
							}}>
							<Toolbar>
								<Button variant="fab" mini color="secondary" onClick={this.handleToggle}>
									<CloseIcon />
								</Button>
								<Typography variant="h6" color="inherit" style={{ flex: 1, marginLeft: 30 }}>
									New Excercise
								</Typography>
								{/* <Button
								variant="fab"
								mini
								color="secondary"
								styte={{ flex: 1 }}
								onClick={this.handleToggle}>
								<Save />
							</Button> */}
							</Toolbar>
						</AppBar>
						<DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
						<DialogContent>
							<DialogContentText>Fill out all required fields</DialogContentText>
							<form>
								<TextField
									id="title"
									label="Title"
									value={title}
									onChange={this.handleChange('title')}
									margin="normal"
									variant="outlined"
									className={classes.formControl}
								/>
								<br />
								<FormControl variant="outlined" className={classes.formControl}>
									<InputLabel htmlFor="muscle">Muscle</InputLabel>
									<Select
										value={muscles}
										style={{ textTransform: 'capitalize', marginTop: 8 }}
										onChange={this.handleChange('muscles')}
										input={<OutlinedInput name="age" id="outlined-age-simple" />}>
										{categories.map((category) => (
											<MenuItem className={classes.selectField} value={category}>
												{category}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<br />
								<TextField
									id="description"
									label="Description"
									multiline
									rows="3"
									value={description}
									onChange={this.handleChange('description')}
									margin="normal"
									variant="outlined"
									className={classes.formControl}
								/>
								<DialogActions>
									<Button onClick={this.handleSubmit} color="primary" className={classes.formControl}>
										Analyze
									</Button>
								</DialogActions>
							</form>
						</DialogContent>
					</Dialog>
				</Fragment>
			);
		}
	}
);
