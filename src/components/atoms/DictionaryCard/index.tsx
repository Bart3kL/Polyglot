import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { DictionaryCardProps } from "@/src/types/Categories/CategoryCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperImage } = styles;

const DictionaryCard = ({
  id,
  name,
  image,
  title,
  levelId,
  slug,
  link,
}: DictionaryCardProps) => {
  const { asPath } = useRouter();
  return (
    <Link href={title ? `${asPath}/${slug}` : `/${link}/${levelId}/${id}`}>
      <li key={id} className={wrapper}>
        <h3>{name || title}</h3>
        <div className={wrapperImage}>
          <Image
            src={image}
            alt="Picture of the author"
            width={300}
            height={200}
          />
        </div>
      </li>
    </Link>
  );
};

export default DictionaryCard;
