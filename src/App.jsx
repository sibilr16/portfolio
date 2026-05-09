function App() {
  return (
    <div className="flex flex-col gap-1 md:flex-row justify-center items-center min-h-screen ">
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
        <section className="bg-slate-800 text-gray-50">
          <img src="" alt="" />
          <h1>SIBI LR</h1>
          <p>Full-Stack Web Developer</p>
          <div>icons</div>
        </section>
        <section className="bg-violet-900">content</section>
      </div>
    </div>
  );
}

export default App;
