import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

import useAddNote from "../../lib/hooks/useAddNote";
import { NotesFormProps } from "@/src/types/Notes/NotesForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperForm, wrapperFormEditor } = styles;

const NotesForm = ({
  subjectLabel,
  noteLabel,
  buttonLabel,
  subjectPleaceholder,
}: NotesFormProps) => {
  const {
    setSubject,
    handleAddNote,
    subject,
    setConvertedText,
    convertedText,
  } = useAddNote();

  return (
    <div className={wrapper} id="notesForm">
      <div className={wrapperForm}>
        <label htmlFor="subject">{subjectLabel}</label>
        <input
          type="text"
          id="subject"
          placeholder={subjectPleaceholder}
          required={true}
          minLength={5}
          maxLength={20}
          value={subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSubject(e.target.value)
          }
        />

        <label htmlFor="note">{noteLabel}</label>
        <ReactQuill
          theme="snow"
          value={convertedText}
          onChange={setConvertedText}
          className={wrapperFormEditor}
          style={{ minHeight: "300px" }}
        />
        <button onClick={handleAddNote}>{buttonLabel}</button>
      </div>
    </div>
  );
};

export default NotesForm;
