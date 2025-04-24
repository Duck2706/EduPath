"use client";
import Nav from '@components/Nav';
import AIChat from "@components/AIChat"

const RecommendationPage = () => {
  return (
    <section>
      {/* Nav Section */}
      <Nav/>

      {/* RecommendationTab Section */}
      <AIChat/>

    </section>
  )
}

export default RecommendationPage