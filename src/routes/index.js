import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';
import Guests from '../pages/guests/Guests';
import Channels from '../pages/channels/Channels';
import Bookings from '../pages/bookings/Bookings';
import BookingDetail from '../pages/bookings/Detail';

import Listings from '../pages/listings/List';
import ListingDetail from '../pages/listings/Detail';
import ListingNew from '../pages/listings/New';
import Properties from '../pages/properties/List';
import PropertyNew from '../pages/properties/New';
import PropertyDetail from '../pages/properties/Detail';
import MyAccount from '../pages/auth/MyAccount';


// Auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));

// Dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));

// Calendar
const CalendarApp = React.lazy(() => import('../pages/calendar/Calendar'));

// Handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// Root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};

// Dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboard',
    icon: FeatherIcon.Monitor,
    // header: 'Navigation',
    // badge: {
    //     variant: 'success',
    //     text: '1',
    // },
    component: Dashboard,
    roles: ['Admin'],
    route: PrivateRoute
};

// Guests
const guestRoutes = {
    path: '/guests',
    name: 'Guests',
    icon: FeatherIcon.Users,
    // header: 'Navigation',
    component: Guests,
    roles: ['Admin'],
    route: PrivateRoute
};

// Listings
const listingsRoutes = {
    path: '/listings',
    name: 'Listings',
    icon: FeatherIcon.List,
    header: 'Listing Management',
    component: Listings,
    roles: ['Admin'],
    route: PrivateRoute,
    children: [
        {
            path: '/listings/',
            name: 'List',
            exact: true,
            component: Listings,
            route: Route,
        },
        {
            path: '/listings/new',
            name: 'New',
            exact: true,
            component: ListingNew,
            route: Route,
        },
        {
            path: '/listings/:id',
            name: 'Detail',
            exact: true,
            component: ListingDetail,
            route: Route,
        }
    ]
};

const propertiesRoutes = {
    path: '/properties',
    name: 'Properties',
    icon: FeatherIcon.Home,
    header: 'Property Management',
    component: Properties,
    roles: ['Admin'],
    route: PrivateRoute,
    children: [
        {
            path: '/properties/',
            name: 'List',
            exact: true,
            component: Properties,
            route: Route,
        },
        // {
        //     path: '/properties/new',
        //     name: 'New',
        //     exact: true,
        //     component: PropertyNew,
        //     route: Route,
        // },
        {
            path: '/properties/:id',
            name: 'Detail',
            exact: true,
            component: PropertyDetail,
            route: Route,
        }
    ]
};

// New Property
const newPropertiesRoute = {
    path: '/properties/new',
    name: 'New Property',
    exact: true,
    component: PropertyNew,
    route: PrivateRoute,
    roles: ['Admin'],
};

// Calendar
const calendarAppRoutes = {
    path: '/apps/calendar',
    name: 'Calendar',
    // header: 'Apps',
    icon: FeatherIcon.Calendar,
    component: CalendarApp,
    route: PrivateRoute,
    roles: ['Admin'],
};

// Channels
const channelsRoutes = {
    path: '/channels',
    name: 'Channels',
    // header: 'Apps',
    icon: FeatherIcon.Box,
    component: Channels,
    route: PrivateRoute,
    roles: ['Admin']
};

// Bookings
const bookingsRoutes = {
    path: '/bookings',
    name: 'Bookings',
    icon: FeatherIcon.Book,
    component: Bookings,
    exact: true,
    roles: ['Admin'],
    route: PrivateRoute,
    children: [
        {
            path: '/bookings',
            name: 'List',
            exact: true,
            component: Bookings,
            route: Route,
        },
        {
            path: '/bookings/:id',
            name: 'Detail',
            exact: true,
            component: BookingDetail,
            route: Route,
        }
    ]
};

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
        {
            path: '/account',
            name: 'My Account',
            component: MyAccount,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute,
    dashboardRoutes,
    newPropertiesRoute,
    propertiesRoutes,
    listingsRoutes, 
    guestRoutes, 
    calendarAppRoutes, 
    channelsRoutes, 
    bookingsRoutes,
    authRoutes,
];

const authProtectedRoutes = [
    dashboardRoutes, 
    propertiesRoutes,
    listingsRoutes,
    guestRoutes, 
    calendarAppRoutes, 
    channelsRoutes, 
    bookingsRoutes,
];

const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes };
