import { useGameHook } from "./context/Game";

function Header() {
  const { score } = useGameHook();
  return (
    <div className="w-[311px] h-[96px] md:w-[700px] md:h-[150px] border rounded-md md:rounded-2xl border-gray-400 flex items-center justify-between px-4 md:px-6  ">
      <img
        src="/logo.svg"
        className="w-[83px] h-[48px] md:w-[159px] md:h-[96px]"
      />
      <div className="md:w-[150px] md:h-[114px] w-[80px] h-[72px] bg-linear-to-r from-[#F3F3F3] to-[#FFFFFF] rounded-lg flex flex-col items-center justify-center">
        <h3 className="text-[#2A45C2] font-semibold text-[10px] md:text-[16px] md:tracking-[2.5px] tracking-[1.56px] ">
          SCORE
        </h3>
        <h4 className="font-bold  text-[40px] md:text-[64px] md:leading-[64px] leading-[40px] text-[#565468]">
          {score}
        </h4>
      </div>
    </div>
  );
}

export default Header;
