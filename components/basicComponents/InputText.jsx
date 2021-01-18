function InputText({ type, name, placeholder, className }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default InputText;
