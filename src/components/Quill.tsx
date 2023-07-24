import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export const QuillComponent = () => {
  const [editorVal, setEditorVal] = useState("");

  useEffect(() => {
    console.log(editorVal);
  }, [editorVal]);

  return (
    <div className="container">
      <h3>Quill rich text</h3>
      <ReactQuill
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["link", "image"],
              ["clean"],
              [{ color: [] }],
            ],
          },
        }}
        value={editorVal}
        onChange={(val) => setEditorVal(val)}
      />
    </div>
  );
};



 