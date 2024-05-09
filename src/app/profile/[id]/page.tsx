'use client';
import {Avatar, Box, Button, Card, CardActions, CardContent, Container, Typography, useTheme} from '@mui/material';
import usersApi from '@/services/users';
import {useRouter} from 'next/navigation';
import * as React from 'react';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';

type Props = {
    params: {
        id: number
    }
}
export default function ProfilePage({params: {id}}: Props) {
    const {data: user, isLoading} = usersApi.useGetUserByIdQuery({id});
    const [deleteUser, response] = usersApi.useDeleteUserByIdMutation();
    const {palette} = useTheme();
    const router = useRouter();
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
    const toggleDeleteDialog = () => {
        setDeleteDialogIsOpen(!deleteDialogIsOpen);
    };
    const handleDelete = () => {
        deleteUser(id);
        router.back();
    };

    return (
        <Container
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                py: 7.2,
                height: '100%',
            }}
        >
            <Card
                sx={{
                    width: {md: '33%'},
                    position: 'relative',
                    overflow: 'visible',
                }}>
                <CardContent>
                    <Avatar
                        src={user?.data.avatar}
                        sx={{
                            position: 'absolute',
                            top: -41,
                            right: '50%',
                            left: '50%',
                            transform: 'translate(-50%)',
                            height: 82,
                            width: 82,
                            border: '2px solid ' + palette.success.main,
                        }}
                    />
                    <Box pt={5}>
                        <Typography><strong>First name: </strong>{user?.data.first_name}</Typography>
                        <Typography><strong>Last name: </strong>{user?.data.last_name}</Typography>
                        <Typography><strong>Email: </strong>{user?.data.email}</Typography>
                    </Box>
                    <CardActions sx={{justifyContent: 'flex-end', mt: 3}}>
                        <Button onClick={() => router.back()}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => toggleDeleteDialog()}
                        >
                            Delete
                        </Button>
                        <Dialog
                            open={deleteDialogIsOpen}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={toggleDeleteDialog}
                        >
                            <DialogTitle>Are you sure to delete this user?</DialogTitle>
                            <DialogActions>
                                <Button onClick={toggleDeleteDialog}>Cancel</Button>
                                <Button color="error" onClick={handleDelete}>Delete</Button>
                            </DialogActions>
                        </Dialog>
                    </CardActions>
                </CardContent>
            </Card>
        </Container>
    );
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
