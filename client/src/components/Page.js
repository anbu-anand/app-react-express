import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../state/reducers/userReducer';

function Page() {
    const dispatch = useDispatch();
    const stateVals = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    return (
        <div>
            <div>This is user list page</div>
            {JSON.stringify(stateVals)}
        </div>
    );
}

export default Page;
