import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default App;
