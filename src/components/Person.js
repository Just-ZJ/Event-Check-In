import { getDatabase, ref, set } from "firebase/database";

export function Person({ person, path }) {
  const onChangeEvent = () => {
    console.log(`${person.name}'s checkbox clicked - ${person.checkin}`);
    console.log(path);
    const db = getDatabase();
    set(ref(db, path), {
      name: person.name,
      checkin: true,
    });
  };

  return (
    <>
      <div class="mb-3">
        <label>{person.name}</label>
        <input
          type="checkbox"
          checked={person.checkin}
          onChange={() => onChangeEvent()}
        />
      </div>
    </>
  );
}
