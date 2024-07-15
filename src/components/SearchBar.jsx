import { useState, useRef, useEffect } from 'react';


const SearchBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);



  return (
    <div className="relative">
      <div className="flex items-center p-2 bg-darklightFilledColor shadow-md">
        <button onClick={handleMenuToggle} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search.."
          className="ml-2 flex-1 outline-none text-white bg-darkmessageBackgroundColor p-2 rounded-full text-center "
        />
      </div>
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-12 left-0 w-48 bg-darkmessageBackgroundColor text-white rounded-lg shadow-lg"
        >
          <ul className="flex flex-col p-4">
            <li className="py-1"><button>Saved Messages</button></li>
            <li className="py-1"><button>My Stories</button></li>
            <li className="py-1"><button>Contacts</button></li>
            <li className="py-1"><button>Settings</button></li>
            <li className="py-1"><button>Dark Mode</button></li>
            <li className="py-1"><button>Animations</button></li>
            <li className="py-1"><button>Telegram Features</button></li>
            <li className="py-1"><button>Report Bug</button></li>
            <li className="py-1"><button>Switch to A version</button></li>
            <li className="py-1"><button>Install App</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
