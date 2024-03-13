import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime  }) => {
  return (
    <div className="md:w-1/3 bg-gray-400 ml-5 rounded-xl">
      <div className="bg-gray-200 p-2 mb-2 rounded-xl">
        <h1 className="text-2xl text-center text-purple-900 font-semibold">Spent time on read: {readingTime}  <span>min</span></h1>
      </div>
      <h2 className="text-2xl font-bold text-center pt-2">Bookmarked Blogs: {bookmarks.length}</h2>

      {
      bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
