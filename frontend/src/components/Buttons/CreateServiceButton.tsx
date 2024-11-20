import {  Button, Modal, Stack } from "@mui/material"
import React from "react";
import FormService from "../../props/FormService";
const CreateServiceButton = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

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