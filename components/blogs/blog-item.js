import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "../../styles/blogs/blog-item.module.css";

const BlogItem = (props) => {
    const {title, text_content, uri } = props;
    const exploreLink = uri;
    return (
       <li className={classes.item}>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.address}>
                        <div
                            dangerouslySetInnerHTML={{__html: text_content}}
                        />
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
       </li>
    );
}

export default BlogItem;