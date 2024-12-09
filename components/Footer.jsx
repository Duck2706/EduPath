import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="bg-[#3d84a8] text-white pt-4 mt-[100px]">
      <div className="flex justify-between max-w-7xl mx-auto flex-wrap">
        {/* Column 1 */}
        <div className="flex-1 p-2 min-w-[200px]">
          <h4 className="text-lg font-bold mb-2">Trang chủ</h4>
          <Link href="#" className="block mb-2 text-white hover:text-blue-200">
            Giới thiệu
          </Link>
        </div>

        {/* Column 2 */}
        <div className="flex-1 p-2 min-w-[250px]">
          <h4 className="text-lg font-bold mb-2">Hỗ trợ tư vấn lộ trình học tập</h4>
          <Link href="#" className="block mb-2 text-white hover:text-blue-200">
            Nhận gợi ý lộ trình học tập với AI
          </Link>
          <Link href="#" className="block mb-2 text-white hover:text-blue-200">
            Xem gợi ý lộ trình học tập
          </Link>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-[#3d84a8] text-center py-2 text-xs">
        <p>&copy; {new Date().getFullYear()} EduPath. Designed by Huu Duc.</p>
      </div>
    </footer>
  );
};

export default Footer;
