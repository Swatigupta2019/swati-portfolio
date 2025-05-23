const NavBar = () => {
    return (
      <nav className="p-[20px] flex  items-center max-w-[800px] m-auto border-b-2 border-white o">
        <h1 className="text-white font-bold text-2xl">Swati Gupta</h1>
        <div className="  ml-auto z-10"> 
          <div className="ml-16 no-underline space-x-3 text-red-600">
            <a href="/documents/Document.pdf" target="_blank"   >Resume</a>
           
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  