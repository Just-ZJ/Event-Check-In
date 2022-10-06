export function CheckIn() {
  return (
    <>
      <form>
        <div class="form-group">
          <label for="name">姓名</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
          <small id="emailHelp" class="form-text text-muted">
            Please enter your full name. 请输入全名。
          </small>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
