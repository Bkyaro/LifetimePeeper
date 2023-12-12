const BirthdayInput = ({ handleChange }: any) => {
  const birthdayInputChange = (e: any) => {
    handleChange(e.target.value);
  };
  return (
    <div>
      Birthday: <input type="date" onChange={birthdayInputChange} />
    </div>
  );
};

export default BirthdayInput;
