interface IconBadgeProps {
    icon: React.ReactNode;
    count: number;
  }
  

const IconBadge = ({ icon, count }: IconBadgeProps) => {
    return (
      <div className="relative">
        <span className="text-2xl">{icon}</span>
        {count > 0 && (
          <span className="absolute -top-1 left-4 bg-yellow-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
    );
  };

  export default IconBadge;