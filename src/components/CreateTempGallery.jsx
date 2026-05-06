
const articles = [
  {
    date: "Mar 11, 2026",
    title: "modern abstract",
    tags: ["CSS FUNCTIONS", "HTML ELEMENTS"],
    author: "Patrick Brosset",
    avatar: "/images/avatar-1.jpg",
    image:
      "https://images.pexels.com/photos/8243106/pexels-photo-8243106.jpeg?_gl=1*6e8xv4*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3Nzc1OTYwNDYkbzU2JGcxJHQxNzc3NTk2MDY5JGozNyRsMCRoMA..",
  },
  {
    date: "Mar 23, 2026",
    title: "desert colors",
    tags: ["ANIMATION", "CORNER-SHAPE", "SCROLL-DRIVEN ANIMATION"],
    author: "Daniel Schwarz",
    avatar: "/images/avatar-2.jpg",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/fkawi4ar8m2vn76xvxpax/jake19.jpg?rlkey=41v56r0fjcx40xqaty3uh7x6w&st=h1k2e3sf&dl=0",
  },
  {
    date: "Mar 19, 2026",
    title: "terracotta theme",
    tags: ["DESTRUCTURING", "JAVASCRIPT"],
    author: "Mat Marquis",
    avatar: "/images/avatar-3.jpg",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/r2memu9vr71tw03oe57kz/IMG_0300.jpg?rlkey=k9upvwvx4vudmyv88f8srhxlu&st=qysqevq1&dl=0",
  },
  {
    date: "Feb 26, 2026",
    title: "mb weirdness",
    tags: ["NEWS", "SECURITY"],
    author: "Lee Meyer",
    avatar: "/images/avatar-4.jpg",
    image:
      "https://images.pexels.com/photos/5251883/pexels-photo-5251883.jpeg?_gl=1*1avmgfo*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3Nzc1NzUwMjAkbzU0JGcxJHQxNzc3NTc1MDM2JGo0NCRsMCRoMA..",
  },
];
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
const featureImage = "/images/popular-bg.jpg";

const CreateTempGallery = () => {
  return (
   <section
  id="creative-templates"
  class="bg-websiteFocus px-6 py-10 text-complimentryTextColor border-y-4 border-black"
>
  <div
    class="flex 2xl:flex-row flex-col xl:gap-4 gap-y-2  overflow-x-auto pb-10 "     
  >
    {/* <!-- Featured black/image card --> */}
    <article
      class="relative flex min-h-[360px] min-w-[260px] overflow-hidden rounded-xl p-1"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-600 to-cyan-400"
      >
      </div>

      <div
        class="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-lg p-7"
      >
        <img
          src={featureImage}
          alt=""
          class="absolute inset-0 h-full w-full object-cover"   
        />

        <div class="absolute inset-0 bg-black/75"></div>

        <div class="relative z-10">
          <h2 class="mb-8 text-4xl font-extrabold leading-tight">
            endless<br />design<br />possibilities!
          </h2>

          <p class="font-serif text-lg">powered by</p>

          <div id="made-with"  class="mt-2 pt-1 text-2xl font-serif  text-cyan-400 flex">
          <SiAstro /> <RiReactjsFill />  <RiTailwindCssFill />
          </div>
        </div>
      </div>
    </article>

    {/* <!-- Article cards --> */}
    {
      articles.map((article) => (
        <a href="/">
          <article
            id="sq"
            class="border-2 border-r-4 border-black opacity-70 hover:opacity-100 relative  overflow-hidden rounded-2xl shadow-2xl transition duration-300 hover:-translate-x-2"
          >
            <img
              src={article.image}
              alt=""
              class="absolute inset-0 h-full w-full object-cover"
            />

            <div class="absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-black/90" />

            <div class="relative z-10 flex min-h-[300px] flex-col 2xl:p-7 p-1">
              <p class="mb-2 font-serif text-lg font-bold">
                Article
                <span class="font-normal text-zinc-400">
                  {" "}
                  on {article.date}
                </span>
              </p>

              <h3 class="block mb-5 2xl:text-2xl text-xl font-extrabold leading-tight">
                {article.title}
              </h3>

              <div class="mb-8 flex flex-wrap gap-x-5 gap-y-2">
                {article.tags.map((tag) => (
                  <a
                    href="#"
                    class="text-xs font-black uppercase text-orange-400"
                  >
                    {tag}
                  </a>
                ))}
              </div>

              <div class="mt-auto flex items-center gap-3">
                <img
                  src={article.avatar}
                  alt=""
                  class="h-10 w-10 rounded-full border border-white/30 object-cover"
                />

                {/* <p class="font-serif text-lg font-bold">{article.autho  r}</p> */}
              </div>
            </div>
          </article>
        </a>
      ))
    }
  </div>
</section>

  )
}

export default CreateTempGallery
