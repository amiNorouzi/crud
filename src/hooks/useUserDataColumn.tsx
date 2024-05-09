import type {GridColDef} from '@mui/x-data-grid';
import {useMemo} from 'react';
import {Avatar, Grid} from '@mui/material';

export default function useUserDataColumn() {
    const columns: GridColDef[] = useMemo(() => [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
            renderCell: ({value}) => (
                <Grid alignItems="center" justifyContent="center" height="100%">
                    {value}
                </Grid>
            ),
            renderHeader: ({colDef}) => (
                <Grid pl={2}>
                    {colDef.headerName}
                </Grid>
            ),
        },
        {
            field: 'avatar',
            width: 70,
            renderCell: ({value}) => (
                <Grid alignItems="center" justifyContent="center" height="100%">
                    <Avatar
                        sx={{
                            height: 32,
                            width: 32,
                        }}
                        src={value}
                    />
                </Grid>
            ),
            renderHeader: () => <></>,
            disableColumnMenu: true,
            disableColumnFilter: true,
            disableColumnSelector: true,
            sortable: false,
        },
        {field: 'first_name', headerName: 'First name', width: 130},
        {field: 'last_name', headerName: 'Last name', width: 130},
        {field: 'email', headerName: 'Email', width: 230},
    ], []);
    return columns;
}
