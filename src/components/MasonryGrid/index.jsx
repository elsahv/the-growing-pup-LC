import Sq1 from "./sq1";
import Sq2 from "./sq2";
import Sq3 from "./sq3";
import Sq4 from "./sq4";
import Sq5 from "./sq5";
import Sq6 from "./sq6";


// TODO:BUILD AUTHORITY SECTION

// ? CONTENT TO COME BACK TO V
// ## FIND UNIQUE COMBINATIONS of skills, experiences, and personality (use to set self apart and become top 10% in industry)**
// ? CONTENT TO COME BACK TO ^

const MasonryGrid = () => {
  return (
    <div
      id="wrapper"
      className="mt-1 2xl:opacity-80 opacity-100 px-[155px] pt-[155px]"
    >
      <div id="" className="- ">
        <div
          id="grid"
          className="bg- grid grid-cols-3 2xl:gap-2 2xl:px-[10x] px-0"
        >
          <Sq1 />
          <div id="flex" className="flex col-span-2  ">
            <Sq2 />
            <Sq3 />
          </div>
          <Sq4 />
          <div id="flex" className="flex md:space-x-4 col-span-3">
            <Sq5 />
            <Sq6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
