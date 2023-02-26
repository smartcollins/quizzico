
import screenImg from "../images/screen.png";
import logo from "../images/quizzo-logo.png";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-3 relative max-md:grid-cols-1 min-h-full">
      <section className="h-full col-span-2 w-full ">
        <div className="px-10 w-36 py-4 max-md:px-2 max-md:flex max-md:w-full max-md:items-center max-md:justify-between">
          <div className="max-md:w-2/4"><img src={logo} alt="logo" className="block h-18 max-sm:w-1/3" /></div>
          <h1 className="text-center text-2xl tracking-wider font-bold -mt-3">
            Quizzo
          </h1>
        </div>  
        <div> {children}</div>
      </section>

      <div className="max-md:hidden bg-purple py-4 w-full flex justify-around relative before:content-[''] lg:before:block md:before:hidden  before:absolute before:inset-y-0 before:w-full before:left-0  before:bg-purple parallelogram">
        <img src={screenImg} alt="" className="z-10" />
      </div>
    </div>
  );
};

export default Layout;
