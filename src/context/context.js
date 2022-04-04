/** @format */

import React, { useState, useEffect } from "react";
import mockRepos from "./MockData/mockRepos";
import axios from "axios";

const urlRepos = " https://api.github.com/users/defunkt/repos";

const ReposContext = React.createContext();

//Provider - Consumer - ReposContext.provider
const ReposProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [repos, setRepos] = useState([]);

  const fetchAllRepos = async (res) => {
    setIsLoading(true);
    axios
      .get(urlRepos)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllRepos();
  }, []);
  return (
    <ReposContext.Provider value={{ isLoading, repos }}>
      {children}
    </ReposContext.Provider>
  );
};

export { ReposProvider, ReposContext };
