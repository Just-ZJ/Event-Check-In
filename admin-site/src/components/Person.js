import { getDatabase, ref, set } from "firebase/database";

export function Person({ data, person, path }) {
  const onChangeEvent = () => {
    //update json in realtime database
    const db = getDatabase();
    set(ref(db, path), { checkin: true });
  };

  return (
    <>
      <h5 className="my-2">
        <label>{person}</label>
        <input
          type="checkbox"
          className="mx-3"
          checked={data[person].checkin}
          onChange={() => onChangeEvent()}
        />
      </h5>
    </>
  );
}
