function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Idk man</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">India Animation List</a>
      </div>
      <div className="navbar-end">
        
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img
            alt="Tailwind CSS Navbar component"
            src="https://i.postimg.cc/zGR5wMBg/img-2025-05-18-20-24-59.png" />            
          </div>
        </button>
      </div>
    </div>
  )
}
export default Navbar