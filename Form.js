import React, { useState } from "react";
const initialValues = {
  username: "",
  title: "",
  paragraph: "",
};
function Form() {
  //   const [username, setUsername] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [paragraph, setParagraph] = useState("");

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const printValues = () => {
    console.log(values.username);
    console.log(values.title);
    console.log(values.paragraph);
  };
  const handleSubmit = () => {
    printValues();
  };

  return (
    <div>
      <input
        type="text"
        value={values.username}
        name="username"
        label="Username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        value={values.title}
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
      />
      <br />
      <textarea
        type="text"
        value={values.paragraph}
        name="paragraph"
        placeholder="Content"
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
