import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

const ShowcaseContext = createContext();

const ShowcaseProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      setProjects(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };

    getPosts();
  }, []);

  return (
    <ShowcaseContext.Provider value={{ projects }}>
      {children}
    </ShowcaseContext.Provider>
  );
};

export { ShowcaseContext, ShowcaseProvider };
