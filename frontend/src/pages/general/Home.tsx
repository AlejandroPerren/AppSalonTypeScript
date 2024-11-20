import { Container, TextField, Typography } from "@mui/material"
import ServicesList from "../../components/ServicesList"
import CreateServiceButton from "../../components/Buttons/CreateServiceButton"


const Home = () => {
  return (
    <div>
      <Container>
        <Typography

          align="center"
          color="primary"
          variant="h3"
        >Ingresa Los Datos Para la Cita</Typography>
        <form>
            <ServicesList/>

          <TextField fullWidth id="fullWidth" label="Nombre" variant="outlined" margin="normal" />
          <TextField fullWidth id="fullWidth" label="Fecha" variant="outlined" margin="normal" />
          {/* <Autocomplete
            disablePortal
            // options={}
            sx={{ width: 300 }}
            renderInput={() => <TextField {} label="Hour" />}
          /> */}
        </form>
            <CreateServiceButton></CreateServiceButton>
      </Container>
    </div>
  )
}

export default Home