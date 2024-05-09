'use client';
import {DataGrid} from '@mui/x-data-grid';
import {Container} from '@mui/material';
import usersApi from '@/services/users';
import {useHandleSelectedRows, useHandleUserRowClick, useUserDataColumn} from '@/hooks';
import {useState} from 'react';

export default function Home() {
    const [paginationModel, setPaginationModel] = useState({page: 0, pageSize: 10});
    const {data: users, isLoading} = usersApi.useGetUsersQuery({
        page: paginationModel.page,
        per_page: paginationModel.pageSize,
    });
    const columns = useUserDataColumn();
    const handleRowClick = useHandleUserRowClick();
    const {selectedRowsIds, handleSelectRows} = useHandleSelectedRows();

    return (
        <Container
            sx={{
                alignItems: 'center',
                display: 'flex',
                py: 7.2,
                height: '100%',
            }}
        >
            <DataGrid
                disableRowSelectionOnClick
                rows={users?.data ?? []}
                columns={columns}
                loading={isLoading}
                initialState={{
                    pagination: {
                        paginationModel,
                    },
                }}
                pageSizeOptions={[5, 10, 50]}
                onPaginationModelChange={(v) => setPaginationModel(v)}
                onRowClick={handleRowClick}
                onRowSelectionModelChange={handleSelectRows}
        />
        </Container>
  );
}
