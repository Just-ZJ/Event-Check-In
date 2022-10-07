import { getDatabase, ref, set } from "firebase/database";

export function CheckIn() {
  const onSubmitEvent = () => {
    //update json in realtime database
    const db = getDatabase();
    let name = document.getElementById("name").value;
    console.log(`path is: names/${name}`);
    set(ref(db, `names/${name}`), { checkin: true });
  };

  return (
    <>
      <form className="w-75" onSubmit={() => onSubmitEvent()}>
        <div class="form-group">
          <label for="name">姓名</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Enter Name"
          />
          <small class="form-text text-muted my-3">
            Please enter your full name. 请输入全名。
          </small>
        </div>
        <button type="submit" class="btn btn-primary m-auto">
          Submit
        </button>
      </form>
    </>
  );
}
