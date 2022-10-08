import { getDatabase, ref, child, get, set } from "firebase/database";
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
  const [json, setJson] = useState({});
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

  const onChangeEvent = (event) => {
    //create json object form list of names
    let names = event.target.value.split(/\n/);

    let jsonObj = { names: {} };
    names.forEach((name) => {
      jsonObj.names[name.trim()] = { checkin: false };
    });
    setJson(jsonObj);
  };

  const onSubmitEvent = (event) => {
    const db = getDatabase();
    console.log(json);
    set(ref(db, "/"), json);
  };

  return (
    <>
      <div className="mb-3 align-middle w-50 m-auto text-center">
        <h2 className="my-5">List of Attendees</h2>
        {dataRendering(data)}
      </div>
      <div class="form-group">
        <label for="namesInput">Enter list of names</label>
        <textarea
          class="form-control"
          id="namesInput"
          rows="5"
          onChange={onChangeEvent}
        ></textarea>
        <button
          type="submit"
          class="btn btn-primary m-auto my-3 text-center align-middle"
          onClick={onSubmitEvent}
        >
          Add List
        </button>
      </div>
    </>
  );
}
