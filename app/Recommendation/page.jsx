"use client";
import Banner from "@components/Banner"
import RecommendationTab from "@components/RecommendationTab"

const RecommendationPage = () => {
  return (
    <section>
      {/* Banner Section */}
        <Banner />

      <div className="my-16"></div>
      
      {/* RecommendationTab Section */}
        <RecommendationTab/>

    </section>
  )
}

export default RecommendationPage