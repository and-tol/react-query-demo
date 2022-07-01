import React, {ReactElement} from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import BasicQuery from "./views/BasicQuery";
import InfiniteQuery from "./views/InfiniteQuery";
import PaginatedQuery from "./views/PaginatedQuery";
import CreateUser from "./views/CreateUser";
import EditUser from "./views/EditUser";
import { Navbar } from './components/Navbar';


function App () {
    // Create a client
    const queryClient = new QueryClient();

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container p-4 mx-auto mt-8 lg:w-screen-lg">
                <QueryClientProvider client={ queryClient }>
                    <Routes>
                        <Route path='/' element={ <BasicQuery /> } />
                        <Route path='paginated' element={ <PaginatedQuery /> } />
                        <Route path='infinite' element={ <InfiniteQuery /> } />
                        <Route path='user/create' element={ <CreateUser /> } />
                        <Route path='user/edit/:id' element={ <EditUser /> } />
                    </Routes>
                    <ReactQueryDevtools initialIsOpen={ true } />
                </QueryClientProvider>
            </main>
        </>
    );
}

export default App;
