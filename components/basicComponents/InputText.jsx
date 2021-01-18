function InputText({ type, name, placeholder, className, getValue }) {
  const handleChange = (e) => {
    getValue(e.target.value);
  };
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      onChange={handleChange}
    />
  );
}

export default InputText;
