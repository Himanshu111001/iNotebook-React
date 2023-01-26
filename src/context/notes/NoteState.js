import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63d01u24ebb54c24d4f5522f",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Mera Title",
      description: "eat momos daily else regret",
      tag: "personal",
      date: "2023-01-24T18:06:28.177Z",
      __v: 0,
    },
    {
      _id: "63d01f206df360u33d73c7df",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Iphone khareedo",
      description: "2023 m kuch bi krke iphone lena h",
      tag: "personal",
      date: "2023-01-24T18:10:40.697Z",
      __v: 0,
    },
    {
      _id: "63d01e24ebu54c24d4f5522f",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Mera Title",
      description: "eat momos daily else regret",
      tag: "personal",
      date: "2023-01-24T18:06:28.177Z",
      __v: 0,
    },
    {
      _id: "63d01fu06df360133d73c7df",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Iphone khareedo",
      description: "2023 m kuch bi krke iphone lena h",
      tag: "personal",
      date: "2023-01-24T18:10:40.697Z",
      __v: 0,
    },
    {
      _id: "63d01e2uebb54c24d4f5522f",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Mera Title",
      description: "eat momos daily else regret",
      tag: "personal",
      date: "2023-01-24T18:06:28.177Z",
      __v: 0,
    },
    {
      _id: "63d01f206df360133u73c7df",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Iphone khareedo",
      description: "2023 m kuch bi krke iphone lena h",
      tag: "personal",
      date: "2023-01-24T18:10:40.697Z",
      __v: 0,
    },
    {
      _id: "63du1e24ebb54c24d4f5522f",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Mera Title",
      description: "eat momos daily else regret",
      tag: "personal",
      date: "2023-01-24T18:06:28.177Z",
      __v: 0,
    },
    {
      _id: "63d01f206df36u133d73c7df",
      user: "63cfecef2df1dba1e3ef7b26",
      title: "Iphone khareedo",
      description: "2023 m kuch bi krke iphone lena h",
      tag: "personal",
      date: "2023-01-24T18:10:40.697Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
