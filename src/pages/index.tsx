import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import Body from "./components/body"
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex flex-col h-screen">  
      <Header />
      <Footer />
    </div>
   
  );
}