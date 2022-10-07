import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";

import { Person } from "./Person";

const dataRendering = (data) => {
  return data == null ? (
    <></>
  ) : (
    Object.keys(data).map((element) => {
      return Object.keys(data[element]).map((people, i) => {
        return (
          <Person
            key={i}
            person={data[element][people]}
            path={`names/${element}/${people}`}
          />
        );
      });
    })
  );
};

export function Admin() {
  // {onValue(names, (snapshot) => {
  //   const data = snapshot.val();
  //   for (let key in data) {
  //     let element = data[key];
  //     for (let person in element) {
  //       console.log(element[person]);
  //       return <Person person={person} />;
  //     }
  //   }
  //   // updateStarCount(postElement, data);
  // })}

  const [data, setData] = useState(null);
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
      <div>This page is for admins to view</div>
      {dataRendering(data)}
    </>
  );
}
