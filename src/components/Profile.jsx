import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <p>My Profile</p>
      <p>
        <img src={user.avatar} alt="user avatar" width="10%" />
      </p>
      <p>My TMDB Id: {user.id}</p>
      <p>
        My fullname: {user.name} {user.lastName}
      </p>
      <p>My username: {user.userName}</p>
      <p>My email: {user.email}</p>
      <p>
        My age:
        {user.age ? user.age + " years old" : " Unknown"}
      </p>
      <p>
        My movies preferences:
        {user.moviePreferences
          ? user.moviePreferences.map((moviePreference) => (
              <li>{moviePreference.name}</li>
            ))
          : " You haven't set your preferences yet"}
      </p>
      <p>
        My TV preferences:
        {user.tvPreferences
          ? user.tvPreferences.map((tvPreference) => (
              <li>{tvPreference.name}</li>
            ))
          : " You haven't set your preferences yet"}
      </p>
      <p>My Access: {user.role}</p>
      <p>EDIT</p>
    </div>
  );
};

export default Profile;
