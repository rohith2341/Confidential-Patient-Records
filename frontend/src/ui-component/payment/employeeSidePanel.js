import React from 'react';
import './paymentsidepanel.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneIcon from '@mui/icons-material/Phone';
import CancelIcon from '@mui/icons-material/Cancel';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import formatDate from '../../utils/date-format';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';

const EmployeeSidepanel = (props) => {
    const { parentCallback, data } = props;
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="salary-sidepanel-container">
            <div className="salary-sidepanel-box1">
                <span className="close-sidebar" role="button" onKeyDown={parentCallback} tabIndex={-27} onClick={parentCallback}>
                    <CancelIcon style={{ cursor: 'pointer' }} />
                </span>
                <div className="salary-sidepanel-box-img">
                    <img
                        className="salary-sidepanel-img"
                        alt="user"
                        src="https://ik.imagekit.io/sia73/VEHR_Temp/user-avatar_OM_0o94SC.png"
                    />
                </div>
                <div className="salary-sidepanel-box-head">
                    <h3 style={{ fontWeight: 700, color: '#000000', fontSize: '24px', marginLeft: '-25px' }}>
                        {data?.personalDetails?.fullName}
                    </h3>
                    <div className="sidepanel-icon" style={{ marginBottom: '20px' }}>
                        <span>
                            <PhoneIcon />
                            <span>{data?.personalDetails?.phoneNumber}</span>
                        </span>
                        <span>
                            <PhoneIcon />
                            <span>{data?.personalDetails?.alternateNumber}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="salary-sidepanel-box2">
                <div>
                    <p>SEX</p>
                    <b>{data?.personalDetails?.sex}</b>
                </div>

                <div style={{ display: 'block' }}>
                    <p>Joining Date</p>
                    <p>
                        <b>{formatDate(data?.personalDetails?.dob)}</b>
                    </p>
                </div>
                <div style={{ display: 'block' }}>
                    <p>Mode of Wages</p>
                    <p>
                        <b>{data?.personalDetails?.bloodGroup}</b>
                    </p>
                </div>
            </div>

            <div className="salary-sidepanel-box3">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Personal Details" value="1" />
                            <Tab label="Medication Details" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {' '}
                        <div className="salary-sidepanel-box3">
                            <div className="salary-sidepanel-box2">
                                <div style={{ borderRight: 'none', padding: '20px' }}>
                                    <p>Insurance Carrier</p>
                                    <b>{data?.personalDetails?.insuranceCarrier}</b>
                                </div>

                                <div style={{ display: 'block', borderRight: 'none', padding: '20px' }}>
                                    <p>Policy Number</p>
                                    <p>
                                        <b>{data?.personalDetails?.policyNumber}</b>
                                    </p>
                                </div>
                                <div style={{ display: 'block', borderRight: 'none', padding: '20px' }}>
                                    <p>Past Conditions</p>
                                    <p>
                                        <b>{data?.personalDetails?.pastConditions}</b>
                                    </p>
                                </div>
                            </div>
                            <div className="salary-sidepanel-box2">
                                <div style={{ borderRight: 'none', padding: '20px' }}>
                                    <p>Father Name</p>
                                    <b>{data?.personalDetails?.surgeries}</b>
                                </div>

                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="salary-sidepanel-box3">
                            <div className="salary-sidepanel-box2">
                                <div style={{ borderRight: 'none', padding: '20px' }}>
                                    <p>Name</p>
                                    <b>{data?.medications?.name}</b>
                                </div>

                                <div style={{ display: 'block', borderRight: 'none', padding: '20px' }}>
                                    <p>Dosage</p>
                                    <p>
                                        <b>{data?.medications?.dosage}</b>
                                    </p>
                                </div>
                                <div style={{ display: 'block', borderRight: 'none', padding: '20px' }}>
                                    <p>Frequency</p>
                                    <p>
                                        <b>{data?.medications?.frequency}</b>
                                    </p>
                                </div>
                            </div>
                            <div className="salary-sidepanel-box2">
                                <div style={{ borderRight: 'none', padding: '20px' }}>
                                    <p>Physician</p>
                                    <b>{data?.medications?.physician}</b>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
            {/* <div className="salary-sidepanel-box3">
                <div className="salary-sidepanel-box-head3">Total Deduction</div>
                <div className="salary-sidepanel-box-cont">
                    <div>
                        <p>Provident Fund (PF)</p>
                        <b>
                            {data?.pfDetails?.aboveBasic === 'PF but restricted to 15k' ? (
                                <b>{Math.round((15000 / todaydays / 12) * 100 * count.count)}</b>
                            ) : data?.pfDetails?.aboveBasic === 'PF on actual' ||
                              (data?.pfDetails?.wereMember == 'Yes' && data?.pfDetails?.withdrawn == 'Yes') ? (
                                <b>
                                    {data?.companyDetails?.selectWages === 'Monthly Wages'
                                        ? Math.round((((data?.salaryDetails?.basicSalary * count.count) / todaydays) * 12) / 100)
                                        : Math.round((data?.salaryDetails?.basicSalary * count.count * 12) / 100)}
                                </b>
                            ) : (
                                <b>0</b>
                            )}
                        </b>
                    </div>
                    <div>
                        <p>Canteen</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Advance Payment</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Loan</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Tax</p>
                        <b>{Math.round(data?.salaryDetails?.incomeTax)}</b>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default EmployeeSidepanel;
