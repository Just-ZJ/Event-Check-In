import { getDatabase, ref, set } from "firebase/database";

export function Person({ data, person, path }) {
  const onChangeEvent = () => {
    //update json in realtime database
    const db = getDatabase();
    set(ref(db, path), { checkin: true });
  };

  return (
    <>
      <div>
        <label>{person}</label>
        <input
          type="checkbox"
          checked={data[person].checkin}
          onChange={() => onChangeEvent()}
        />
      </div>
    </>
  );
}
