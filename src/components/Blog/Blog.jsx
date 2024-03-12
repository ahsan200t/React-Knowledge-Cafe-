import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-4 rounded-2xl" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h2 className="text-2xl font-semibold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p>
            <span>{reading_time} min read</span>
          </p>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-red-400 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-semibold mt-4">{title}</h1>
      <p className="mt-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired
};
export default Blog;
