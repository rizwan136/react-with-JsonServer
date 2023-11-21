const Navbar = () => {
  return (
    <>
      <nav className="bg-black sticky top-0 z-50">
        <div className=" flex items-center justify-between  p-4">
          <div>
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 "
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshphA_D-ovYAqCj6soZO0KfnzzcOaO6nsoeMZYMG-qpU13yva-ff-BeFCNi1V8xFu9Lw&usqp=CAU"
                className="h-10 w-16 ml-2"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold  text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div>
            <h2 className="text-white">Profile</h2>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
