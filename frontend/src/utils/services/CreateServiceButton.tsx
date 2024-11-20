import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
import React from "react";
import FormService from "../../props/FormService";
const CreateServiceButton = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
  return (
    <Stack>
    <Button onClick={handleOpen} variant="contained">Crear Servicio</Button>
    <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <FormService/>
      </Modal>
  </Stack>
  )
}

export default CreateServiceButton