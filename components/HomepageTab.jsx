
const HomepageTab = () => {
  return (
    <section>
      {/* About Us Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới thiệu về chúng tôi</h2>
          <p className="text-gray-600 text-lg mb-6">
            EduPath là nền tảng định hướng học tập và nghề nghiệp, mang đến sự hỗ trợ cá nhân hóa 
            và thông tin chính xác, giúp bạn tự tin chọn đúng ngành, học đúng hướng và tỏa sáng với sở trường của mình.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Tầm nhìn</h3>
            <p className="text-gray-600">
              Mang đến lộ trình học tập và sự nghiệp phù hợp nhất, giúp bạn phát huy tiềm năng và xây dựng tương lai vững chắc.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Sứ mệnh</h3>
            <p className="text-gray-600">
              Tư vấn thông minh, cá nhân hóa lộ trình học tập và nghề nghiệp, ứng dụng công nghệ AI tiên tiến.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Giá trị cốt lõi</h3>
            <p className="text-gray-600">
              Chính xác, đáng tin cậy, hỗ trợ toàn diện và đồng hành lâu dài cùng học sinh, sinh viên.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomepageTab