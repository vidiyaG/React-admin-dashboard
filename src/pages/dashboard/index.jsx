import React, { useState } from "react";
import { tokens } from "../../theme";
import { Box, useTheme, Typography } from "@mui/material";
import OrdersTable from "../../components/ordersGrid";
import Lookups from "../../components/lookups";
import NetProfitCard from "../../components/netProfit";
import CustomCards from "../../components/customCards";
import TickPlacementBars from "../../components/barChart";
import CustomersFeedback from "../../components/feedback";

function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const getGridItemStyles = () => ({ backgroundColor: colors.gray[800] });

    return (
        <Box
            className="h-full px-4 py-5"
            display="flex"
            flexDirection="column"
            borderColor={colors.gray[900]}
            border
            backgroundColor={colors.gray[900]}
            color={colors.gray[100]}
        >
            <Typography className="" variant="h3">
                Dashboard
            </Typography>
            <div class="grid grid-cols-3 gap-4">
                <div class="rounded-md col-span-6  md:col-span-2 row-span-1">
                    <CustomCards />
                </div>
                <div
                    class="rounded-md  col-span-6 md:col-span-1 row-span-1"
                    style={getGridItemStyles()}
                >
                    <NetProfitCard />
                </div>
                <div
                    class="rounded-md  col-span-6 md:col-span-2 row-span-4"
                    style={getGridItemStyles()}
                >
                    <TickPlacementBars />
                </div>
                <div
                    class="rounded-md  row-span-4 col-span-6 md:col-span-1"
                    style={getGridItemStyles()}
                >
                    <Lookups />
                </div>
                <div
                    class="rounded-md  col-span-6 md:col-span-2 row-span-6 
                    "
                    style={getGridItemStyles()}
                >
                    <OrdersTable />
                </div>
                <div
                    class="rounded-md  col-span-6 md:col-span-1 row-span-6"
                    style={getGridItemStyles()}
                >
                    <CustomersFeedback />
                </div>
            </div>
        </Box>
    );
}

export default Dashboard;
