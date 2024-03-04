import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-black border-2 border-s text-center"
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      className="mx-5">
        <GiHamburgerMenu color="blue" />
      </button>
    </>
  );
}
