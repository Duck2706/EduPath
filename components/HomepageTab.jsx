import examGroupsData from "../data/examGroupsData";

const HomepageTab = () => {
 const groups = examGroupsData;

 return (
   <section>
    <div className="bg-gray-100 py-16 px-6 mb-12 flex justify-center">
      <div className="max-w-screen-xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Giới thiệu về chúng tôi
        </h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Chào mừng bạn đến với hệ thống tư vấn học tập thông minh! Đây là nền tảng hỗ trợ học sinh trung học phổ thông
          trong việc định hướng ngành học và lựa chọn trường đại học phù hợp. Hệ thống cung cấp hai phương pháp tư vấn chính:
          tư vấn từ hệ thống dựa trên sở thích, sở trường và điểm số của bạn, cùng với tư vấn từ AI, 
          nơi bạn có thể trò chuyện trực tiếp để nhận được lời khuyên cá nhân hóa. 
          Hãy khám phá ngay để tìm ra ngành học phù hợp với bản thân và định hướng tương lai một cách chính xác nhất!
        </p>
      </div>
    </div>




     <div className="container mx-auto p-6">
       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Giới thiệu các tổ hợp môn</h2>
       <div className="overflow-x-auto shadow-lg rounded-lg">
         <table className="min-w-full bg-white">
           <thead>
             <tr className="bg-gray-100">
               <th className="py-3 px-4 text-left">STT</th>
               <th className="py-3 px-4 text-left">Mã tổ hợp</th>
               <th className="py-3 px-4 text-left">Các môn học thuộc tổ hợp</th>
             </tr>
           </thead>
           <tbody>
             {groups.map((group, index) => (
               <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                 <td className="py-3 px-4 text-gray-800">{group.id}</td>
                 <td className="py-3 px-4 text-gray-800 font-medium">{group.group}</td>
                 <td className="py-3 px-4 text-gray-600">{group.subjects}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   </section>
 );
};

export default HomepageTab;