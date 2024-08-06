import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/system";
import { Button, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ArrowDropDown } from "@mui/icons-material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [
    2400, 1398, 9800, 3908, 4800, 3800, 4300, 2400, 1398, 9800, 3908, 4800,
    3800, 4300, 4800, 3800, 4300, 2400,
];

export default function SimpleBarChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            className="px-4 pt-4"
            sx={{
                width: "100%",
                "& .MuiDataGrid-row--borderBottom": {
                    backgroundColor: `${colors.gray[800]} !important`,
                },
            }}
        >
            <Box
                direction="row"
                justifyContent="space-between"
                className="flex justify-center"
            >
                <Typography variant="h4">Recent Orders</Typography>
                <Button
                    color="secondary"
                    variant="outlined"
                    sx={{
                        borderRadius: "18px",
                    }}
                    endIcon={<ArrowDropDown />}
                >
                    Weekly
                </Button>
            </Box>
            <BarChart
                height={300}
                borderRadius="20"
                series={[
                    { data: pData, id: "pvId" },
                    // { data: uData, label: 'uv', id: 'uvId' },
                ]}
            />
        </Box>
    );
}
