// assets
import { IconAlarm, IconEyeglass, IconCalendarTime, IconCalendarOff, IconUserPlus } from '@tabler/icons';
// constant
const icons = {
    IconAlarm,
    IconEyeglass,
    IconCalendarTime,
    IconCalendarOff,
    IconUserPlus
};

// ==============================|| ATTENDANCE MENU ITEMS ||============================== //

const employee = {
    id: 'patient',
    title: 'Patient',
    type: 'group',
    children: [
        {
            id: 'addPatient',
            title: 'Add Patient',
            type: 'item',
            url: '/patient/add-patient',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        },
        {
            id: 'viewPatient',
            title: 'View Patient',
            type: 'item',
            url: '/patient/view-patient',
            icon: icons.IconEyeglass,
            breadcrumbs: false
        }
    ]
};

export default employee;
