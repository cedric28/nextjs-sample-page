import classes from '../../styles/about/about-content.module.css';

const AboutContent = (props) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default AboutContent;
