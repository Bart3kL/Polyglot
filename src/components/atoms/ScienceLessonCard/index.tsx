import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cx } from "../../lib/utils";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperBox,
  wrapperEnabled,
  wrapperDisabled,
  wrapperImage,
  wrapperContent,
  wrapperContentTitle,
  wrapperContentCategory,
} = styles;

const ScienceLessonCard = ({ image, title, id, currentLesson }: any) => {
  return (
    <div className={wrapper}>
      {currentLesson >= id ? (
        <Link href={`/science/lessons/${id}`}>
          <div className={cx(wrapperBox, wrapperEnabled)}>
            <div className={wrapperImage}>
              <Image
                src={image}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <div className={wrapperContent}>
              <p className={wrapperContentTitle}>{title}</p>
              <p className={wrapperContentCategory}>1/3</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={cx(wrapperBox, wrapperDisabled)}>
          <div className={wrapperImage}>
            <Image
              src={image}
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <div className={wrapperContent}>
            <p className={wrapperContentTitle}>{title}</p>
            <p className={wrapperContentCategory}>1/3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScienceLessonCard;
