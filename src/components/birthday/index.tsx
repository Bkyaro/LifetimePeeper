const BirthdayInput = ({ handleChange }: any) => {
  const birthdayInputChange = (e: any) => {
    handleChange(e.target.value);
  };
  return <input type="date" onChange={birthdayInputChange} />;
};

export default BirthdayInput;
