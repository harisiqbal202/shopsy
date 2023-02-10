function Input({ label, name, onChanged, error, ...rest }) {
  return (
    <>
      <label htmlFor="username" className="form-label">
        {label}
      </label>
      <input
        {...rest}
        id={name}
        className="form-control"
        placeholder={name}
        name={name}
        onChange={onChanged}
      />
      {error && <span className="text-danger">{error}</span>}
    </>
  );
}

export default Input;
