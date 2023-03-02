import React, { useState } from "react";

import { Icons } from "../../shared";
import { NotesContentProps } from "@/src/types/Notes/NotesContent";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperBox,
  wrapperBoxSubject,
  wrapperBoxSubjectIcon,
  wrapperBoxSubjectTitle,
  wrapperBoxContent,
} = styles;

const NotesContent = ({ notes }: NotesContentProps) => {
  const [toggle, setToggle] = useState({ show: false, index: 0 });
  return (
    <ul className={wrapper}>
      {notes.map((note, i: number) => (
        <li className={wrapperBox} key={note.id}>
          <div
            className={wrapperBoxSubject}
            onClick={() => setToggle({ show: !toggle.show, index: i })}
          >
            <p className={wrapperBoxSubjectTitle}>{note.subject}</p>
            <p className={wrapperBoxSubjectIcon}>
              <Icons.IoIosArrowDown />
            </p>
          </div>
          {toggle.index === i && toggle.show && (
            <div
              className={wrapperBoxContent}
              dangerouslySetInnerHTML={{ __html: note.notes }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NotesContent;
