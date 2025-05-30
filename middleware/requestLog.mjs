import chalk from "chalk";

export default function (req, res, next) {
  const time = new Date();

  console.log(
    chalk.yellow(
      `-----
    ${time.toLocaleTimeString()}: Received a ${req.method} request to ${
        req.url
      }.`
    )
  );
  next();
}
