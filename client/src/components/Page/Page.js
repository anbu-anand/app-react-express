import React from 'react';

export const Page = ({ posts }) => {
    const list = posts?.map(({ title, id }) => <li key={id}>{title}</li>);
    return <ul>{list}</ul>;
};
