import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      All Links:
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/projects/abc">ABC Client Projects</Link>
        </li>
      </ul>
    </>
  );
}
