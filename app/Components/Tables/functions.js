//Function export file to clean up the table component


// Function to set the profile to local storage to prepare to navigate to the profile page
export const setProfileToLocalStorage = (user) => {
  //reset local storage
  localStorage.removeItem("profile");
  //only store the data we need
  const userDataToStore = {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    picture: user.picture.large,
    location: user.location,
    dob: user.dob,
    phone: user.phone,
  };
  localStorage.setItem("profile", JSON.stringify(userDataToStore));
};
