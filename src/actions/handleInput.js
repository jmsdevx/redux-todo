const handleInput = e => {
  return {
    type: "HANDLE_INPUT",
    payload: { [e.target.name]: e.target.value }
  };
};

export default handleInput;
