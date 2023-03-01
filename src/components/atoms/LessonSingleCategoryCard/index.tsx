import React from "react";
import Link from "next/link";

import { cx } from "../../lib/utils";
import { Icons } from "../../shared";
import { LessonSingleCategoryCardProps } from "@/src/types/LessonSingle/LessonSingleCategoryCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperEnabled, wrapperDisabled } = styles;

const LessonSingleCategoryCard = ({
  lessonNumber,
  type,
  disabled,
  id,
  href,
}: LessonSingleCategoryCardProps) => {
  return (
    <Link href={`/nauka/lekcje/${id}/${href}`}>
      <div className={cx(wrapper, disabled ? wrapperDisabled : wrapperEnabled)}>
        <p>Lekcja {lessonNumber}</p>
        <p>{type}</p>
        <Icons.IoIosArrowDown />
      </div>
    </Link>
  );
};

export default LessonSingleCategoryCard;
