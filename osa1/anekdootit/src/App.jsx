import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [values, setValues] = useState(Array(8).fill(0));
  const [highestIndex, setHighestIndex] = useState(0);

  const doNextAnecdote = () => {
    const random = Math.floor(Math.random() * 8);
    setSelected(random);
  };

  const voteAnecdote = () => {
    const copy = [...values];
    copy[selected] += 1;
    setValues(copy);
    const maxValue = Math.max(...copy);
    const indexOfMax = copy.indexOf(maxValue);
    setHighestIndex(indexOfMax);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div> votes: {values[selected]}</div>
      <div>
        <Button function={voteAnecdote} text={"vote"} />
        <Button function={doNextAnecdote} text={"next anecdote"} />
      </div>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[highestIndex]}</div>
      <div>votes: {values[highestIndex]}</div>
    </div>
  );
};

export default App;
