import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useForm, Controller, FormProvider, useFormContext} from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {styled} from '@mui/material/styles';
import {useDispatch} from 'react-redux';
import {addEmployee} from 'store/actions/employeeAction';
import axios from 'axios';
import {toast} from 'react-toastify';

const ColorButton = styled(Button)(({theme}) => ({
    marginTop: '20px',
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '22px',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: '#009FBE'
}));
const BackButton = styled(Button)(({theme}) => ({
    marginTop: '20px',
    color: 'grey',
    fontFamily: 'Poppins',
    fontSize: '22px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #009FBE'
}));

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1)
    }
}));

function getSteps() {
    return ['Personal Details', 'Medication Details'];
}

const PersonalDetails = () => {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const {
        control,
        formState: {errors}
    } = useFormContext();
    console.log(errors);
    return (
        <>
            <Grid container spacing={6} alignItems="center" justifyContent="center" style={{marginTop:"5px"}}>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="fullName"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="full-name"
                                label="Name"
                                variant="outlined"
                                placeholder="Enter Full Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.fullName)}
                                helperText={errors.fullName?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="dob"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="dob"
                                label="Date of Birth"
                                type="date"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{shrink: true}}
                                {...field}
                                error={Boolean(errors?.dob)}
                                helperText={errors.dob?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="sex"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <FormControl fullWidth>
                                <InputLabel id="gender-label">Sex</InputLabel>
                                <Select
                                    labelId="sex-label"
                                    id="sex-select"
                                    value={gender}
                                    label="Sex"
                                    onChange={handleChange}
                                    {...field}
                                    error={Boolean(errors?.sex)}
                                    helperText={errors.sex?.message}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="bloodGroup"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="blood-group"
                                label="Blood Group"
                                variant="outlined"
                                placeholder="Enter Blood Group"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.bloodGroup)}
                                helperText={errors.bloodGroup?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>


            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="phoneNumber"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="mobile-no"
                                label="Mobile Number"
                                variant="outlined"
                                placeholder="Enter 10 Digit Mobile Number"
                                fullWidth
                                margin="normal"
                                inputProps={{maxLength: 10}}
                                {...field}
                                error={Boolean(errors?.mobileNo)}
                                helperText={errors.mobileNo?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="alternateNumber"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="alternate-no"
                                label="Alternate Number"
                                variant="outlined"
                                placeholder="Enter 10 Digit Number"
                                fullWidth
                                margin="normal"
                                inputProps={{maxLength: 10}}
                                {...field}
                                error={Boolean(errors?.alternateNumber)}
                                helperText={errors.alternateNumber?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="insuranceCarrier"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="insurance-carrier"
                                label="Insurance Carrier"
                                variant="outlined"
                                placeholder="Enter Insurance Carrier"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.insuranceCarrier)}
                                helperText={errors.insuranceCarrier?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="policyNumber"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="policy-number"
                                label="Policy Number"
                                variant="outlined"
                                placeholder="Enter Policy Number"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.policyNumber)}
                                helperText={errors.policyNumber?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="pastConditions"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="past-conditions"
                                label="Past Conditions"
                                variant="outlined"
                                placeholder="Enter Past Conditions"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.pastConditions)}
                                helperText={errors.pastConditions?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="surgeries"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="surgeries"
                                label="Surgeries"
                                variant="outlined"
                                placeholder="Enter Surgeries"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.surgeries)}
                                helperText={errors.surgeries?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </>
    );
};

const MedicationDetails = () => {
    const {
        control,
        formState: {errors}
    } = useFormContext();
    console.log(errors);
    return (
        <>

            <Grid container spacing={6} alignItems="center" justifyContent="center" style={{marginTop:"5px"}}>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="name"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="name"
                                label="Medication Name"
                                variant="outlined"
                                placeholder="Enter Medication Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.name)}
                                helperText={errors.name?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="dosage"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="dosage"
                                label="Dosage"
                                variant="outlined"
                                placeholder="Enter Dosage"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.dosage)}
                                helperText={errors.dosage?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="frequency"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="frequency"
                                label="Frequency"
                                variant="outlined"
                                placeholder="Enter Frequency"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.frequency)}
                                helperText={errors.frequency?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="physician"
                        rules={{required: 'this field is required.'}}
                        render={({field}) => (
                            <TextField
                                id="physician"
                                label="Physician"
                                variant="outlined"
                                placeholder="Enter Physician"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.physician)}
                                helperText={errors.physician?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>

        </>
    );
};

function getStepContent(step, methods) {
    switch (step) {
        case 0:
            return <PersonalDetails/>;
        case 1:
            return <MedicationDetails/>;

        default:
            return 'unknown step';
    }
}

const LinaerStepper = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            fullName: '',
            dob: '',
            sex: '',
            bloodGroup: '',
            phoneNumber: '',
            alternateNumber: '',
            insuranceCarrier: '',
            policyNumber: '',
            pastConditions: '',
            surgeries: '',
            name: '',
            dosage: '',
            frequency: '',
            physician: ''
        }
    });
    const [selectFile, setselectFile] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [text, settext] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onFileChange = (event) => {
        // Update the state
        setselectFile(event.target.files[0]);
    };
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
    const isStepOptional = (step) => step === 1 || step === 2;
    const isStepFalied = () => {
        Boolean(Object.keys(methods.formState.errors).length);
    };
    const isStepSkipped = (step) => {
        skippedSteps.includes(step);
    };
    const handleNext = (data) => {
        //console.log(data);
        if (activeStep === steps.length - 1) {
            dispatch(addEmployee(methods.getValues()));
            fetch('http://localhost:4000/api/v1/employees/new')
                .then((data) => data.json())
                .then((res) => {
                    //console.log(res);
                    setActiveStep(activeStep + 1);
                });
        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" style={{color: 'red', fontSize: '1.5em'}}>
                    Error
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
                </DialogContent>
            </Dialog>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepFalied() && activeStep === index) {
                        labelProps.error = true;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center" style={{marginTop: '50px'}}>
                    Your detail submitted successfully!..
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep, methods)}
                            <Grid container spacing={6} alignItems="center" justifyContent="center">
                                <Grid item xs={12} sm={5}>
                                    <BackButton className={classes.button} disabled={activeStep === 0}
                                                onClick={handleBack}>
                                        Back
                                    </BackButton>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <ColorButton type="submit" className={classes.button} variant="contained">
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </ColorButton>
                                </Grid>
                            </Grid>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;
