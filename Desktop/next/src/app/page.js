"use client";
import Header from "@/components/header/page";
import Link from "next/link";

const Hom = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <h1 className="text-xl font-bold">Logo</h1>
      <Header/>
    </div>
  );
};

export default Hom;
