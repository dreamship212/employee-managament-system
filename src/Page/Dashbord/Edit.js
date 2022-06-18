import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";

function Edit({ employees, setisEditing, selectedEmployee, setemployees }) {
  const id = selectedEmployee.id;
  const [email, setemail] = useState(selectedEmployee.email);
  const [firstName, setfirstName] = useState(selectedEmployee.firstName);
  const [lastName, setlastName] = useState(selectedEmployee.lastName);
  const [salary, setsalary] = useState(selectedEmployee.salary);
  const [date, setdate] = useState(selectedEmployee.date);

  const handleUpdate = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true
      });
  }

  const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
  };

  for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
          employees.splice(i, 1, employee);
          break;
      }
  }

  setemployees(employees);
  setisEditing(false);

  Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500
  });
};
  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
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
          name="email"
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setisEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
