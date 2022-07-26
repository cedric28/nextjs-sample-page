import MainNavigation from '../navigation/index';

const Index = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Index;