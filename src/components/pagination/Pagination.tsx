import React from 'react';

type paginationType  = {
    pageArray: number[],
    page: number,
    changePage:( page: number)=>void
}

const Pagination = ({pageArray, page, changePage}:paginationType) => {
    return (
        <div className='pageArray'>
            {pageArray.map(p =>
                <span key={p}
                      className={page === p ? 'page__current' : 'page'}
                      onClick={()=>changePage(p)}>{p}</span>)
            }
        </div>
    );
};

export default Pagination;