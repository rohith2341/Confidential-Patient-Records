import * as React from 'react';
// Material ui import
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import { StyledContainer, StyledTableCell } from './tables/tablestyle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AttendanceTopbar(props) {
    const {
        name,
        setKeyword,
        parentCallback2,
        search,
    } = props;

    const [value, setValue] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const [disabled, setdisabled] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
        handleClickOpen();
    };

    return (
        <StyledContainer component={Paper} sx={{ marginTop: -4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">
                            <h2 style={{ fontWeight: 600, fontFamily: 'Poppins', fontSize: '22px' }}>{name}</h2>
                        </StyledTableCell>
                        {search === 'true' && (
                            <StyledTableCell align="center">
                                <SearchSection setKeyword={setKeyword} />
                            </StyledTableCell>
                        )}
                    </TableRow>
                </TableHead>
            </Table>
            <Dialog open={open} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                <DialogTitle>Confirm</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you confirm that you want to select this date?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            parentCallback2(value, false);
                            handleClose();
                            setdisabled(true);
                        }}
                    >
                        Yes
                    </Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
        </StyledContainer>
    );
}
