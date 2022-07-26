import classes from '../../styles/about/about-title.module.css';

const AboutTitle = (props) =>{
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default AboutTitle;