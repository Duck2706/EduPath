"use client";
import { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

const Nav = () => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  return (
    <Navbar className="bg-[#3d84a8] text-white px-6 py-3 shadow-md flex items-center">
      <NavbarBrand className="flex items-center gap-3">
        <Link href="/" className="flex items-center">
          <Image src="/assets/images/EduPath.jpg" alt="EduPath" width={80} height={60} className="rounded-full"/>
          <span className="font-bold text-lg tracking-wide">
            <span className="text-white">Edu</span>
            <span className="text-blue-200">Path</span>
          </span>
        </Link>
      </NavbarBrand>

      <NavbarContent className="flex gap-8 justify-center ml-auto">
        <NavbarItem>
          <Link 
            href="/" 
            className={`text-lg ${activeItem === '/' ? 'font-bold' : 'font-normal'} text-white hover:text-blue-200`}
            onClick={() => setActiveItem('/')}
          >
            Trang chủ
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link 
            href="/Recommendation" 
            className={`text-lg ${activeItem === '/Recommendation' ? 'font-bold' : 'font-normal'} text-white hover:text-blue-200`}
            onClick={() => setActiveItem('/Recommendation')}
          >
            Gợi ý học tập
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link 
            href="/AIChat" 
            className={`text-lg ${activeItem === '/AIChat' ? 'font-bold' : 'font-normal'} text-white hover:text-blue-200`}
            onClick={() => setActiveItem('/AIChat')}
          >
            Gợi ý từ AI
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;