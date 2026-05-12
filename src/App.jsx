import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col gap-1 bg-gray-950 md:flex-row justify-center items-center min-h-screen py-10 ">
      <nav className="flex md:flex-col gap-1">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark:bg-slate-800 bg-slate-200 cursor-pointer p-2 flex md:flex-col md:py-4 items-center justify-center  rounded-lg"
        >
          <ion-icon
            name={darkMode ? `sunny-outline` : `moon-outline`}
            className="text-2xl hover:text-sky-500 text-gray-800 dark:text-gray-300"
          ></ion-icon>
        </button>
        <div className="dark:bg-slate-800 bg-slate-200  md:flex-col md:py-4 text-[10px] text-gray-800 dark:text-gray-300 flex gap-4 items-center justify-center p-2 rounded-lg">
          <div
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col hover:text-sky-500 items-center justify-center cursor-pointer"
          >
            <ion-icon
              className="text-xl"
              name="person-circle-outline"
            ></ion-icon>
            <p>ABOUT</p>
          </div>
          <div
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col hover:text-sky-500 items-center justify-center cursor-pointer"
          >
            <ion-icon className="text-xl" name="albums-outline"></ion-icon>
            <p>PROJECTS</p>
          </div>
          <div
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col hover:text-sky-500 items-center justify-center cursor-pointer"
          >
            <ion-icon className="text-xl" name="chatbox-outline"></ion-icon>
            <p>CONTACT</p>
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-1 lg:flex-row">
        <section className="dark:bg-slate-800 bg-slate-200 max-w-xs dark:text-gray-50 text-gray-800 rounded-xl">
          <div className="max-w-xs p-1 ">
            <img className="rounded-xl" src="/Code by code.png" alt="" />
          </div>
          <div className="max-w-28 -mt-14 z-10 mx-auto border border-gray-950 rounded-lg">
            <img className="rounded-lg" src="/profile-1.jpg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center mt-2">
            <h1 className="tracking-wide font-medium dark:text-gray-300 text-gray-800 text-xl">
              SIBI LR
            </h1>
            <p className="text-sm mb-4 dark:text-sky-500 text-sky-800">
              Full-Stack Web Developer
            </p>
            <div className="flex gap-1 mb-4">
              <div className="dark:bg-gray-900 bg-gray-300 cursor-pointer p-1 pb-0 text-lg rounded-md">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div className="dark:bg-gray-900 bg-gray-300 cursor-pointer p-1 pb-0 text-lg rounded-md">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center px-5 mb-2 border-2 border-x-0 border-b-0 border-t-gray-700">
            <div className="flex cursor-pointer pt-2 gap-1">
              <p className="text-sm">My Resume</p>
              <div>
                <ion-icon name="document-outline"></ion-icon>
              </div>
            </div>
            <div className="flex gap-1 cursor-pointer">
              <p className="text-sm">Contact Me</p>
              <div>
                <ion-icon name="call-outline"></ion-icon>
              </div>
            </div>
          </div>
        </section>
        <div className="dark:bg-gray-800 bg-gray-200 max-w-xs h-110  lg:max-w-md dark:text-gray-50 text-gray-800 p-3 rounded-lg">
          <div className="scrollbar h-full overflow-y-auto p-2 ">
            <section id="about">
              <h1 className="mb-2">
                Hey
                <span className="ml-1 dark:text-sky-400 text-sky-700">
                  there 👋
                </span>
              </h1>
              <div className="border border-gray-700 mb-3"></div>
              <p className="text-xs mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur sed a perferendis placeat quia magnam possimus culpa
                maiores, provident debitis eaque consequatur officia corrupti
                eveniet ipsa velit.
              </p>
              <h2 className="mb-1">
                My
                <span className="ml-1 dark:text-sky-400 text-sky-700">
                  Skills
                </span>
              </h2>
              <div className="border border-gray-700 mb-3"></div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-[12px] mb-5 ">
                <div className="flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 p-3 rounded-lg">
                  <ion-icon className="text-lg" name="logo-html5"></ion-icon>
                  <p>HTML5</p>
                </div>
                <div className="flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 p-3 rounded-lg">
                  <ion-icon className="text-lg" name="logo-css3"></ion-icon>
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 p-3 rounded-lg">
                  <ion-icon
                    className="text-lg"
                    name="logo-javascript"
                  ></ion-icon>
                  <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 p-3 rounded-lg">
                  <ion-icon className="text-lg" name="logo-react"></ion-icon>
                  <p>React</p>
                </div>
                <div className="flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-300 p-3 rounded-lg">
                  <ion-icon className="text-lg" name="logo-nodejs"></ion-icon>
                  <p>Node.js</p>
                </div>
              </div>
            </section>
            <section id="projects">
              <h2 className="mb-1">
                My
                <span className="ml-1 dark:text-sky-400 text-sky-700">
                  Projects
                </span>
              </h2>
              <div className="border border-gray-700 mb-3"></div>
              <div>
                <div className="mb-4">
                  <h3 className="mb-2 font-medium tracking-wide text-sm">
                    Project 1
                  </h3>
                  <img src="/coming soon.webp" alt="" />
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 font-medium tracking-wide text-sm">
                    Project 2
                  </h3>
                  <img src="/coming soon.webp" alt="" />
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 font-medium tracking-wide text-sm">
                    Project 3
                  </h3>
                  <img src="/coming soon.webp" alt="" />
                </div>
                <div className="mb-4">
                  <h3 className="mb-2 font-medium tracking-wide text-sm">
                    Project 4
                  </h3>
                  <img src="/coming soon.webp" alt="" />
                </div>
              </div>
            </section>
            <section id="contact">
              <h2 className="mb-1">
                Contact
                <span className="ml-1 dark:text-sky-400 text-sky-700">Me</span>
              </h2>
              <div className="border border-gray-700 mb-3"></div>
              <ContactForm />
            </section>
          </div>
        </div>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}

export default App;
