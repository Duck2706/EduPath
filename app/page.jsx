import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import HomepageTab from '@components/HomepageTab';


const home = () => {
  return (
    <section>
      {/* Nav Section */}
      <Nav/>

      {/* Banner Section */}
      <Banner />

      <div className="my-16"></div>
      
      {/* HomepageTab Section */}
      <HomepageTab/>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default home;
