import fs from "fs";
import path from "path";

export async function GET() {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "page.json");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(
      filePath,
      JSON.stringify({ content: [], root: {} }, null, 2)
    );
  }

  const raw = fs.readFileSync(filePath, "utf-8");

  return new Response(raw, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function POST(request) {
  const data = await request.json();

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "page.json");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
