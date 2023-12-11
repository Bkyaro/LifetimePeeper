// SurvivalGrid.tsx
import React from "react";
import { Loader } from "@/components";
import "./style.css";

const SurvivalGrid = ({ userData }: any) => {
  const { birthday, expectedAge } = userData;

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

  return birthday && expectedAge ? (
    <>
      <p>birthday: {birthday}</p>
      <p>max age: {expectedAge}</p>
      <p>total days: {totalDays}</p>
      <p>days have lived: {daysLived}</p>
      <p>remaining days: {totalDays - daysLived}</p>
      <div className="survival-grid">
        {survivalArray.map((alive, index) => (
          <div
            key={index}
            className={`grid-cell ${alive ? "alive" : "not-alive"}`}
          />
        ))}
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default SurvivalGrid;
