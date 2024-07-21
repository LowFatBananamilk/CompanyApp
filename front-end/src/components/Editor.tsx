import { useMemo, useState, useEffect } from 'react';
// TODO: remove preview
import * as DOMPurify from "dompurify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PageAPI from '../requests/pageAPI'

import Button from 'react-bootstrap/Button';

function Editor() {
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          ['link', 'image', 'video', 'formula'],
        
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
        
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
        
          ['clean']                                         // remove formatting button
        ],
      },
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      // TODO: Add forms for other infos
      PageAPI.Create("test", "test", "test", value, "webApp").then(res => {
        if (res.status === 200)
          setLoading(false);
        else
          alert("저장 실패");
      });
    }
  }, [isLoading, value]);
  const handleClick = () => setLoading(true);

  return (
    <>
      <ReactQuill
        theme="snow" modules={modules}
        value={value} onChange={setValue}
      />

    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : () => {}}
    >
      {isLoading ? '처리중…' : '개시'}
    </Button>

      {/* TODO: remove preview */}
      <div
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(value),}}
        style={{
          marginTop: '30px',
          overflow: 'hidden',
          whiteSpace: 'pre-wrap',
        }}
      />
    </>
  );
}

export default Editor;
