import React from 'react';
import CustomForm from 'components/CustomForm';
import { Button, Container, Box, Typography } from '@material-ui/core';

export default function Register() {
	return (
		<Box p={3}>
			<Container maxWidth='md'>
				<Typography variant='h4'>회원가입</Typography>
				<CustomForm
					data={['ID', 'Password', 'Password 확인', '이름', 'E-Mail']}
				/>
				<Box py={3}>
					<Button fullWidth={true} variant='contained' color='primary'>
						회원가입
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
