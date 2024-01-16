import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Employee Routing
const AddPatient = Loadable(lazy(() => import('views/employee/addEmployee')));
const ViewPatient = Loadable(lazy(() => import('views/employee/viewEmployee')));


// ==============================|| MAIN ROUTING ||============================== //



const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ViewPatient />
        },
        {
            path: '/patient/add-patient',
            element: <AddPatient />
        },
        {
            path: '/patient/view-patient',
            element: <ViewPatient />
        },
    ]
};

export default MainRoutes;
