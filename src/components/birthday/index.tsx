import VanillaCalendar from "../datePicker";

const BirthdayInput = ({ handleChange }: any) => {
  const birthdayInputChange = (date: any) => {
    handleChange(date);
  };
  return (
    <div>
      <div className="datePickerWrapper">
        <VanillaCalendar
          config={{
            type: "default",
            actions: {
              clickDay(e, self) {
                console.log("choosed day:", self.selectedDates[0]);
                birthdayInputChange(self.selectedDates[0]);
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BirthdayInput;
