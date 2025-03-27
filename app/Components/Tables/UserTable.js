import React from "react";
import Image from "next/image";
import ProfileModal from "../Modals/ProfileModal";
import Link from "next/link";
import { setProfileToLocalStorage } from "./functions.js";

function UserTable({ users }) {
  // State to control the modal
  const [userModalOpen, setUserModalOpen] = React.useState(false);
  const [modalProfile, setModalProfile] = React.useState({});
  const handleOpen = (user) => {
    setModalProfile(user);
    setUserModalOpen(true);
  };



  return (
    //simple html table with some tailwind css
    <>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium"></th>
            <th className="px-4 py-3 text-left text-sm font-medium">
              First Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium">
              Last Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium">
              Age
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
            <th className="px-4 py-3 text-left text-sm font-medium">
              View in Modal
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium">
              View In New Page
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* Loop through the users and create a row for each user */}
          {users.map((user, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="pl-2">
                <Image
                  src={user.picture.thumbnail}
                  alt="thumbnail"
                  width={35}
                  height={35}
                />
              </td>
              <td className="p-4 text-sm text-gray-700">{user.name.first}</td>
              <td className="p-4 text-sm text-gray-700">{user.name.last}</td>
              <td className="p-4 text-sm text-gray-700">{user.dob.age}</td>
              <td className="p-4 text-sm text-gray-700">{user.email}</td>
              <td className="p-4 text-sm text-gray-700">
                <button
                  className="p-2 hover:bg-blue-600 bg-blue-500 text-white cursor-pointer rounded"
                  onClick={() => {
                    handleOpen(user);
                  }}
                >
                  View In Modal
                </button>
              </td>
              <td className="p-4 text-sm text-gray-700">
                <Link href={"/profile-page"}>
                  <button
                    className="p-2 hover:bg-blue-600 bg-blue-500 text-white cursor-pointer rounded"
                    onClick={() => {
                      setProfileToLocalStorage(user);
                    }}
                  >
                    View In New Page
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {userModalOpen && (
        <ProfileModal
          open={userModalOpen}
          closeHandler={() => setUserModalOpen(false)}
          profile={modalProfile}
        />
      )}
    </>
  );
}
export default UserTable;
