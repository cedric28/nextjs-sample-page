import { useEffect, useState } from "react";
import useSWR from "swr";
import AboutTitle from '../../components/about/about-title';
import AboutContent from '../../components/about/about-content';

const AboutDetailPage = (props) => {
    const [about, setAbout] = useState(props.about);

    const fetcher = url => fetch(url).then(r => r.json())
  
    const {data, error } = useSWR('https://www.zesty.io/-/instant/7-e93178-vqvclg.json', fetcher);
  
    useEffect(() => {
      if(data){
        setAbout(data.data[0].content);
      }
    },[data]);
    
    if(error){
      <p>Failed to load....</p>;
    }
  
    if(!data && !about){
        return <p>Loading...</p>;
    }

    return (
        <>
          <AboutTitle
            title={about.title}
          />
          <AboutContent>
            <div
              dangerouslySetInnerHTML={{__html: about.page_content}}
            />
          </AboutContent>
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json');
    const data = await response.json();
  
    return {
      props: {
          about: data.data[0].content
      }
    }
  }

export default AboutDetailPage;