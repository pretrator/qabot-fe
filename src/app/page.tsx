import Image from "next/image";
import { Button } from 'antd';
import LeftPane from '@Comp/leftPane';
import RightPane from '@Comp/rightPane';
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <LeftPane/>
      <RightPane/>
    </main>
  );
}