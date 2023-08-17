
import { classes } from "utils";
import { SkeletonEffect } from "./skeleton.styles";

export interface SkeletonProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "circle" | "rectangle";
  count?: number;
}

const Skeleton = ({
  width,
  height,
  className,
  variant,
  count = 1,
}: SkeletonProps) => {
  return (
    <>
      {[...Array(count)]?.map((_, k: number) => {
        return (
          <SkeletonEffect
            key={k}
            style={{ width: `${width}px`, height: `${height}px` }}
            className={classes(className, variant)}
          />
        );
      })}
    </>
  );
};

export default Skeleton;
