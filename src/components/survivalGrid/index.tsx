// SurvivalGrid.tsx
import React, { useEffect, useState } from "react";
import { Loader } from "@/components";
import colors from "@/utils/colors";
import dayjs from "dayjs";
import "./style.css";

const SurvivalGrid = ({ userData }: any) => {
  const { birthday, expectedAge = 0, range } = userData;

  const [currentDay, setCurrentDay] = useState(dayjs());
  const [userBirthday, setUserBirthday] = useState(dayjs(birthday));
  const [userDeathday, setUserDeathday] = useState(
    dayjs(birthday).add(expectedAge, "years")
  );
  const [totalDays, setTotalDays] = useState(
    userDeathday.diff(userBirthday, "days")
  );
  const [daysLived, setDaysLived] = useState(
    currentDay.diff(userBirthday, "days")
  );
  const [daysRemaining, setDaysRemaining] = useState(totalDays - daysLived);

  /**
   * 已有:
   *  获取用户生日 Birth
   *  获取用户寿命 Life
   *  获取当前日期 Today
   *
   * 需计算:
   *  颗粒度-天
   *    总天数 = Birth + Life
   *    已存活 = 总天数 - Birth
   *    未存活 = 总天数 - 已存活
   *
   *  颗粒度-周
   *    总周数
   *    已存活
   *    未存活
   *
   *  颗粒度-月
   *    总月数
   *    已存活
   *    未存活
   *
   *  颗粒度-年
   *    总年数
   *    已存活
   *    未存活
   */

  useEffect(() => {
    // 用户生日
    setCurrentDay(dayjs());
    setUserBirthday(dayjs(birthday));
    setUserDeathday(dayjs(birthday).add(expectedAge, "years"));
    setTotalDays(userDeathday.diff(userBirthday, "days"));
    setDaysLived(currentDay.diff(userBirthday, "days"));
    setDaysRemaining(totalDays - daysLived);
  }, [birthday, expectedAge, range]);

  // 计算总的存活天数
  // const totalDays = expectedAge * 365;

  // 计算用户已经存活的天数
  // const birthDate = new Date(birthday);
  // const currentDate = new Date();
  // const daysLived = Math.floor(
  //   (currentDate - birthDate) / (1000 * 60 * 60 * 24)
  // );

  // // 计算待存活的天数
  // const daysRemaining = totalDays - daysLived;

  // // 创建一个表示存活状态的数组，true 代表存活，false 代表未来的日子
  // const survivalArray = new Array(totalDays).fill(false);
  // survivalArray.fill(true, 0, daysLived);

  // const getApproximateSeat = (index: number) => {
  //   const precentage: any = (index / survivalArray.length).toFixed(1);
  //   const approximateSeat: any = (colors.length * precentage).toFixed(0);
  //   return colors[approximateSeat];
  // };

  return birthday && expectedAge ? (
    <>
      <p>currentDay: {currentDay.format("YYYY-MM-DD")}</p>
      <p>birthday: {userBirthday.format("YYYY-MM-DD")}</p>
      <p>deathday: {userDeathday.format("YYYY-MM-DD")}</p>
      <p>totalDays: {totalDays}</p>
      <p>daysLived: {daysLived}</p>
      <p>daysRemaining: {daysRemaining}</p>

      <div className="survival-grid">
        {/* {survivalArray.map((alive, index) => (
          <div
            key={index}
            // style={{
            //   backgroundColor: alive ? `${getApproximateSeat(index)}` : "white",
            // }}
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
