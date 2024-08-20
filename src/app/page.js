"use client"
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-2/3 p-4 mx-auto mt-8 bg-blue-100">
      <Header />
      <div className="flex flex-col w-full gap-5">
        <ListTodo />
      </div>
    </main >
  );
}
