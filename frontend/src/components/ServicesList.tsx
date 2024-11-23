import { useEffect, useState } from "react";

import { Services as ServicesModel } from "../models/services"
import * as fetchServices from "../network/fetchApiServices"
import { Box, Button, Card, CardContent, Grid2, Typography } from "@mui/material";

const ServicesList = () => {
  const [services, setServices] = useState<ServicesModel[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState(false);


  useEffect(() => {
    async function loadServices() {
      try {
        setServicesError(false);
        setServicesLoading(true);
        const services = await fetchServices.getServices();
        setServices(services);
      } catch (error) {
        console.error(error);
        setServicesError(true)
      } finally {
        setServicesLoading(false);
      }
    }
    loadServices()
  }, []);

  const ServicesListGrid =
    <Grid2 container spacing={8} columnSpacing={{ xs: 1, md: 2, sm: 3 }}>
      {services.map(service => (
        <Button>
          <CardContent key={service._id}>
            <Typography className="">{service.name}</Typography>
            <Typography>{service.price}</Typography>
          </CardContent>
        </Button>
      ))

      }
    </Grid2>
  if (servicesLoading) {
    return <Typography>Loading services...</Typography>;
  }

  if (servicesError) {
    return <Typography>Error loading services. Please try again.</Typography>;
  }

  return (
    <Box>
      <Card variant="outlined">{ServicesListGrid}</Card>
    </Box>
  )
}

export default ServicesList