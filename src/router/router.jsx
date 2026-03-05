import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authentication from "../Authentication/Authentication";
import MyProfile from "../pages/MyProfile";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../provider/PrivateRoute";


const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: Root,
            children: [
                {   
                    index:true,
                    path: '/',
                    Component: Home,
                    loader:()=> fetch('/servicesData.json'),
                },
                {
                    path: '/services',
                    Component: Services,
                    loader:()=> fetch('/servicesData.json'),
                },
                {
                    path: '/Profile',
                    Component: MyProfile,
                },
                {
                    path: '/services/:serviceId',
                    element:
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>,
                    loader:()=> fetch('/servicesData.json'),
                }
            ]
        },
        {
            path: '/auth',
            Component: Authentication,
            children:[
                {
                    path: '/auth/login',
                    Component:Login,
                },
                {
                    path: '/auth/register',
                    Component:Register,
                },
            ]
        },
        {
            path: '/*',
            Component: Error,
        },
    ]
)
export default router;