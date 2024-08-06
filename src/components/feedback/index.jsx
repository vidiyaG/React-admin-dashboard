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
import { Avatar, Box, Rating, Stack } from "@mui/material";

const feedbackList = [
    {
        id: 1,
        lastName: "Snow",
        firstName: "Jon",
        orderNo: "376545",
        amount: "$231.90",
        status: "Delivered",
        avatar: "boy.png",
        rating: 5,
        comment:
            "I recently tried the chocolate cake from XYZ Bakery, and it was nothing short of delightful. The texture was incredibly moist, with a rich and fudgy consistency that melted in my mouth. Each bite was a perfect blend of sweetness and chocolatey goodness.",
    },
    {
        id: 2,
        lastName: "Lannister",
        firstName: "Cersei",
        orderNo: "2363209",
        amount: "$241.35",
        status: "Canceled",
        avatar: "woman.png",
        rating: 4,
        comment:
            "The Margherita pizza from PQR Pizza Parlor was a delightful surprise. The crust was thin and crispy, providing the perfect base for the toppings.",
    },
    {
        id: 3,
        lastName: "Lannister",
        firstName: "Jaime",
        orderNo: "3626373",
        amount: "$43.67",
        status: "Delivered",
        avatar: "user.png",
        rating: 3,
        comment:
            "The pizza had a great balance of flavors, with just the right amount of seasoning. It was a wonderful example of how simplicity can be so satisfying. This Margherita pizza is a great choice for anyone who appreciates traditional Italian flavors.",
    },
    {
        id: 4,
        lastName: "Stark",
        firstName: "Arya",
        orderNo: "0127723",
        amount: "$31.75",
        status: "Delivered",
        avatar: "woman.png",
        rating: 4,
        comment:
            "I tried the spaghetti carbonara at LMN Trattoria, and it was heavenly. The pasta was cooked to perfection, with a lovely al dente texture.",
    },
    {
        id: 5,
        lastName: "Targaryen",
        firstName: "Daenerys",
        orderNo: "72351111",
        amount: "$21.10",
        status: "Canceled",
        avatar: "boy.png",
        rating: 3,
        comment:
            "My recent meal at GHI Bistro included a plate of spaghetti carbonara, and it was outstanding. The pasta was beautifully prepared, with a silky sauce that clung to each strand. The pancetta was crispy and flavorful, adding a wonderful contrast to the creamy sauce.",
    },
    {
        id: 6,
        lastName: "Melisandre",
        firstName: null,
        orderNo: "5264827",
        amount: "$1.90",
        status: "Delivered",
        avatar: "woman.png",
        rating: 5,
        comment:
            "The cheeseburger from TUV Burger Joint was one of the best I’ve had in a long time. The patty was juicy and cooked to perfection, with a nice char on the outside.",
    },
    {
        id: 7,
        lastName: "Clifford",
        firstName: "Ferrara",
        orderNo: "625357323",
        amount: "$74.60",
        status: "Canceled",
        avatar: "human.png",
        rating: 4,
        comment:
            "I recently tried the cheeseburger at WXY Diner, and it was incredible. The beef patty was thick and flavorful, with a perfect balance of seasoning. The melted cheese added a rich and gooey element that made each bite even more enjoyable.",
    },
    {
        id: 8,
        lastName: "Frances",
        firstName: "Rossini",
        orderNo: "87347277",
        amount: "$871.30",
        status: "Canceled",
        avatar: "woman.png",
        rating: 1,
        comment:
            "The sushi platter from STU Sushi Bar was a delightful experience. Each piece of sushi was meticulously prepared, with fresh and high-quality ingredients. The variety of fish was impressive, from tender tuna to buttery salmon.",
    },
    {
        id: 9,
        lastName: "Roxie",
        firstName: "Harvey",
        orderNo: "83736297",
        amount: "$31.80",
        status: "Delivered",
        avatar: "human.png",
        rating: 0,
        comment:
            "I recently enjoyed a sushi platter from JKL Sushi House, and it was fantastic. The assortment of sushi and sashimi was diverse, offering a wonderful range of flavors and textures. The fish was incredibly fresh, with a melt-in-your-mouth quality.",
    },
];

const Customer = ({ user }) => {
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`;
    return (
        <Stack>
            <Stack display="flex" direction="row" alignItems="center">
                <Avatar
                    size="large"
                    alt={fullName}
                    src={"../../assets/" + user?.avatar}
                    className="mr-4 my-1"
                />
                <Typography className="" variant="h6">
                    {fullName}
                </Typography>
            </Stack>
            <Rating name="read-only" value={user?.rating} readOnly />
        </Stack>
    );
};
export default function CustomersFeedback() {
    return (
        <Box className="p-4">
            <Typography className="" variant="h4">
                Customer's Feedback
            </Typography>

            <div style={{ maxHeight: "400px", overflow: "auto" }}>
                {feedbackList.map((fb) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowRightOutlinedIcon />}
                            aria-controls="panel1-content"
                            id={fb?.id}
                        >
                            <Customer user={fb} />
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{fb.comment}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </Box>
    );
}
