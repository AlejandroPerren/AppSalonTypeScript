import { Box, TextField, Typography, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createService, ServiceCreateInterface } from "../network/fetchApiServices";

const FormService = () => {
    // Esquema de validación con Yup
    const schema = yup.object().shape({
        name: yup.string().required("El nombre es obligatorio").min(3, "El nombre debe tener al menos 3 caracteres"),
        price: yup
            .number()
            .required("El precio es obligatorio")
            .typeError("Debe ser un número")
            .min(0, "El precio debe ser Valido"),
    });

    // Inicialización del formulario con react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ServiceCreateInterface>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<ServiceCreateInterface> = async (data) => {
        try {
            const service = await createService(data);
            console.log("Servicio creado exitosamente:", service);
            alert("Servicio creado exitosamente");
            reset(); 
        } catch (error) {
            console.error("Error al crear el servicio:", error);
            alert("Hubo un error al crear el servicio");
        }
    };

    // Estilo del formulario
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
        <Box sx={style}>
            <Typography id="keep-mounted-modal-title" align="center" variant="h6" component="h2">
                Agrega Tu Servicio
            </Typography>

            {/* Formulario */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Campo Nombre */}
                <TextField
                    {...register("name")}
                    fullWidth
                    label="Nombre"
                    variant="filled"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    margin="normal"
                />

                {/* Campo Precio */}
                <TextField
                    {...register("price")}
                    fullWidth
                    label="Precio"
                    variant="filled"
                    error={!!errors.price}
                    helperText={errors.price?.message}
                    margin="normal"
                />

                {/* Botón Submit */}
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                    Crear Servicio
                </Button>
            </form>
        </Box>
    );
};

export default FormService;
