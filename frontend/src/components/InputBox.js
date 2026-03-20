function InputBox({ input, setInput }) {
  return (
    <textarea
      placeholder="Enter input here..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      rows="5"
      style={{ width: "100%" }}
    />
  );
}

export default InputBox;