import type { Config } from "tailwindcss";
import sharedConfig from "../../tailwind.config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "practice-",
  presets: [sharedConfig],
};

export default config;
