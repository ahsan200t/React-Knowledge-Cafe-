import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-400 ml-5 rounded-xl">
      <h2 className="text-2xl font-bold text-center pt-2">Bookmarked Blogs: {bookmarks.length}</h2>

      {
      bookmarks.map(bookmark => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
