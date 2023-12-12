const DeathAge = ({ handleChagne }: any) => {
  const deathAgeChange = (e: any) => {
    handleChagne(e.target.value);
  };
  return (
    <div>
      Deathday: 
      <input
        type="number"
        min={0}
        onChange={deathAgeChange}
        placeholder="Desire max age"
      />
    </div>
  );
};

export default DeathAge;
