import "./style.css";
const DeathAge = ({ handleChange, maxAge }: any) => {
  const ageLimit = { min: 0, max: 130 };
  const deathAgeChange = (e: any) => {
    if (
      !e.target.value ||
      (e.target.value < ageLimit.max && e.target.value > ageLimit.min)
    ) {
      handleChange(e.target.value);
    }
  };
  return (
    <div>
      <input
        className="input"
        min={ageLimit.min}
        max={ageLimit.max}
        onChange={deathAgeChange}
        placeholder="Desire max age"
        type="number"
        value={maxAge}
      ></input>
    </div>
  );
};

export default DeathAge;
