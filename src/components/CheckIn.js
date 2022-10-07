import { child, get, getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CheckIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onSubmitEvent = (event) => {
    //prevent the default form submission
    event.preventDefault();

    const db = getDatabase();
    //check if person has signed up - whether name can be found in database
    get(child(ref(db), `names/${name}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //update json in realtime database
          set(ref(db, `names/${name}`), { checkin: true });
          console.log(`${name} has been checked in`);
          //redirect to success page
          navigate("/success", {
            state: {
              success: true,
              message: `${name} has successfully checked-in.`,
            },
          });
        } else {
          //redirect to failure - not found
          console.log(`No data available for ${name}`);
          navigate("/failure", {
            state: {
              success: false,
              message: `${name} could not be found in the sign-up list.`,
            },
          });
        }
      })
      .catch((error) => {
        //redirect to failure - error
        navigate("/failure", {
          state: {
            success: false,
            message: `Error: ${error}`,
          },
        });
        console.error(error);
      });
  };

  const onChangeInput = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form className="w-75 p-3 m-auto" onSubmit={onSubmitEvent}>
        <div class="form-group">
          <label for="name">姓名</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Enter Name"
            onChange={onChangeInput}
          />
          <small class="form-text text-muted my-3">
            Please enter your full name. 请输入全名。
          </small>
        </div>
        <button type="submit" class="btn btn-primary m-auto align-middle">
          Submit
        </button>
      </form>
    </>
  );
}
