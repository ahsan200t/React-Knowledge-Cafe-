import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div>
        <img src={cover} alt="" />
        <div className="flex justify-between items-center">
            <div className="flex gap-6">
                <img className="w-14" src={author_img} alt="" />
                <div>
                   <h2 className="text-2xl font-semibold">{author}</h2>
                   <p>{posted_date}</p>
                </div>
            </div>
            <div>
              <p><span>{reading_time} min read</span></p>
            </div>
        </div>
      <h1 className="text-2xl">{title}</h1>
     <p>
        {
           hashtags.map((hash, idx)=> <span key={idx}><a href="">#{hash}</a> </span>)
        }
     </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
