"use client";
import { useEffect, useState } from "react";
import UserTable from "../Components/Tables/UserTable";
export default function MembersPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // using two sets of user states here, so we can retain the original data set when reverting the filter
  // and also to avoid having to re-fetch the data when filtering is removed or changed
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // upon page load: Fetch users from the API and handle loading and error states
  // this uses the Fetch API to get the data from the API route created in the app/api directory
  // i chose to do it this way to keep the API call separate from the component logic
  // and to keep the code clean and organized. I also used async/await to handle the asynchronous nature of the API call
  // and to make the code more readable. I also used try/catch to handle any errors that may occur during the API call

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/getUsers");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        console.log(JSON.stringify(data[0]));
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h3 className="text-xl font-semibold text-gray-700">Loading...</h3>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Member Directory
      </h2>
      <input
        type="text"
        placeholder="Search listed members..."
        className="w-full p-2 mt-2 mb-2 border border-gray-300 rounded"
        onChange={(e) => {
          /* Filter users based on the search input if the first and last name concatenated and lowercased contains the search paremeter*/
          const searchValue = e.target.value.toLowerCase();
          setFilteredUsers(
            users.filter((user) => {
              const userName = `${user.name.first}${user.name.last}`;
              return userName.toLowerCase().includes(searchValue);
            })
          );
        }}
      />
      <div className="overflow-x-auto">
        <UserTable users={filteredUsers} />
      </div>
    </div>
  );
}
