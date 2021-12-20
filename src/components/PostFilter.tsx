import React from 'react';
import PostForm from "./PostForm";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/mySelect/MySelect";

type filterType = {
    sort: string,
    query: string
}

type postFilterType = {
    filter: filterType,
    setFilter: (filter: filterType) => void
}

const PostFilter = ({filter, setFilter}: postFilterType) => {
    return (
        <div>
            <MyInput placeholder='Search...'
                     value={filter.query}
                     onChange={event => setFilter({...filter, query: event.currentTarget.value})}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue="Sort for"
                options={[
                    {value: 'title', name: 'Sort for name'},
                    {value: 'body', name: 'Sort for description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;