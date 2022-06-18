import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setemployees, setisAdding }) {
  const [email, setemail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [salary, setsalary] = useState("");
  const [date, setdate] = useState("");

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All field are required",
        showConfirmButton: true,
      });
    }
 

  const id = employees.length + 1;
  const newEmployee = {
    id,
    email,
    firstName,
    lastName,
    date,
    salary,
  };
  employees.push(newEmployee);
  setemployees(employees);
  setisAdding(false);

  Swal.fire({
    icon: "success",
    title: "Added",
    text: `${firstName} ${lastName}'s data has been Added`,
    showConfirmButton: false,
    timer: 1500,
  });
}
  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          ref={textInput}
          name="firsName"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        ></input>

        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="lastName"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setisAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
