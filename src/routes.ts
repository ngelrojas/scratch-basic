import {lazy, ComponentType} from 'react';

// Define interface for route structure
interface Route {
    path: string;
    component: ComponentType<any>;
    exact?: boolean;
    title: string;
    protected?: boolean;
}

// Lazy load components
const Home = lazy(() => import('@/pages/Home'));
const FAQ = lazy(() => import('@/pages/Faq'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Define routes configuration
export const routes: Route[] = [
    {
        path: '/',
        component: Home,
        exact: true,
        title: 'Home',
        protected: false,
    },
    {
        path: '/faq',
        component: FAQ,
        exact: true,
        title: 'FAQ',
        protected: false,
    },
    {
        path: '*',
        component: NotFound,
        exact: false,
        title: '404',
        protected: false,
    },
];

// Helper function to get route by path
export const getRouteByPath = (path: string): Route | undefined => {
    return routes.find((route) => route.path === path);
};

// Helper function to get all public routes
export const getPublicRoutes = (): Route[] => {
    return routes.filter((route) => !route.protected);
};

// Helper function to get all protected routes
export const getProtectedRoutes = (): Route[] => {
    return routes.filter((route) => route.protected);
};

export default routes;