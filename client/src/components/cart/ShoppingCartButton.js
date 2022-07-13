import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	Box,
	Typography,
	Button,
	Fab,
	ButtonGroup,
	Modal
	} from '@mui/material';


const fabStyle = {
	position: 'fixed',
	bottom: 30,
	right: 30,
};

const style = {
	position: 'absolute',
	top: '30%',
	left: '70%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	minHeight: 300,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const ShoppingCartButton = () => {
	const [open, setOpen] = React.useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
  	return (
		<div>
			<Link to="/shoppingcart" style={{ textDecoration: 'none' }}>
				<Fab 
					style={{
						backgroundColor: "#000000"
					}}
					color="primary"
					sx={fabStyle} aria-label="shoppingcart">
				<ShoppingCartIcon />
				</Fab>
			</Link>
			{/* <Fab 
				onClick = {handleOpen}
				color="primary" sx={fabStyle} aria-label="shoppingcart">
			  	<ShoppingCartIcon />
			</Fab>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
					장바구니목록
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
					<Link to="/payment" style={{ textDecoration: 'none' }}>
							<Button sx={{mx:1}}
								variant="contained" 
								size="large"
							>결제하기</Button>
					</Link>
				</Box>
			</Modal> */}
		</div>
  	)
}

export default ShoppingCartButton