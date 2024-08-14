import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Pages/login';
import { ResetPassword } from './Pages/reset';
import { Signup } from './Pages/singup';
import { ForgotPassword } from './Pages/forget';
import AdminPage from './Pages/admin';
import NotFound from './Pages/notfound';
import Dashboard from './components/dashbord';
import Feedbacks from './components/feedbacks';
import Settings from './components/settings';
import Users from './components/users';

export const route = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/reset",
        element: <ResetPassword />
    },
    {
        path: "/forget",
        element: <ForgotPassword />
    },
    {
        path: "/admin",
        element: <AdminPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "feedbacks",
                element: <Feedbacks />
            }
        ]
    },
    {
        path: "*", 
        element: <NotFound />
    }
]);
