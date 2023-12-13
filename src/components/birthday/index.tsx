import { GlobalButton } from "../index";
import VanillaCalendar from "../datePicker";
import "./style.css";
const BirthdayInput = ({ handleChange }: any) => {
  const birthdayInputChange = (date: any) => {
    handleChange(date);
  };
  let date = new Date();
  let userDate = date.toISOString().split("T")[0];

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (
      e.currentTarget.previousElementSibling.classList.contains(
        "vanilla-calendar"
      )
    ) {
      e.currentTarget.previousElementSibling.classList.toggle(
        "vanilla-calendar-active"
      );
    }
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
            settings: {
              range: {
                // @ts-ignore
                max: `${userDate}`,
              },
            }
          }}
        />
        <GlobalButton text={"Birthday"} handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default BirthdayInput;
