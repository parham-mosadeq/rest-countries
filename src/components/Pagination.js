import React from 'react';

const Pagination = ({ countryPerPage, totalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / countryPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='bg-blue-900 p-1 mt-5 rounded-t-md'>
      <ul className='flex gap-2 flex-wrap '>
        {pageNumbers.map((num) => {
          return (
            <li className='text-white ml-auto mr-auto' key={num}>
              <span
                className=' cursor-pointer hover:text-gray-300  '
                onClick={() => paginate(num)}
                href='!#'
              >
                {num}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
