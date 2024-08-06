import React from "react";
import Typography from "@mui/material/Typography";
import {
    DeleteForeverOutlined as DeleteForeverOutlinedIcon,
    MonetizationOnRounded as MonetizationOnRoundedIcon,
    AddShoppingCartOutlined as AddShoppingCartOutlined,
    BusinessCenterOutlined as BusinessCenterOutlinedIcon,
} from "@mui/icons-material";
import {
    ArrowDropUpOutlined as ArrowDropUpOutlinedIcon,
    ArrowDropDownOutlined as ArrowDropDownOutlinedIcon,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const cards = [
    {
        id: 1,
        title: "Total Orders",
        count: "75",
        percentage: 3,
        color: "blue",
        increased: true,
    },
    {
        id: 2,
        title: "Total Deliveries",
        count: "70",
        percentage: 3,
        color: "green",
        increased: false,
    },
    {
        id: 3,
        title: "Total Cancelled",
        count: "05",
        percentage: 3,
        color: "red",
        increased: true,
    },
    {
        id: 4,
        title: "Total Revenue",
        count: "$12K",
        percentage: 3,
        color: "purple",
        increased: false,
    },
];
export default function CustomCards() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box
                display="flex"
                height="100%"
                className="flex-col sm:flex-row"
                alignItems="baseline"
                gap="12px"
            >
                {cards.map((card) => (
                    <Box
                        className="rounded-md w-full"
                        alignItems="baseline"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        height="100%"
                        padding="2%"
                        backgroundColor={colors.gray[800]}
                    >
                        <Box
                            mb="12px"
                            p="12px"
                            borderRadius="14px"
                            style={{
                                backgroundColor: card?.color || "white",
                            }}
                        >
                            {card?.id == 1 && (
                                <AddShoppingCartOutlined fontSize="large" />
                            )}
                            {card?.id == 2 && (
                                <BusinessCenterOutlinedIcon fontSize="large" />
                            )}
                            {card?.id == 3 && (
                                <DeleteForeverOutlinedIcon fontSize="large" />
                            )}
                            {card?.id == 4 && (
                                <MonetizationOnRoundedIcon fontSize="large" />
                            )}
                        </Box>
                        <Typography variant="h5">{card?.title}</Typography>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            width="100%"
                        >
                            <Typography variant="h3">{card?.count}</Typography>
                            <Box display="flex" alignItems="center">
                                {card?.increased && (
                                    <ArrowDropUpOutlinedIcon
                                        fontSize="large"
                                        color={
                                            card?.increased
                                                ? "success"
                                                : "error"
                                        }
                                    />
                                )}
                                {!card?.increased && (
                                    <ArrowDropDownOutlinedIcon
                                        fontSize="large"
                                        color={
                                            card?.increased
                                                ? "success"
                                                : "error"
                                        }
                                    />
                                )}
                                <Typography
                                    variant="h4"
                                    style={{
                                        color: card?.increased
                                            ? "green"
                                            : "red",
                                    }}
                                >
                                    {`${card.percentage}%`}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
}
