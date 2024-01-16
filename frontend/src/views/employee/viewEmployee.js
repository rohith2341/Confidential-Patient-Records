import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myEmployee, clearErrors } from '../../store/actions/employeeAction';
import { useNavigate } from 'react-router-dom';
// Add this import to your ViewEmployee.js file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// material ui import
import {Button, Typography} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AttendanceTopbar from 'ui-component/attendence-topbar';
import { StyledContainer, StyledTable, StyledTableRow, StyledTableCell, StyledMainCardSalary } from 'ui-component/tables/tablestyle';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import Pagination from '@mui/material/Pagination';
import formatDate from 'utils/date-format';
import EmployeeSidepanel from 'ui-component/payment/employeeSidePanel';
import { deleteEmployee } from 'store/actions/employeeAction';
import LinaerStepper from './LinearStepper';
// ==============================|| VIEW ATTENDENCE PAGE ||============================== //

const ViewEmployee = () => {
    const navigate = useNavigate();
    const handleEdit = (employeeId) => {
        // Navigate to the edit page with the employee ID
        navigate(`/patient/edit-patient/${employeeId}`);
    };
    const handleDelete = async (employeeId) => {
        try {
            // Dispatch the delete action
            await dispatch(deleteEmployee(employeeId));

            // Show success notification
            toast.success('deleted successfully!');

            // Reload the page after deletion
            window.location.reload();

            // Alternatively, navigate to a specific route after deletion
            // navigate('/patient/view-patient');
        } catch (error) {
            // Show error notification
            toast.error('Error deleting.');
        }
    };

    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const [keyword, setKeyword] = React.useState('');

    const { error, orders } = useSelector((state) => state.myEmployee);
    //console.log(orders);

    useEffect(() => {
        dispatch(myEmployee(page, 10, keyword));
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, page,keyword]);
    const [open, setOpen] = useState('inactivesidebar');
    const [data, setData] = useState([]);

    const handleClickOpen = (item) => {
        setData(item);
        setOpen('activesidebar');
    };
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleClose = () => {
        setOpen('inactivesidebar');
    };
    return (
        <StyledMainCardSalary>
            <AttendanceTopbar name="Manage Patient" search="true" setKeyword={setKeyword} />
            <Typography variant="body2">
                <StyledContainer component={Paper}>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">#</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">DOB</StyledTableCell>
                                <StyledTableCell align="center">SEX</StyledTableCell>
                                <StyledTableCell align="center">Blood Group</StyledTableCell>
                                <StyledTableCell align="center">Phone No</StyledTableCell>
                                <StyledTableCell align="center">Insurance</StyledTableCell>
                                <StyledTableCell align="center">Policy No</StyledTableCell>
                                <StyledTableCell align="center">Past Conditions</StyledTableCell>
                                <StyledTableCell align="center">Surgeries</StyledTableCell>
                                <StyledTableCell align="center">View Patient</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders?.employees?.map((row, index) => (
                                <StyledTableRow
                                    key={(page - 1) * 10 + index + 1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(page - 1) * 10 + index + 1}
                                    </TableCell>
                                    <TableCell align="center">{row?.personalDetails?.fullName}</TableCell>
                                    <TableCell align="center">{formatDate(row?.personalDetails?.dob)}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.sex}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.bloodGroup}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.phoneNumber}</TableCell>
                                                                        <TableCell align="center">{row?.personalDetails?.insuranceCarrier}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.policyNumber}</TableCell>

                                    <TableCell align="center">{row?.personalDetails?.pastConditions}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.surgeries}</TableCell>


                                    <TableCell align="center">
                                        <TableViewOutlinedIcon
                                            onClick={() => {
                                                handleClickOpen(row);
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </TableCell>

                                    <TableCell align="center">
                                        <Button onClick={() => handleEdit(row._id)}>Edit</Button>
                                        <Button onClick={() => handleDelete(row._id)} style={{color:"red"}}>Delete</Button>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                    <Pagination
                        count={Math.floor(orders?.employeeCount / 10) + 1}
                        color="primary"
                        style={{ float: 'right' }}
                        page={page}
                        onChange={handleChange}
                    />
                </StyledContainer>
            </Typography>
            <div className={`view-salary-sidebar ${open}`}>
                <Typography variant="body2">
                    {/*<LinaerStepper existingEmployeeData={data} />*/}
                    <EmployeeSidepanel
                        data={data}
                        parentCallback={handleClose}
                        // count={datacount}
                        // todaydays={parseInt(daysInMonth(date.getMonth() + 1, date.getFullYear()), 10)}
                    />
                </Typography>
            </div>
        </StyledMainCardSalary>
    );
};

export default ViewEmployee;
