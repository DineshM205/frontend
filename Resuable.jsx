function  TextInput({
  label,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>
      <br />

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      <br />
      <br />
    </div>
  );
}

export default TextInput;