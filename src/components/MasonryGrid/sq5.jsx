const Sq5 = () => {
  return (
    <div id="sq5" className="m-2 flex md:flex-row flex-col">
      <div id="left-side" className="bg- flex justify-center items-center">
        <p className="pr-1 pl-1 pb-2">
          A custom website that fits your business, personality, goals... and
          you alone.
        </p>
      </div>
      <div
        id="right-side"
        className="mr-5 flex md:justify-start justify-center items-center font-light"
      >
        <img
          src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="sq-styles  rounded-lg mt- mb-5"
        />
      </div>
    </div>
  );
};

export default Sq5;
