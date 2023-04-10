import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { value } from "../assets/value";
import { collections, infoAry } from "../assets/data";
import { ROUTE_PATHS } from "../assets/data_two";
import { ArrowLeft, MagnifyingGlass } from "phosphor-react";
// import Collabo from "../components/library/Collabo"
import Header from "../components/library/Header";
import InfoMini from "../components/InfoMini";

const CollectionInfo = () => {
  const size = value.md;

  const [info, setInfo] = useState({});
  const { infoId } = useParams();

  // console.log(info)
  // console.log(infoId)

  // useEffect(() => {
  //     const item = collections.filter(item => item.id === parseInt(infoId, 10))
  //     setInfo(item[0])
  //   }, [infoId])

  // useEffect(setInfo(collections[Number(infoId)]),[infoId])

  useEffect(() => {
    const item = collections.find((item) => item.id === parseInt(infoId, 10));
    setInfo(item);
  }, [infoId]);

  const items = infoAry.map((item, idx) => <InfoMini key={idx} {...item} />);

  return (
    <div className="m-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={ROUTE_PATHS.COLLECTIONS}>
            <ArrowLeft size={size} color="#000000" />
          </Link>
          <p className=" text-lg font-medium">Top Collections</p>
        </div>
        <MagnifyingGlass size={size} color="#000000" weight="light" />
      </div>
      <div className=" w-full my-4 bg-red-500">
        <img className="w-full h-full object-cover " src={info.img} alt="" />
      </div>
      {/* <Collabo/> */}
      <div>
        <Header caption={"245 Quizzo"} iconText={"Default"} />
        <div className=" space-y-4">{items}</div>
      </div>
    </div>
  );
};

export default CollectionInfo;
