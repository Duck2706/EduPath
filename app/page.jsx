import Banner from '@components/Banner';
import HomepageTab from '@components/HomepageTab';

const home = () => {
  return (
    <section>
      {/* Banner Section */}
        <Banner />

      <div className="my-16"></div>
      
      {/* HomepageTab Section */}
        <HomepageTab/>

    </section>
  );
};

export default home;
