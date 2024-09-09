const { exec } = require("child_process");

const components = [
  "button",
  "card",
  "navigation-menu",
  "sheet",
  "separator",
  "pagination",
];

components.forEach((component) => {
  exec(`npx shadcn@latest add ${component}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error installing ${component}:`, stderr);
      return;
    }
    console.log(`Installed ${component}:`, stdout);
  });
});
