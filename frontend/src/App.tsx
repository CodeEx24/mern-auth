import './index.css';

// import { QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RouterView } from './router/RouterView';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
    console.log('HELLo');
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} position="right" />
            <BrowserRouter>
                <RouterView />
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
