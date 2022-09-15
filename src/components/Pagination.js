import React from 'react';

const Pagination = ({ countryPerPage, totalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / countryPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='bg-blue-500 p-1'>
      <ul className='flex gap-2'>
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
