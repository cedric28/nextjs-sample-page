import BlogItem from "./blog-item";
import classes from "../../styles/blogs/blog-list.module.css";

const BlogList = (props) => {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(event =>( 
                <BlogItem 
                    key={event.title} 
                    {...event}
                />
            ))}
        </ul>
    );
}

export default BlogList;