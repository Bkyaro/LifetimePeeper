"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import {
  BirthdayInput,
  DeathAge,
  SurvivalGrid,
  GridRange,
  Switch,
} from "@/components";

export default function Home() {
  enum Duration {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
  }

  const [birthday, setBirthday] = useState<string>("");
  const [maxAge, setMaxAge] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [range, setRange] = useState<Duration>(Duration.Day);

  useEffect(() => {
    console.log({ birthday, maxAge, range });
  }, [birthday, maxAge, range]);

  const title = () => {
    return <div className={styles.title}>Lifetime Peeper</div>;
  };

  return (
    <div className={styles.main}>
      {title()}
      <BirthdayInput handleChange={setBirthday} />
      <DeathAge handleChange={setMaxAge} maxAge={maxAge} />
      <GridRange range={range} handleRangeChange={setRange} />
      <SurvivalGrid
        userData={{ birthday: birthday, expectedAge: maxAge, range }}
      />
    </div>
  );
}
