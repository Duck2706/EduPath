import examGroupsData from "../data/examGroupsData";

const HomepageTab = () => {
 const groups = examGroupsData;

 return (
   <section>
     <div className="bg-gray-100 py-16 px-6 mb-12">
       <div className="max-w-7xl mx-auto text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới thiệu về chúng tôi</h2>
         <p className="text-gray-600 text-lg mb-6">
           EduPath là nền tảng định hướng học tập và nghề nghiệp, mang đến sự hỗ trợ cá nhân hóa 
           và thông tin chính xác, giúp bạn tự tin chọn đúng ngành, học đúng hướng và tỏa sáng với sở trường của mình.
         </p>
       </div>
     </div>

     <div className="container mx-auto p-6">
       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Giới thiệu các khối ngành học</h2>
       <div className="overflow-x-auto shadow-lg rounded-lg">
         <table className="min-w-full bg-white">
           <thead>
             <tr className="bg-gray-100">
               <th className="py-3 px-4 text-left">ID</th>
               <th className="py-3 px-4 text-left">Tên Nhóm</th>
               <th className="py-3 px-4 text-left">Môn Học</th>
               <th className="py-3 px-4 text-left">Trường</th>
               <th className="py-3 px-4 text-left">Chuyên Ngành</th>
               <th className="py-3 px-4 text-left">Hành Động</th>
             </tr>
           </thead>
           <tbody>
             {groups.map((group, index) => (
               <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                 <td className="py-3 px-4 text-gray-800">{group.id}</td>
                 <td className="py-3 px-4 text-gray-800 font-medium">{group.group}</td>
                 <td className="py-3 px-4 text-gray-600">{group.subjects}</td>
                 <td className="py-3 px-4 text-gray-600">{group.schools}</td>
                 <td className="py-3 px-4 text-gray-600">{group.majors}</td>
                 <td className="py-3 px-4">
                   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                     Xem chi tiết
                   </button>
                 </td>
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