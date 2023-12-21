import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@/components";
import colors from "@/utils/colors";
import dayjs from "dayjs";
import type { ConfigType } from "dayjs";
import "./style.css";

interface UserData {
  birthday: string;
  maxAge?: number;
  range?: string;
}

const SurvivalGrid = ({ userData }: { userData: UserData }) => {
  const { birthday, maxAge = 0, range } = userData;

  const [dates, setDates] = useState({
    currentDay: dayjs(),
    userBirthday: dayjs(birthday),
    userDeathday: dayjs(birthday).add(maxAge, "years"),
    totalDays: 0,
    daysLived: 0,
    daysRemaining: 0,
    survivalArray: [] as boolean[],
  });

  useEffect(() => {
    const userBirthday = dayjs(birthday);
    const deathday = userBirthday.add(maxAge, "years");
    const today = dayjs();

    const calculateDays = (unit: "year" | "month" | "week" | "day") => {
      const totalDays = deathday.diff(userBirthday, unit);
      const daysLived = today.diff(userBirthday, unit);
      return { totalDays, daysLived, daysRemaining: totalDays - daysLived };
    };

    const { totalDays, daysLived, daysRemaining } = calculateDays(range as any);

    const survivalArray = Array.from(
      { length: totalDays },
      (_, i) => i < daysLived
    );

    setDates({
      currentDay: today,
      userBirthday,
      userDeathday: deathday,
      totalDays,
      daysLived,
      daysRemaining,
      survivalArray: survivalArray,
    });
  }, [birthday, maxAge, range]);

  const {
    currentDay,
    userBirthday,
    userDeathday,
    totalDays,
    daysLived,
    daysRemaining,
    survivalArray,
  } = dates;

  const getApproximateSeat = (index: number) => {
    const precentage: any = index / survivalArray.length;
    const approximateSeat: any = (colors.length * precentage).toFixed(0);
    return colors[approximateSeat];
  };

  return birthday && maxAge ? (
    <>
      <p>Today 📅: {currentDay.format("YYYY-MM-DD")}</p>
      <p>Birthday 👶🏻: {userBirthday.format("YYYY-MM-DD")}</p>
      <p>Deathday 💀: {userDeathday.format("YYYY-MM-DD")}</p>
      <p>
        Total {range} 📃: {totalDays}
      </p>
      <p>
        {range && range.charAt(0).toUpperCase() + range.slice(1)} lived 🎉:{" "}
        {daysLived > totalDays ? totalDays : daysLived}
      </p>
      <p>
        Remaining {range} ⏳: {daysRemaining > 0 ? daysRemaining : "vanished"}
      </p>
      <p>
        {range && range.charAt(0).toUpperCase() + range.slice(1)} after vanished
        💀: {daysRemaining < 0 ? Math.abs(daysRemaining) : "still alive"}
      </p>

      <div className="survival-grid">
        {survivalArray &&
          survivalArray.map((alive, index) => (
            <div
              key={index}
              style={{
                backgroundColor: alive
                  ? `${getApproximateSeat(index)}`
                  : "white",
              }}
              className={`grid-cell `}
            />
          ))}
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default SurvivalGrid;
