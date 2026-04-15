"use client";

import React, { useEffect, useState } from "react";
import { Puck } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { config } from "../puck-config";

export default function EditorPage() {
  const [data, setData] = useState({ content: [], root: {} });

  useEffect(() => {
    async function loadData() {
      const response = await fetch("/api/page");
      if (response.ok) {
        const json = await response.json();
        setData(json);
      }
    }

    loadData();
  }, []);

  async function handlePublish(nextData) {
    await fetch("/api/page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nextData)
    });

    alert("Página salva com sucesso.");
  }

  return <Puck config={config} data={data} onPublish={handlePublish} />;
}
