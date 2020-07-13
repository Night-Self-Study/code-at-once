import React from 'react';
import CustomForm from 'components/CustomForm';
import {
	Button,
	Container,
	Box,
	Typography,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
	button: {
		paddingTop: '1em',
		paddingBottom: '1em',
	},
});

export default function Register() {
	const classes = useStyles();

	return (
		<Box p={3}>
			<Container maxWidth='md'>
				<Typography variant='h4'>회원가입</Typography>
				<CustomForm
					data={['ID', 'Password', 'Password 확인', '이름', 'E-Mail']}
				/>
				<Box py={3}>
					<Button
						className={classes.button}
						size='large'
						fullWidth={true}
						variant='contained'
						color='primary'
					>
						회원가입
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
