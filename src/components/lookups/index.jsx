import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
    KeyboardArrowRight as ArrowRightOutlinedIcon,
    LunchDiningOutlined as LunchDiningIcon,
    AcUnit as AcUnitIcon,
    AdsClick as AdsClickIcon,
} from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

const lookupList = [
    {
        id: 1,
        title: "Goals",
        icon: ArrowRightOutlinedIcon,
        color: "chocolate",
    },
    { id: 2, title: "Popular Dishes", icon: "", color: "steelblue" },
    { id: 3, title: "Menus", icon: "", color: "teal" },
];
export default function Lookups() {
    return (
        <div>
            {lookupList.map((lookup) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowRightOutlinedIcon />}
                        aria-controls="panel1-content"
                        id={lookup?.id}
                    >
                        <Box display="flex" width="80%" alignItems="center">
                            <Box
                                mr="24px"
                                p="12px"
                                borderRadius="50%"
                                style={{
                                    backgroundColor: lookup?.color || "red",
                                }}
                            >
                                {lookup?.id == 1 && (
                                    <AcUnitIcon fontSize="large" />
                                )}
                                {lookup?.id == 2 && (
                                    <LunchDiningIcon fontSize="large" />
                                )}
                                {lookup?.id == 3 && (
                                    <AdsClickIcon fontSize="large" />
                                )}
                            </Box>
                            <Typography variant="h5">
                                {lookup?.title}
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography></Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
