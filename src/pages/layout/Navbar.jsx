import React, { useState } from "react";
import {
    Button,
    Stack,
    TextField,
    Box,
    IconButton,
    useTheme,
    InputBase,
} from "@mui/material";
// import { Link } from "react-router-dom";
import {
    HomeOutlined as HomeIcon,
    BarChartTwoTone as BarChartOutlinedIcon,
    AssignmentTurnedInOutlined as AssignmentTurnedInIcon,
    LocalMallOutlined as LocalMallOutlinedIcon,
    CreditCardOutlined as CreditCardOutlinedIcon,
    GridViewRounded as GridViewIcon,
} from "@mui/icons-material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
function Navbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            backgroundColor={colors.gray[800]}
            width="72px"
            flexDirection="column"
            gap="12px"
            alignItems="center"
            className="hidden md:flex pt-6"
        >
            {/* <Link to="/"> */}
            <IconButton>
                <HomeIcon fontSize="large" />
            </IconButton>
            {/* </Link> */}
            {/* <Link to="/dashboard"> */}
            <IconButton>
                <BarChartOutlinedIcon fontSize="large" />
            </IconButton>
            {/* </Link> */}

            <IconButton>
                <AssignmentTurnedInIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <CreditCardOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <LocalMallOutlinedIcon fontSize="large" />
            </IconButton>
        </Box>
    );
}

export default Navbar;
