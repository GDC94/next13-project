/* eslint-disable prefer-const */

interface RangeProps {
  start: number;
  end: number;
  step: number;
}

const range = ({ start, end, step = 1 }: RangeProps) => {
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  let output: number[] = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

export default range;
