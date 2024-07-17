import React, { createContext, useContext, useState } from "react";

interface LinkProps {
  n: string; //Name
  i: string; // image
  a: string; //About
  bg: string; //Background
  fb: string; //facebook
  ig: string; //instagram
  tg: string; //telegram
  em: string; //email
  tw: string; //twitter
  lk: string; //linkedin
  yt: string; //youtube
  gt: string; //github
  wh: string; //whatsup
  ls: AdditionalLinkProps[]; // Additional Forms
}
const initialData: LinkProps = {
  n: "", //Name
  i: "", // image
  a: "", //About
  bg: "", //Background
  fb: "", //facebook
  ig: "", //instagram
  tg: "", //telegram
  em: "", //email
  tw: "", //twitter
  lk: "", //linkedin
  yt: "", //youtube
  gt: "", //github
  wh: "", //whatsup
  ls: [], //Additional Forms
};
interface DataContextType {
  // Todo: fix type props
  data: string;
  MyLink: LinkProps;
  addNewData: (linkData: AdditionalLinkProps) => void;
  setData: (val: string) => void;
  updateProfileInfo: (name: any, value: any) => void;
  selectBackground: (bgcode: string) => void;
  updateIndex: (updatedIndex: AdditionalLinkProps[]) => void;
  updateAdditionalInfo: (updatedIndex: any) => void;
  showDemo: () => void;
}

const demoData: LinkProps = {
  n: "Murtaxa Baig",
  i: "https://firebasestorage.googleapis.com/v0/b/learntodo-3d6fe.appspot.com/o/unnamed.jpg?alt=media&token=2c59141c-0bcc-4c77-a1b8-ab1873082055",
  a: "I'm a Full Stack Web Developer, specializing in creating user-friendly interfaces for websites and apps.I have proficiency in web scraping using Selenium.",
  fb: "http://www.facebook.com/murtaxa.baig.1/",
  tw: "https://x.com/MurtaxaBaig",
  ig: "https://www.instagram.com/murtaxabaig_",
  tg: "",
  gt: "https://github.com/Murtaxa-Baig",
  lk: "https://www.linkedin.com/in/murtaxa-baig/",
  em: "darvaish49@gmail.com",
  wh: "+923411840327",
  yt: "",
  bg: "#4F4F4F",
  ls: [
    {
      id: 1,
      i: "ph:laptop-duotone",
      l: "My Portfolio Website",
      u: "https://portfolio-murtaxa-baigs-projects.vercel.app",
    },
    // {
    //   id: 2,
    //   i: "ant-design:robot-outlined",
    //   l: "My Chatbot Project",
    //   u: "https://example.com/chatbot",
    // },
    // {
    //   id: 3,
    //   i: "fluent:brain-circuit-20-regular",
    //   l: "My Machine Learning Project",
    //   u: "https://example.com/ml",
    // },
    // {
    //   id: 4,
    //   i: "icon-park-outline:blockchain",
    //   l: "My Blockchain Project",
    //   u: "https://example.com/blockchain",
    // },
    // {
    //   id: 5,
    //   i: "ph:pencil-duotone",
    //   l: "My Blog Posts",
    //   u: "https://taquideveloper.hashnode.dev/",
    // },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<string>("");
  const [MyLink, setMyLink] = useState<LinkProps>(initialData);

  // UPDATE PERSONAL INFORMATION
  const updateProfileInfo = (name: any, value: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // SELECT BACKGROUND FUNCTION
  const selectBackground = (bgcode: string) => {
    setMyLink((prevState) => ({
      ...prevState,
      bg: bgcode,
    }));
  };
  // ADDITIONAL INFO FUNCTIONS
  const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const updateAdditionalInfo = (updatedIndex: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const addNewData = (linkData: AdditionalLinkProps) => {
    setMyLink((prevData) => ({
      ...prevData,
      ls: [...prevData.ls, linkData],
    }));
  };
  // SHOW DEMO FUNCTION
  const showDemo = () => {
  
    setMyLink(demoData);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        addNewData,
        setData,
        showDemo,
        MyLink,
        updateProfileInfo,
        updateIndex,
        selectBackground,
        updateAdditionalInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
