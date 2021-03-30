import React from "react";

export const DogForm = ({
  name,
  setName,
  id,
  setId,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
