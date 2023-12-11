"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { BirthdayInput, DeathAge } from "@/components";

export default function Home() {
  const [birthday, setBirthday] = useState<string>("");
  const [maxAge, setMaxAge] = useState<number>(0);

  useEffect(() => {
    console.log({ birthday, maxAge });
  }, [birthday, maxAge]);

  const title = () => {
    return <div className={styles.title}>Lifetime Peeper</div>;
  };

  return (
    <div className={styles.main}>
      {title()}
      <BirthdayInput handleChange={setBirthday} />
      <DeathAge handleChagne={setMaxAge} />
    </div>
  );
}
