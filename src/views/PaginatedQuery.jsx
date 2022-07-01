import React, { useState } from 'react';
import { useQuery } from 'react-query';

import UserTable from '../components/UserTable';

import { BASE_URL, PAGE_LIMIT } from '../constants.ts';


const fetchUsers = async (page = 1, signal) => {
  const response = await fetch(
    `${BASE_URL}/users?_page=${page}&_limit=${PAGE_LIMIT}`, { signal }
  );

  // Can be used to validate pagination buttons
  return response.json();
};

function PaginatedQuery () {
  let { signal } = new AbortController();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, status, error } = useQuery(
    ['paginatedUsers', page],
    () => fetchUsers(page, signal),
    {
      keepPreviousData: true,
    }
  );

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  {
    const queryClient = useQueryClient();
    const [page, setPage] = React.useState(0);
    // Prefetch the next page!
    React.useEffect(() => {
      // data.hasMore - это свойство API сервера.
      if (data?.hasMore) {
        queryClient.prefetchQuery(["paginatedUsers"], page + 1), () => fetchUsers(page + 1);
      }
    }, [data, page, queryClient]);
  }

  return (
    <div>
      <h2 className="mb-4">Paginated Query Example</h2>
      <div>
        { isError && <div>{ error.message }</div> }

        { isLoading && <div>Loading...</div> }

        { status === 'success' && <UserTable users={ data } /> }
      </div>
      <div className="flex mt-4 justify-between items-center">
        <button
          className="btn btn-page"
          onClick={ prevPage }
          disabled={ page <= 1 }
        >
          Prev
        </button>
        <span className="rounded font-semibold text-teal-900">
          Page: { page }
        </span>
        <button
          className="btn btn-page"
          onClick={ nextPage }
          disabled={ data && data.length < PAGE_LIMIT }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedQuery;
