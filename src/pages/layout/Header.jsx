import React, { useContext } from "react";
import {
    Button,
    Stack,
    TextField,
    Badge,
    Box,
    IconButton,
    useTheme,
    InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { colorModeContext, tokens } from "../../theme";
import {
    LightModeOutlined as LightModeOutlinedIcon,
    DarkModeOutlined as DarkModeOutlinedIcon,
    NotificationsOutlined as NotificationsOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    EmailOutlined as EmailOutlinedIcon,
    GridViewRounded as GridViewIcon,
} from "@mui/icons-material";
// import GridViewIcon from "@mui/icons-material/GridView";

function Header() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorModeCtxValue = useContext(colorModeContext);
    return (
        <Box
            className="px-2 py-3 md:px-6 md:py-6 w-full flex-wrap"
            backgroundColor={colors.gray[800]}
        >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                gap="12px"
            >
                <Stack direction="row">
                    <IconButton type="button" sx={{ p: 0 }}>
                        <GridViewIcon fontSize="large" color="info" />
                    </IconButton>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        borderRadius="6px"
                        backgroundColor={colors.gray[700]}
                        sx={{
                            width: "30vw",
                            minWidth: "280px",
                            maxWidth: "680px",
                        }}
                        className="ml:2 md:ml-8 border border-gray-400"
                    >
                        <IconButton type="button">
                            <SearchIcon></SearchIcon>
                        </IconButton>
                        <InputBase
                            size="small"
                            placeholder="Search"
                            sx={{ ml: 1, flex: 1 }}
                        />
                    </Box>
                </Stack>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap="12px"
                    justifyContent="space-between"
                    marginLeft="auto"
                >
                    <Box borderRadius="50%" backgroundColor={colors.gray[700]}>
                        <IconButton
                            type="button"
                            sx={{ p: 1 }}
                            onClick={colorModeCtxValue.toggleColorMode}
                        >
                            {theme.palette.mode == "dark" ? (
                                <LightModeOutlinedIcon size="large" />
                            ) : (
                                <DarkModeOutlinedIcon />
                            )}
                        </IconButton>
                    </Box>
                    <Box borderRadius="50%" backgroundColor={colors.gray[700]}>
                        <IconButton type="button" sx={{ p: 1 }}>
                            <EmailOutlinedIcon size="large" />
                        </IconButton>
                    </Box>
                    <Box borderRadius="50%" backgroundColor={colors.gray[700]}>
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SettingsOutlinedIcon size="large" />
                        </IconButton>
                    </Box>
                    <Box borderRadius="50%" backgroundColor={colors.gray[700]}>
                        <IconButton type="button" sx={{ p: 1 }}>
                            <Badge color="success" variant="dot">
                                <NotificationsOutlinedIcon size="large" />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box
                        borderRadius="50%"
                        padding="4px"
                        backgroundColor={colors.gray[700]}
                    >
                        <img
                            src={`../../assets/profile.png`}
                            alt="profile"
                            width="24"
                            height="24"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
