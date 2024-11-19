import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

const Header: React.FC = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    return (
        <AppBar position="static" className="bg-blue-900">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    AppSalon
                </Typography>

                <IconButton
                    color="inherit"
                    size="large"
                    onClick={handleMenuOpen}
                    sx={{ display: { xs: "block", sm: "none" } }}
                >
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>


                <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <HomeIcon sx={{ color: "blue", marginRight: 1 }} />
                        Home
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <AccountCircleIcon sx={{ color: "green", marginRight: 1 }} />
                        Account
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <LogoutIcon sx={{ color: "red", marginRight: 1 }} />
                        Logout
                    </MenuItem>
                </Menu>


                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                    <MenuItem>
                        <HomeIcon sx={{ color: "blue", marginRight: 1 }} />
                        Home
                    </MenuItem>
                    <MenuItem>
                        <AccountCircleIcon sx={{ color: "green", marginRight: 1 }} />
                        Account
                    </MenuItem>
                    <MenuItem>
                        <LogoutIcon sx={{ color: "red", marginRight: 1 }} />
                        Logout
                    </MenuItem>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
