import React from "react";

const InputContainer = (props) => {
  const { registerState, setRegisterState } = props.props;
  return (
    <>
      <div
        style={{
          position: "relative",
          marginBottom: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label
          style={{ fontSize: "small", fontWeight: "bolder" }}
          htmlFor={props.htmlFor}
        >
          {props.title}
        </label>
        <input
          type={props.type}
          id={props.id}
          autoComplete="off"
          style={{
            border: "none",
            borderRadius: "5px",
            outline: "none",
            marginLeft: "10px",
          }}
          value={props.value}
          onChange={(e) => {
            setRegisterState({
              ...registerState,
              [`${props.name}`]: e.target.value,
            });
          }}
        />
      </div>
    </>
  );
};
export default InputContainer;
