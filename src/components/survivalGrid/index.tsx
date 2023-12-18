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
    lifeArray: [],
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    const userBirthday = dayjs(birthday);
    const deathday = userBirthday.add(maxAge, "years");
    const today = dayjs();

    const totalDays = deathday.diff(userBirthday, "days");
    const daysLived = today.diff(userBirthday, "days");
    const daysRemaining = totalDays - daysLived;
    // div display
    if (!Number.isNaN(totalDays) && !Number.isNaN(daysLived)) {
    }
    const test: any = [];

    setDates({
      currentDay: today,
      userBirthday,
      userDeathday: deathday,
      totalDays,
      daysLived,
      daysRemaining,
      lifeArray: test,
    });
  }, [birthday, maxAge, range]);

  const {
    currentDay,
    userBirthday,
    userDeathday,
    totalDays,
    daysLived,
    daysRemaining,
    lifeArray,
  } = dates;

  // const getApproximateSeat = (index: number) => {
  //   const precentage: any = (index / dates.survivalArray.length).toFixed(1);
  //   const approximateSeat: any = (colors.length * precentage).toFixed(0);
  //   return colors[approximateSeat];
  // };

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
      <p>currentDay: {currentDay.format("YYYY-MM-DD")}</p>
      <p>birthday: {userBirthday.format("YYYY-MM-DD")}</p>
      <p>deathday: {userDeathday.format("YYYY-MM-DD")}</p>
      <p>totalDays: {totalDays}</p>
      <p>daysLived: {daysLived > totalDays ? totalDays : daysLived}</p>
      <p>daysRemaining: {daysRemaining}</p>

      <div className="survival-grid">
        {/* {survivalCanvas(daysLived, totalDays)} */}
        {/* {dates.survivalArray &&
          dates.survivalArray.map((alive, index) => (
            <div
              key={index}
              style={{
                backgroundColor: alive
                  ? `${getApproximateSeat(index)}`
                  : "white",
              }}
              className={`grid-cell `}
            />
          ))} */}
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default SurvivalGrid;
