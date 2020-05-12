import React from "react";

function Searchbox() {
  return (
      <div className="container">
    <div className="form-group">
     <label for="exampleFormControlInput1">Search for a book</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Harry+Potter">
    </input>
    </div>
    <button type="submit" className="btn btn-info float-right">Submit</button>
    </div>
  );
}

export default Searchbox;
