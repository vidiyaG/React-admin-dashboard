import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ArrowDropUpOutlined as ArrowDropUpOutlinedIcon } from "@mui/icons-material";

import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const netProfitData = {
    title: "Net Profit",
    profit: "$6759.25",
    percentate: 70,
    increasedBy: 3,
    status: "Goal Completed",
    message: "*The values here has been rounded off.",
};
export default function NetProfitCard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="p-2 md:p-4"
            width="100%"
        >
            <Box
                display="flex"
                sx={{
                    height: "clamp(100px,6vw,200px)",
                }}
                flexDirection="column"
                justifyContent="space-between"
            >
                <Typography variant="h5" component="div" color="text.primary">
                    {netProfitData.title}
                </Typography>
                <Typography variant="h3" component="div" color="text.primary">
                    {netProfitData.profit}
                </Typography>
                <Box display="flex" alignItems="center">
                    <ArrowDropUpOutlinedIcon fontSize="large" color="success" />
                    <Typography variant="h4" style={{ color: "green" }}>
                        {`${netProfitData.increasedBy}%`}
                    </Typography>
                </Box>
            </Box>
            <Box
                display="flex"
                height="100%"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box
                    sx={{
                        height: "clamp(100px,6vw,200px)",
                        position: "relative",
                        display: "inline-flex",
                    }}
                >
                    <CircularProgress
                        variant="determinate"
                        value={netProfitData?.percentate}
                        size={"clamp(100px,6vw,200px)"}
                        color="secondary"
                    />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box textAlign="center">
                            <Typography
                                variant="h4"
                                component="div"
                                color="text.primary"
                            >{`${Math.round(
                                netProfitData.percentate
                            )}%`}</Typography>

                            <p
                                className="text-xs"
                                style={{
                                    maxWidth: "6vw",
                                    marginTop: "-10px",
                                }}
                            >
                                {netProfitData.status}
                            </p>
                        </Box>
                    </Box>
                </Box>
                <p className="text-xs text-center mt-2">
                    {netProfitData.message}
                </p>
            </Box>
        </Box>
    );
}
