import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";

import { Person } from "./Person";

const dataRendering = (data) => {
  return data == null ? (
    <></>
  ) : (
    Object.keys(data).map((person, i) => {
      return (
        <Person key={i} data={data} person={person} path={`names/${person}`} />
      );
    })
  );
};

export function Admin() {
  const [data, setData] = useState(null);
  //read json from database
  const database = ref(getDatabase());
  get(child(database, "names"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <>
      <div className="mb-3 align-middle w-50 m-auto text-center">
        <h2>List of Attendees</h2>
        {dataRendering(data)}
      </div>
    </>
  );
}
