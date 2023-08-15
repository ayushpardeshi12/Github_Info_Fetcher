import React, { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Error In Fetching The Data", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    const gitCard = document.querySelector(".git-card");
    // const userCard = document.querySelector(".user-card");
    gitCard.style.display = "none";
  };

  // const handleDisplay = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="git-card bg-red-700 rounded-lg w-96 my-36 py-10 mx-auto flex flex-col text-center"
      >
        <h1 className="text-4xl text-white font-medium">Github UserName</h1>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter Github Username"
          className="w-60 mx-auto my-3 px-2 py-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-amber-500 w-32 mx-auto py-2 text-lg rounded-md font-semibold"
          //onClick={handleDisplay}
        >
          Submit
        </button>
      </form>

      {userData && (
        <div className="user-card bg-slate-100 rounded-lg w-96 p-10 mx-auto my-12">
          <h2 className="text-3xl text-center my-3">{userData.name}</h2>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s `}
            className="w-[150px] h-36 mx-auto px-1 py-1 border-2 border-blue-700 rounded-[1000px]"
          />
          <h1 className="text-2xl text-center text-yellow-500 font-medium">
            {userData.login}
          </h1>
          <p className="text-center my-3 text-lg">
            Public Repos :{" "}
            <span className="font-bold">{userData.public_repos}</span>
          </p>
          <p className="text-center my-3 text-lg">
            Public Gists :{" "}
            <span className="font-bold">{userData.public_gists}</span>
          </p>
          <p className="text-center my-3 text-lg">
            Followers : <span className="font-bold">{userData.followers}</span>
          </p>
          <p className="text-center my-3 text-lg">
            Created At :{" "}
            <span className="font-bold">{userData.created_at}</span>
          </p>
        </div>
      )}
    </div>
  );
}
export default App;
