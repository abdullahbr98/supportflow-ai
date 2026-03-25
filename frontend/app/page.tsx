"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/health/")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Failed to connect to backend"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-xl font-semibold">{message}</div>
    </main>
  );
}