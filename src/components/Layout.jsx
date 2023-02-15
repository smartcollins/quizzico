
import screenImg from "../images/screen.png";
import logo from "../images/quizzo-logo.png";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-3 relative max-sm:grid-cols-1 min-h-full">
      <section className="h-full col-span-2 w-full ">
        <div className="px-10 w-36 py-4">
          <img src={logo} alt="logo" className="block w-full" />
          <h1 className="text-center text-2xl tracking-wider font-bold -mt-3">
            Quizzo
          </h1>
        </div>
        <div> {children}</div>
      </section>

      <div className="bg-sbg py-4 w-full flex justify-around relative before:content-[''] before:absolute before:inset-y-0 before:w-full before:left-0  before:bg-sbg parallelogram">
        <img src={screenImg} alt="" className="z-10" />
      </div>
    </div>
  );
};

export default Layout;
