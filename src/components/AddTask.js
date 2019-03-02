import React from "react";
import { connect } from "react-redux";
import handleInput from "../actions/handleInput";
import addTask from "../actions/addTask";

const AddTask = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        name="task"
        value={props.inputReducer.task}
        onChange={props.handleInput}
      />
      <button onClick={() => props.addTask(props.inputReducer.task)}>
        Add Task
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  handleInput: payload => dispatch(handleInput(payload)),
  addTask: payload => dispatch(addTask(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
