import React, { useState } from "react";

import Swal from "sweetalert2";

import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

import { employeesData } from "../../data/";
function Dashbord() {
  const [employees, setemployees] = useState(employeesData);
  const [selectedEmployee, setselectedEmployee] = useState(null);
  const [isAdding, setisAdding] = useState(false);
  const [isEditing, setisEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setselectedEmployee(employee);

    setisEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setemployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };
  return (
    <div className="container">
      {/* List*/}
      {!isAdding && !isEditing && (
        <>
          <Header setisAdding={setisAdding} />

          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add*/}
      {isAdding && (
        <Add
          employees={employees}
          setemployees={setemployees}
          setisAdding={setisAdding}
        />
      )}
      {/* Edit*/}
      {isEditing && (
        <Edit
          employees={employees}
          setisEditing={setisEditing}
          selectedEmployee={selectedEmployee}
          setemployees={setemployees}
        />
      )}
    </div>
  );
}

export default Dashbord;
