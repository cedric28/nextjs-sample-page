import EventItem from "./event-item";
import classes from "../../styles/events/event-list.module.css";

const EventList = (props) => {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(event =>( 
                <EventItem 
                    key={event.title} 
                    {...event}
                />
            ))}
        </ul>
    );
}

export default EventList;