import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@/components";
import colors from "@/utils/colors";
import dayjs from "dayjs";
import type { ConfigType } from "dayjs";
import "./style.css";

interface UserData {
  birthday: string;
  maxAge?: number;
  range?: string; // 定义具体类型而不是 any
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
    survivalArray: [],
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    let userBirthday = dayjs(birthday);
    let deathday = userBirthday.add(maxAge, "years");
    let today = dayjs();

    let totalDays;
    let daysLived;
    let daysRemaining;
    let survivalArray: any = [];

    switch (range) {
      case "year":
        totalDays = deathday.diff(userBirthday, "year");
        daysLived = today.diff(userBirthday, "year");
        console.log("totalDays -- year", totalDays);
        daysRemaining = totalDays - daysLived;
        console.log("daysRemaining = totalDays - daysLived", {
          daysRemaining,
          totalDays,
          daysLived,
        });
        // div display
        if (!Number.isNaN(totalDays) && !Number.isNaN(daysLived)) {
          survivalArray = [];
          for (let i = 0; i < totalDays; i++) {
            if (i < daysLived) {
              survivalArray.push(true);
            } else {
              survivalArray.push(false);
            }
          }
        }
        break;
      case "month":
        totalDays = deathday.diff(userBirthday, "month");
        daysLived = today.diff(userBirthday, "month");
        console.log("totalDays -- month", totalDays);
        daysRemaining = totalDays - daysLived;
        // div display
        if (!Number.isNaN(totalDays) && !Number.isNaN(daysLived)) {
          for (let i = 0; i < totalDays; i++) {
            if (i < daysLived) {
              survivalArray.push(true);
            } else {
              survivalArray.push(false);
            }
          }
        }
        break;
      case "week":
        totalDays = deathday.diff(userBirthday, "week");
        daysLived = today.diff(userBirthday, "week");
        console.log("totalDays -- week", totalDays);
        daysRemaining = totalDays - daysLived;
        // div display
        if (!Number.isNaN(totalDays) && !Number.isNaN(daysLived)) {
          for (let i = 0; i < totalDays; i++) {
            if (i < daysLived) {
              survivalArray.push(true);
            } else {
              survivalArray.push(false);
            }
          }
        }
        break;
      default:
        totalDays = deathday.diff(userBirthday, "days");
        daysLived = today.diff(userBirthday, "days");
        console.log("totalDays -- days", totalDays);
        daysRemaining = totalDays - daysLived;
        // div display
        if (!Number.isNaN(totalDays) && !Number.isNaN(daysLived)) {
          for (let i = 0; i < totalDays; i++) {
            if (i < daysLived) {
              survivalArray.push(true);
            } else {
              survivalArray.push(false);
            }
          }
        }
        break;
    }

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

  console.log("survivalArray", survivalArray);

  const getApproximateSeat = (index: number) => {
    const precentage: any = index / survivalArray.length;
    const approximateSeat: any = (colors.length * precentage).toFixed(0);
    console.log("precentage, approximateSeat", [precentage, approximateSeat]);
    return colors[approximateSeat];
  };

  // canvas display
  // const survivalCanvas = (daysLived: any, totalDays: any) => {
  //   let canvas: HTMLCanvasElement | null = document.createElement("canvas");
  //   console.log("cavas", canvas);
  //   const context = canvas.getContext("2d");

  //   // 假设每个格子是10x10像素
  //   const cellSize = 10;
  //   for (let i = 0; i < totalDays; i++) {
  //     const x = (i % 400) * cellSize;
  //     const y = Math.floor(i / 400) * cellSize;

  //     context.fillStyle = i < daysLived ? "green" : "gray"; // 存活和未来的颜色
  //     context.fillRect(x, y, cellSize, cellSize);
  //   }

  //   return <canvas ref={canvasRef} width={400 * 10} height={2000 * 10} />;
  // };

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
        {/* {survivalCanvas(daysLived, totalDays)} */}
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
