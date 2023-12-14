// SurvivalGrid.tsx
import React from "react";
import { Loader } from "@/components";
import "./style.css";

const SurvivalGrid = ({ userData }: any) => {
  const { birthday, expectedAge = 0, range } = userData;

  // 计算总的存活天数
  const totalDays = expectedAge * 365;

  // 计算用户已经存活的天数
  const birthDate = new Date(birthday);
  const currentDate = new Date();
  const daysLived = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60 * 24)
  );

  // 计算待存活的天数
  const daysRemaining = totalDays - daysLived;

  // 创建一个表示存活状态的数组，true 代表存活，false 代表未来的日子
  const survivalArray = new Array(totalDays).fill(false);
  survivalArray.fill(true, 0, daysLived);

  const colors = [
    "#f9f871",
    "#eef074",
    "#e3e877",
    "#d8e07b",
    "#cdd97e",
    "#c2d181",
    "#b7c985",
    "#adc288",
    "#a2ba8c",
    "#97b28f",
    "#8cab92",
    "#81a396",
    "#769b99",
  ];

  const getApproximateSeat = (index: number) => {
    const precentage: any = (index / survivalArray.length).toFixed(1);
    const approximateSeat: any = (colors.length * precentage).toFixed(0);
    return colors[approximateSeat];
  };

  return birthday && expectedAge ? (
    <>
      <p>birthday: {birthday}</p>
      <p>max age: {expectedAge}</p>
      <p>total days: {totalDays}</p>
      <p>days have lived: {daysLived}</p>
      <p>remaining days: {totalDays - daysLived}</p>
      <p>time range: {range}</p>
      <div className="survival-grid">
        {survivalArray.map((alive, index) => (
          <div
            key={index}
            style={{
              backgroundColor: alive ? `${getApproximateSeat(index)}` : "white",
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
