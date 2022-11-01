import Head from "next/head";
import Image from "next/image";
import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";
import HomePage from "./home";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
