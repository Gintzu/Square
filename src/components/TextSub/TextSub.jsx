import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export const TextSub = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Typography variant="subtitle1" gutterBottom>
				subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Quos blanditiis tenetur
			</Typography>
			<Typography variant="body2" gutterBottom>
				body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quos blanditiis tenetur unde suscipit, quam beatae rerum
				inventore consectetur, neque doloribus, cupiditate numquam
				dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Container fixed>
				<Box sx={{ bgcolor: '#000000', height: '10vh' }} />
			</Container>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						error
						id="outlined-error-helper-text"
						label="Error"
						defaultValue="Hello World"
						helperText="Incorrect entry."
					/>
					<Button variant="contained">Confirm</Button>
				</div>
			</Box>
		</Box>
	);
};
