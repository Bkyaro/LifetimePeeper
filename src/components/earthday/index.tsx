const DeathAge = ({ handleChagne }: any) => {
  const deathAgeChange = (e: any) => {
    handleChagne(e.target.value);
  };
  return (
    <input
      type="number"
      min={0}
      onChange={deathAgeChange}
      placeholder="Desire max age"
    />
  );
};

export default DeathAge;
