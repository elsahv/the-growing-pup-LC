function Dynamic(props) {
  return props.isLoggedIn ? (
    <div id="BannerTitle-section" className="bg-cerulean flex justify-start bg-">
      <h2 className="2xl:text-4xl md:text-3xl text-2xl md:px-5 px-1 pt-2 pl-2 font-bold ">
        {props.username}
      </h2>
    </div>
  ) : (
    // LEFT IMG --V
    <img
      src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?_gl=1*hgkjg0*_ga*MTA5MDE3dMzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3Nzc2Njg4ODckbzU3JGcxJHQxNzc3NjY4OTA5JGozOCRs"
      alt=""
      className="sq-styles"
    />
  );
}

export default Dynamic;
