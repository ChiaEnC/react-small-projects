import React from "react";
import ExpenseDashboardPage from "./ExpenseDashboardPage";

const EditExpensePage = props => {
  console.log(props);
  return <div>Edit the expense with id of {props.match.params.id} </div>;
};

export default EditExpensePage;
