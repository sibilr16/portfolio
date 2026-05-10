function App() {
  return (
    <div className="flex flex-col gap-1 bg-gray-950 md:flex-row justify-center items-center min-h-screen ">
      <nav className="flex md:flex-col gap-1">
        <div className="bg-slate-800 p-2 flex md:flex-col md:py-4 items-center justify-center  rounded-lg">
          <ion-icon
            name="sunny-outline"
            className="text-2xl text-gray-300"
          ></ion-icon>
        </div>
        <div className="bg-slate-800 md:flex-col md:py-4 text-[10px] text-gray-300 flex gap-4 items-center justify-center p-2 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <ion-icon
              className="text-xl"
              name="person-circle-outline"
            ></ion-icon>
            <p>ABOUT</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ion-icon className="text-xl" name="albums-outline"></ion-icon>
            <p>PROJECTS</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ion-icon className="text-xl" name="chatbox-outline"></ion-icon>
            <p>CONTACT</p>
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-1 lg:flex-row">
        <section className="bg-slate-800 max-w-xs text-gray-50 rounded-xl">
          <div className="max-w-xs p-1 ">
            <img className="rounded-xl" src="/cover.jpg" alt="" />
          </div>
          <div className="max-w-28 -mt-14 z-10 mx-auto border border-gray-950 rounded-lg">
            <img className="rounded-lg" src="/profile-1.jpg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center mt-2">
            <h1 className="tracking-wide font-medium text-gray-300 text-xl">
              SIBI LR
            </h1>
            <p className="text-sm mb-4 text-gray-300">
              Full-Stack Web Developer
            </p>
            <div className="flex gap-1 mb-4">
              <div className="bg-gray-900 p-1 pb-0 text-lg rounded-md">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div className="bg-gray-900 p-1 pb-0 text-lg rounded-md">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center px-5 mb-2 border-2 border-x-0 border-b-0 border-t-gray-700">
            <div className="flex pt-2 gap-1">
              <p className="text-sm">My Resume</p>
              <div>
                <ion-icon name="document-outline"></ion-icon>
              </div>
            </div>
            <div className="flex gap-1">
              <p className="text-sm">Contact Me</p>
              <div>
                <ion-icon name="call-outline"></ion-icon>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 max-w-xs h-110 overflow-y-auto lg:max-w-md text-gray-50 p-3 rounded-lg">
          <h1 className="mb-2">Hey there 👋</h1>
          <div className="border border-gray-700 mb-3"></div>
          <p className="text-xs mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur sed a perferendis placeat quia magnam possimus culpa
            maiores, provident debitis eaque consequatur officia corrupti
            eveniet ipsa velit.
          </p>
          <h2 className="mb-1">My Skills</h2>
          <div className="border border-gray-700 mb-3"></div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-[12px] mb-5 ">
            <div className="flex flex-col items-center justify-center bg-gray-900 p-3 rounded-lg">
              <ion-icon className="text-lg" name="logo-html5"></ion-icon>
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-3 rounded-lg">
              <ion-icon className="text-lg" name="logo-css3"></ion-icon>
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-3 rounded-lg">
              <ion-icon className="text-lg" name="logo-javascript"></ion-icon>
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-3 rounded-lg">
              <ion-icon className="text-lg" name="logo-react"></ion-icon>
              <p>React</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-3 rounded-lg">
              <ion-icon className="text-lg" name="logo-nodejs"></ion-icon>
              <p>Node.js</p>
            </div>
          </div>
          <h2 className="mb-1">My Projects</h2>
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
          <h2 className="mb-1">Contact Me</h2>
          <div className="border border-gray-700 mb-3"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
