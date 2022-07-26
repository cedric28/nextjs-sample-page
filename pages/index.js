
import { useEffect, useState } from "react";
import useSWR from "swr";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
  const [events, setEvents] = useState(props.events);

  const fetcher = url => fetch(url).then(r => r.json())

  const {data, error } = useSWR('https://www.zesty.io/-/gql/platform_section.json', fetcher);

  useEffect(() => {
    if(data){
      setEvents(data);
    }
  },[data]);
  
  if(error){
    <p>Failed to load....</p>;
  }

  if(!data && !events){
      return <p>Loading...</p>;
  }

  return (
      <div>
        <EventList items={events} />
      </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://www.zesty.io/-/gql/platform_section.json');
  const data = await response.json();

  return {
    props: {
        events: data
    }
  }
}

export default HomePage;