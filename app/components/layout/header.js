const Header = () => {
  return (
    <div className="w-full font-montserrat text-[#3182BC] text-sm font-medium py-2 px-4 hidden sm:block">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        {/* Left side */}
        <p className="whitespace-nowrap">
          Excellence and innovation built into every design
        </p>

        {/* Right side */}
        <p className="whitespace-nowrap">
          Free Initial Consultation | DA Preperation & Lodgement
        </p>
      </div>
    </div>
  );
};

export default Header;
