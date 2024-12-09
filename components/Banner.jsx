import { Image } from '@nextui-org/image';

const Banner = () => {
  return (
    <div className="flex w-screen h-fit flex-row justify-center gap-32 mt-16">
      <div className="flex items-center justify-center">
        <div className="bg-white py-8 px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Chọn đúng ngành, học đúng hướng</h1>
          <p className="text-gray-600 mb-6">
            EduPath - Khởi đầu hoàn hảo cho hành trình tri thức
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image 
          src="/assets/images/BannerEduPath.jpg" 
          alt="EduPath Background" 
          className="w-[800px] object-cover cursor-pointer" 
        />
      </div>
    </div>
  );
};

export default Banner;