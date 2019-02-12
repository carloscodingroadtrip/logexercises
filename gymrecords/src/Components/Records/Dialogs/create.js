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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/CloseRounded';
import Typography from '@material-ui/core/Typography';

export default class CreateDialog extends Component {
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

	render () {
		const { open, form: { title, description, muscles } } = this.state;
		return (
			<Fragment>
				<Button variant="fab" mini onClick={this.handleToggle}>
					<AddIcon />
				</Button>
				<Dialog fullScreen open={open} onClose={this.handleToggle}>
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
							/>
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
							/>
							<DialogActions>
								<Button color="primary" style={{ flex: 1 }}>
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
