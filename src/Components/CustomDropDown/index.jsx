import "./index.scss";

export default function CustomDropDown({
  options,
  placeHolder,
  style,
  onChange,
  name,
  value,
}) {
  return (
    <select
      className="dropdown-style"
      style={style}
      onChange={onChange}
      name={name}
      value={value}
    >
      <option hidden>{placeHolder}</option>
      {options.map((res) => (
        <option value={res.value}>{res.label}</option>
      ))}
    </select>
  );
}
