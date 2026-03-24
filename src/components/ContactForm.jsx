import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const items = [
  {
    btn: "web design",
  },
  {
    btn: "seo",
  },
  {
    btn: " wordpress",
  },
  {
    btn: "react",
  },
  {
    btn: "content",
  },
  {
    btn: "not picky really...",
  },
];

const ContactForm = () => {
  return (
    <div className=" mt-5 pt-5">
      <div className="ml-3">
        <h2 className="text-parchment font-semibold text-2xl pl-3 pb-3">
          Fill Out Form
        </h2>
      </div>
      <div className="text-teal bg-papaya   border-2 border-onyx rounded-tl-2xl rounded-bl-2xl 2xl:pl-5 py-5 2xl:ml-5 md:ml-[50px] ml-2 lg:pl-2 pl-5">
        <div id="contact" className="mt-1 pt-3 lg:p-5">
          <form
            id="IP-login-form"
            className="pt-5 bg-test flex flex-col gap-y-4"
          >
            <input
              placeholder="enter email"
              className="rounded-lg border border-black bg-teal md:w-2/3 w-1/2 h-10 pl-2 hover:border-orange mb-2"
            />
            <input
              placeholder="enter password"
              className="rounded-lg border border-black bg-teal md:w-2/3 w-1/2 h-10 pl-2 hover:border-test2"
            />
            <div id="btns-wrapper " className="">
              <h3 className="py-3 text-xl">I'm looking for...</h3>

              <div
                id="btns-container"
                className="bg- text-sm md:w-2/3 pt-1 mt-5 pr-4 grid 2xl:grid-cols-3 grid-cols-2 gap-6"
              >
                {items.map((item) => (
                  <button
                    id={item.btn}
                    className="sq-styles opacity-80 hover:opacity-100 hover:bg-test2 text-center"
                  >
                    {item.btn}
                  </button>
                ))}
              </div>
            </div>
            <div id="wrapper" className="mt-[50px] bg- 2xl:flex items-center">
              <p className="">How would you describe your project?</p>
              <div className="">
                <textarea
                  placeholder="ex: what are your business goals?"
                  className="pt-5 pl-2 md:w-[500px] w-[350px] border border-black rounded-lg bg-teal 2xl:ml-5 2xl:mt-1 mt-4"
                />
              </div>
            </div>
            <div id="btn-wrapper" className="">
              <button className="rounded bg-onyx text-parchment px-3 py-1 border border-carribean opacity-80 hover:opacity-100">
                send
              </button>
            </div>
          </form>

          <div
            id="all-contact-info"
            className="mt-5  text-teal font-semibold  text-2xl "
          >
            <div id="email" className="pb-2">
              elsahvy@gmail.com
            </div>
            <div id="sm-container">
              <div id="sm-links" className="flex gap-x-4 pt-1 opacity-80">
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
