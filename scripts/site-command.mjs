import { spawn } from "node:child_process";

const [, , command, siteId] = process.argv;
const allowedCommands = new Set(["dev", "build"]);
const allowedSiteIds = new Set([
  "generic",
  "glensound-brother-in-law",
  "glensound-dad",
  "balloons4u",
]);

if (!allowedCommands.has(command) || !allowedSiteIds.has(siteId)) {
  console.error(
    "Usage: node scripts/site-command.mjs <dev|build> <site-id>",
  );
  process.exit(1);
}

const isWindows = process.platform === "win32";
const npmCommand = isWindows ? "cmd.exe" : "npm";
const npmArgs = isWindows
  ? ["/d", "/s", "/c", "npm", "run", command]
  : ["run", command];

const child = spawn(npmCommand, npmArgs, {
  env: {
    ...process.env,
    PUBLIC_SITE_ID: siteId,
  },
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
