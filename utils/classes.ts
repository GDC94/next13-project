type ClassCondition = { [key: string]: boolean | undefined };
type ClassType = undefined | string | string[] | ClassCondition;

const classes = (...args: ClassType[]): string => {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (argType === "object") {
      for (const key of Object.keys(arg)) {
        if ((arg as ClassCondition)[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
};

export default classes;
