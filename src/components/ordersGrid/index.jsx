import * as React from "react";
import {
    Box,
    Typography,
    Chip,
    Avatar,
    Stack,
    colors,
    useTheme,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";

const columns = [
    {
        field: "firstName",
        headerName: "Customer",
        width: 260,
        editable: false,
        renderCell: (params) => <Customer user={params?.row} />,
    },
    {
        field: "orderNo",
        headerName: "Order No.",
        width: 150,
        flex: 1,
        editable: false,
    },
    {
        field: "amount",
        headerName: "Amount",
        flex: 1,
        editable: true,
    },
    {
        field: "status",
        headerName: "Status",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 180,
        // valueGetter: (params, row) =>
        //     `${row.firstName || ""} ${row.lastName || ""}`,
        renderCell: (params) => <StatusButton status={params?.row?.status} />,
    },
];

const StatusButton = ({ status }) => {
    return (
        <Chip
            color={status == "Delivered" ? "success" : "error"}
            label={status}
        />
    );
};

const Customer = ({ user }) => {
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`;
    return (
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
    );
};

const rows = [
    {
        id: 1,
        lastName: "Snow",
        firstName: "Jon",
        orderNo: "376545",
        amount: "$231.90",
        status: "Delivered",
        avatar: "boy.png",
    },
    {
        id: 2,
        lastName: "Lannister",
        firstName: "Cersei",
        orderNo: "2363209",
        amount: "$241.35",
        status: "Canceled",
        avatar: "woman.png",
    },
    {
        id: 3,
        lastName: "Lannister",
        firstName: "Jaime",
        orderNo: "3626373",
        amount: "$43.67",
        status: "Delivered",
        avatar: "user.png",
    },
    {
        id: 4,
        lastName: "Stark",
        firstName: "Arya",
        orderNo: "0127723",
        amount: "$31.75",
        status: "Delivered",
        avatar: "woman.png",
    },
    {
        id: 5,
        lastName: "Targaryen",
        firstName: "Daenerys",
        orderNo: "72351111",
        amount: "$21.10",
        status: "Canceled",
        avatar: "boy.png",
    },
    {
        id: 6,
        lastName: "Melisandre",
        firstName: null,
        orderNo: "5264827",
        amount: "$1.90",
        status: "Delivered",
        avatar: "woman.png",
    },
    {
        id: 7,
        lastName: "Clifford",
        firstName: "Ferrara",
        orderNo: "625357323",
        amount: "$74.60",
        status: "Canceled",
        avatar: "human.png",
    },
    {
        id: 8,
        lastName: "Frances",
        firstName: "Rossini",
        orderNo: "87347277",
        amount: "$871.30",
        status: "Canceled",
        avatar: "woman.png",
    },
    {
        id: 9,
        lastName: "Roxie",
        firstName: "Harvey",
        orderNo: "83736297",
        amount: "$31.80",
        status: "Delivered",
        avatar: "human.png",
    },
];

function OrdersTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            className="px-4 pb-12 pt-4"
            sx={{
                height: 440,
                width: "100%",
                "& .MuiDataGrid-row--borderBottom": {
                    backgroundColor: `${colors.gray[800]} !important`,
                },
            }}
        >
            <Typography variant="h4">Recent Orders</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default OrdersTable;
