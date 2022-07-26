
import { useEffect, useState } from "react";
import useSWR from "swr";
import BlogList from "../components/blogs/blog-list";

const HomePage = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);

  const fetcher = url => fetch(url).then(r => r.json())

  const {data, error } = useSWR('https://www.zesty.io/-/gql/platform_section.json', fetcher);

  useEffect(() => {
    if(data){
      setBlogs(data);
    }
  },[data]);
  
  if(error){
    <p>Failed to load....</p>;
  }

  if(!data && !blogs){
      return <p>Loading...</p>;
  }

  return (
      <div>
        <BlogList items={blogs} />
      </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://www.zesty.io/-/gql/platform_section.json');
  const data = await response.json();

  return {
    props: {
        blogs: data
    }
  }
}

export default HomePage;