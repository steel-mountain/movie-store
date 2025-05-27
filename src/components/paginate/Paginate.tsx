import { FC } from "react";
import ReactPaginate from "react-paginate";

interface IPaginateProps {
  initialPage: number;
  pageCount: number;
  handlePageClick: ({ selected }: { selected: number }) => void;
}

const Paginate: FC<IPaginateProps> = ({
  initialPage,
  pageCount,
  handlePageClick,
}) => {
  return (
    <ReactPaginate
      previousLabel={<div className="mb-7 s:mb-0">Previous</div>}
      nextLabel={<div className="mb-7 s:mb-0">Next</div>}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      forcePage={initialPage}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName="flex flex-wrap items-center justify-center mt-10 mb-[50px] space-x-4 text-xl "
      pageClassName="mb-7 s:mb-0 border border-solid border-lightGray rounded-3xl hover:bg-default hover:text-white dark:bg-white"
      pageLinkClassName="cursor-pointer block w-12 h-12 flex items-center justify-center "
      activeClassName="bg-default text-white dark:bg-default dark:text-black"
      previousClassName="dark:text-white hover:text-default"
      nextClassName="dark:text-white hover:text-default"
      breakClassName="dark:text-white hover:text-default"
    />
  );
};

export default Paginate;
