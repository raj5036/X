// import SignupModal from "../../components/SignupModal/SignupModal";
import { Modal, Box, Button } from '@mui/material';
import React, { useState } from 'react';

const HomePage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<BlurBackgroundModal />
		</div>
	)
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BlurBackgroundModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(5px)', // Optional blur effect
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust as needed
          },
        }}
      >
        <Box sx={style}>
          <h2>Modal Content</h2>
          <p>Some text in the modal.</p>
        </Box>
      </Modal>
    </div>
  );
};


export default HomePage