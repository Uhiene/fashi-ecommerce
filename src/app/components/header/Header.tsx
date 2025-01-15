import { IoIosMail } from "react-icons/io";
import IconText from "../reuseableComponent/Icontext";
import {
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Dropdown from "../reuseableComponent/Dropdown";
import Image from "next/image";
import IconBadge from "../reuseableComponent/IconBadge";
import Navbar from "./Navbar";

const Header = () => {
  const dropdownItems = [
    {
      image: "/images/flag-1.jpg", // Image path from public folder
      text: "Profile",
    },
    {
      image: "/images/flag-2.jpg", // Image path from public folder
      text: "Settings",
    },
  ];

  return (
    <div>
      <div className="border border-gray-300">
        <div className="flex justify-end lg:justify-normal">
          <div className="border-r border-gray-300 p-3 px-6 w-1/4 hidden lg:flex justify-end ">
            <IconText
              icon={<IoIosMail />}
              text="hello.colorlib@gmail.com"
              iconSize="text-xl"
            />
          </div>
          <div className="border-r border-gray-300 p-3 flex-1 hidden lg:flex items-center justify-between">
            <IconText
              icon={<FaPhone />}
              text="+65 11.188.888"
              iconSize="text-md"
            />
            <div className="flex items-center gap-2 text-sm">
              <FaFacebookF />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaPinterestP />
            </div>
          </div>
          <div className="border-r border-gray-300 p-3 w-1/3 lg:w-1/6">
            <Dropdown label="User Menu" items={dropdownItems} />
          </div>
          <div className="border-r border-gray-300 p-3 w-1/3 lg:w-1/6">
            <IconText icon={<FaUser />} text="Login" iconSize="text-md" />
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-10 flex justify-center">
        <div className="lg:w-[86%] flex items-center justify-between">
          <Image
            src="/images/logo.png"
            alt="Header background"
            height={50}
            width={80}
          />

          <div className="hidden lg:flex gap-4">
            <IconBadge icon={<FaHeart />} count={5} />

            <IconBadge icon={<FaShoppingCart />} count={3} />
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Header;
