import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createService, ServiceInterface, updateService } from "../network/fetchApiServices";

interface FormServiceProps {
    mode: "create" | "edit";
    serviceData?: ServiceInterface; 
    onSuccess: () => void;
}

const FormService: React.FC<FormServiceProps> = ({ mode, serviceData, onSuccess }) => {

    const schema = yup.object().shape({
        name: yup.string().required("El nombre es obligatorio").min(3, "Debe tener al menos 3 caracteres"),
        price: yup
            .number()
            .required("El precio es obligatorio")
            .typeError("Debe ser un número")
            .min(0, "El precio debe ser válido"),
    });

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ServiceInterface>({
        resolver: yupResolver(schema),
        defaultValues: serviceData || {}, 
    });

    React.useEffect(() => {
        if (mode === "edit" && serviceData) {
            setValue("name", serviceData.name);
            setValue("price", serviceData.price);
        }
    }, [mode, serviceData, setValue]);

    const onSubmit: SubmitHandler<ServiceInterface> = async (data) => {
        try {
            if (mode === "create") {
                await createService(data);
                alert("Servicio creado exitosamente");
            } else if (mode === "edit" && serviceData?.id) {  
                await updateService(serviceData.id, data);  
                alert("Servicio actualizado exitosamente");
            } else {
                alert("No se pudo encontrar el servicio para actualizar.");
            }
            reset();
            onSuccess();
        } catch (error) {
            console.error("Error al guardar el servicio:", error);
            alert("Hubo un error al guardar el servicio");
        }
    };
    
  
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={style}>
            <Typography align="center" variant="h6" component="h2">
                {mode === "create" ? "Agregar Servicio" : "Editar Servicio"}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
            
                <TextField
                    {...register("name")}
                    fullWidth
                    label="Nombre"
                    variant="filled"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    margin="normal"
                />

           
                <TextField
                    {...register("price")}
                    fullWidth
                    label="Precio"
                    variant="filled"
                    error={!!errors.price}
                    helperText={errors.price?.message}
                    margin="normal"
                />

               
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                    {mode === "create" ? "Crear Servicio" : "Guardar Cambios"}
                </Button>
            </form>
        </Box>
    );
};

export default FormService;
