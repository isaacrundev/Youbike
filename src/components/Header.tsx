import { useState } from "react";
import logo from "../assets/youbike_logo.png";
import hbgMenu from "../assets/menu_24px.png";
import { v4 } from "uuid";

const menu = ["使用說明", "收費方式", "站點資訊", "最新消息", "活動專區"];

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header className="relative">
      {toggle ? <MobileMenu handleClick={handleClick} /> : null}
      <nav className="flex justify-center">
        <div className="flex justify-between w-full px-6 md:gap-64 md:px-24">
          <div className="flex gap-10 w-65 h-65 md:w-95 md:h-95">
            <img alt="Youbike_logo" src={logo} width={95} height={95} />
            <div className="hidden gap-10 md:flex">
              {menu.map((i) => (
                <div className="flex items-center" key={v4()}>
                  <p
                    className={`${
                      i === "站點資訊" ? `text-[#B5CC22]` : `text-[#677510]`
                    }`}
                  >
                    {i}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="items-center hidden md:flex">
            <button className="bg-[#B5CC22] w-[85px] h-[40px] rounded-3xl text-white">
              登入
            </button>
          </div>
          <div onClick={handleClick} className="flex items-center md:hidden">
            <img src={hbgMenu} alt="menuIcon" width={24} height={24} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export const MobileMenu = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="absolute top-0 left-0 z-50 flex flex-col w-screen h-screen bg-white">
      <div className="flex justify-between w-full px-6 mx-auto">
        <div className="flex items-center w-65 h-65">
          <img alt="youbikeLogo" src={logo} width={95} height={95} />
        </div>
        <div className="flex items-center" onClick={handleClick}>
          <img alt="closeIcon" src={hbgMenu} width={24} height={24} />
        </div>
      </div>
      <div className="bg-[#B5CC22] h-full">
        {/* <div className="flex flex-col gap-8 pt-8 pl-5"> */}
        <div className="flex flex-col justify-between h-full py-8 pl-5">
          <div className="flex flex-col gap-8">
            {menu.map((i) => (
              <div className="flex items-center" key={v4()}>
                <p
                  className={`${
                    i === "站點資訊" ? `text-[#677510]` : `text-white`
                  }`}
                >
                  {i}
                </p>
              </div>
            ))}
            {/* </div> */}
          </div>
          <div className="items-center">
            <button className="bg-white w-[81px] h-[40px] rounded-[100px] text-[#B5CC22]">
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
