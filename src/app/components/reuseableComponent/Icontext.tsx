import React from "react";

interface IconTextProps {
  icon: React.ReactNode; 
  text: string;          
  className?: string;    
  iconSize?: string;     
}

export default function IconText({ icon, text, className, iconSize = "text-xl" }: IconTextProps) {
  return (
    <div className={`flex items-center space-x-2 text-gray-900 ${className || ""}`}>
      <span className={`${iconSize}`}>{icon}</span> {/* Apply dynamic icon size */}
      <span className="font-light text-sm">{text}</span>
    </div>
  );
}
