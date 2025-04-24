"use client";
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Banner from "@components/Banner"
import RecommendationTab from "@components/RecommendationTab"

const RecommendationPage = () => {
  return (
    <section>
      {/* Nav Section */}
      <Nav />

      <div className="my-16"></div>
      
      {/* RecommendationTab Section */}
      <RecommendationTab/>
        
      {/* Footer Section */}
      <Footer />

    </section>
  )
}

export default RecommendationPage