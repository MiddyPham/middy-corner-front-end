"use client";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div>Đang tải editor...</div>,
});

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "color",
  "background",
  "align",
  "link",
  "image",
];

interface QuillEditorCustomProps {
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
  modules?: Record<string, unknown>;
  formats?: string[];
}

const QuillEditorCustom = ({
  value,
  onChange,
  style,
  modules,
  formats,
}: QuillEditorCustomProps) => {
  return (
    <QuillEditor
      value={value}
      onChange={onChange}
      modules={modules ?? quillModules}
      formats={formats ?? quillFormats}
      style={style}
    />
  );
};

export default QuillEditorCustom;
