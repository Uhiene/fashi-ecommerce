import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

interface ContactInfoItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  header: string;
  text: string;
}

const ContactDetails: React.FC = () => {
  const contactData = [
    {
      id: 1,
      Icon: AiOutlineHome,
      header: "Buttonwood, California.",
      text: "Rosemead, CA 91770",
    },
    {
      id: 2,
      Icon: IoMdPhonePortrait,
      header: "+1 253 565 2365",
      text: "Mon to Fri 9am to 6pm",
    },
    {
      id: 3,
      Icon: MdMailOutline,
      header: "support@fashi.com",
      text: "Send us your query anytime!",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full md:w-2/5 space-y-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Contacts Us</h2>
        <p className="font-light text-gray-400">Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of classical Latin literature from 45 BC, maki years old.</p>
      </div>
      {contactData.map((item) => (
        <ContactInfoItem
          key={item.id}
          Icon={item.Icon}
          header={item.header}
          text={item.text}
        />
      ))}
    </div>
  );
};

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  Icon,
  header,
  text,
}) => {
  return (
    <div className="flex items-start gap-3 space-x-2 border w-full p-2 lg:p-4 rounded-md bg-white shadow-md">
      <Icon className="text-3xl text-gray-500" />
      <div>
        <h3 className="text-lg font-medium text-gray-600">{header}</h3>
        <p className="text-gray-500 text-sm font-light">{text}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
