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
        <section className="bg-slate-800 text-gray-50 rounded-xl">
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
        <section className="bg-violet-900">content</section>
      </div>
    </div>
  );
}

export default App;
