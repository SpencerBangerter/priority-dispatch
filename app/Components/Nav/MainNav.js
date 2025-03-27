import React from "react";
import Image from "next/image";
import Link from "next/link";
import pdLogo from "../../../public/pdlogo.png";
const MainNav = () => {
  return (

    //wildly simple nav bar with tailwind css, you could make this much more dynamic wth changing colors when navigating to pages, etc. 
    //I chose to keep it simple to expedite the process of getting the app up and running.
    //I also added a logo to the left side of the nav bar, which is a simple image of the priority dispatch logo. Cause why not?

    //I'm using the Link functionality built into next.js to navigate between pages, which is a great feature of the framework, rather
    //than using React Router. This allows for faster navigation between pages and better performance overall.
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-lg font-bold">
          <Image src={pdLogo} alt="" width={50} height={50} />
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/members-page" className="hover:text-gray-300">
              Members
            </Link>
          </li>
          <li>
            <Link href="/contact-page" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
