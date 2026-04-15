import React from "react";
import { Render } from "@puckeditor/core";
import { config } from "./puck-config";
import fs from "fs";
import path from "path";

export default function HomePage() {
  const filePath = path.join(process.cwd(), "data", "page.json");

  let data = { content: [], root: {} };

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(raw);
  }

  return (
    <main style={{ padding: "24px" }}>
      <Render config={config} data={data} />
    </main>
  );
}
