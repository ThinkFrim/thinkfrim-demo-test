import "./footer.css";

const Footer = () => {
  return (
    <footer className="bottom-0 pt-10 w-full chineseBlackBg" id="footer">
      {/* desktop & tablet only */}
      <div className="relative">
        <img className="hidden xl:block  xl:absolute xl:bottom-0 w-full z-10" src="/media/illustrator/LeftWave.svg" alt="LeftWave.svg" />
        <div className="hidden xl:block  xl:absolute xl:bottom-[12rem] xl:left-[10%] xl:text-3xl xl:leading-[55px] BlueGreen z-10">
          <a href="tel:+96171455206">+961 71455206</a>
          {/* for icon */}
          <div className="flex items-center gap-5">
            <h1>Beirut, Lebanon</h1>
            <img className="w-[5%]" src="/media/icon/Location.svg" alt="" />
          </div>
          <a href="mailto:thinkfrim@gmail.com">thinkfrim@gmail.com</a>
        </div>
        <img className="hidden xl:block xl:absolute xl:right-0 xl:bottom-0" src="/media/illustrator/right.svg" alt="RightWave.svg" />
        <img className="hidden xl:block xl:absolute xl:bottom-[0rem] xl:right-[11%] z-0 " src="/media/illustrator/Iphone.svg" alt="" />
        <div className="xl:absolute xl:bottom-0 xl:z-40 xl:flex xl:justify-start xl:px-[11rem] xl:py-2 xl:gap-[3rem] border-t-[1px] w-full BlueGreen flex justify-around text-base py-2">
          <h1>&copy;2023 ThinkFrim</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms & Condition</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{/* <div className="relative">
  <img className="absolute bottom-0 left-0 w-full z-20 max-sm:hidden" src="/media/illustrator/LeftWave.svg" alt="LeftWave.svg" />
  <div className="absolute bottom-[12rem] left-[10%] max-sm:hidden BlueGreen text-2xl leading-[5rem] z-30">
    <a href="tel:+96171455206">+961 71455206</a>
    <h1>Beirut, Lebanon</h1>
    <a href="mailto:thinkfrim@gmail.com">thinkfrim@gmail.com</a>
  </div>
  <img className="absolute bottom-0 right-0 max-sm:hidden" src="/media/illustrator/right.svg" alt="RightWave.svg" />
  <img className="absolute bottom-full right-[11%] z-0 max-sm:hidden" src="/media/illustrator/Iphone.svg" alt="" />
  <div className="absolute bottom-0 z-40 border-t-[1px] w-full border-White flex px-[10%] gap-[3rem] font-semibold py-[10px] BlueGreen max-sm:text-[15px] max-sm:w-full">
    <h1>&copy; 2023 ThinkFrim</h1>
    <h1>Privacy Policy</h1>
    <h1>Terms & Condition</h1>
  </div>
</div> */}