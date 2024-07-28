import React, { useMemo, useState, useEffect } from 'react';
// TODO: remove preview
import * as DOMPurify from "dompurify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PageAPI from '../requests/pageAPI'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function Editor() {
  const [quillValue, setQuillValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [createdByValue, setCreatedByValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [menuValue, setMenuValue] = useState('');
  const [subMenuValue, setSubMenuValue] = useState('');

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          ['link', 'image', 'video', 'formula'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
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
    if (isLoading)
      PageAPI.Create(
        titleValue, commentValue, menuValue + '/' + subMenuValue,
        quillValue, createdByValue
      ).then(res => {
        if (res.status !== 200)
          alert("저장 실패");
        setLoading(false);
      });
  }, [
    isLoading, quillValue,
    titleValue, commentValue, menuValue, subMenuValue, createdByValue
  ]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // TODO: location 값 지정 및 값 검증

    setLoading(true);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={9}>
            <Form.Label>제목</Form.Label>
            <Form.Control name='title' value={titleValue}
              onChange={(event) => {
                setTitleValue(event.target.value)
              }}
            />
          </Col>
          <Col>
            <Form.Label>작성자</Form.Label>
            <Form.Control name='createdby' value={createdByValue}
              onChange={(event) => {
                setCreatedByValue(event.target.value)
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>설명</Form.Label>
            <Form.Control name='comment' value={commentValue}
              onChange={(event) => {
                setCommentValue(event.target.value)
              }}
            />
            <Form.Text className="text-muted">제목, 작성자 및 설명은 페이지에 공개되지 않습니다.</Form.Text>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {/* TODO: Add validations here */}
            {/* TODO: Add menu dynamically */}
            <InputGroup className="mb-3" hasValidation>
              <InputGroup.Text>매뉴 지정</InputGroup.Text>
              <Form.Select defaultValue="메뉴" value={menuValue}
                onChange={(event) => {
                  setMenuValue(event.target.value)
                }}
              >
                <option>...</option>
                <option value="">매뉴</option>
              </Form.Select>
              <Form.Select defaultValue="하위메뉴" value={subMenuValue}
                onChange={(event) => {
                  setSubMenuValue(event.target.value)
                }}
              >
                <option>...</option>
                <option value="">하위매뉴</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>

        <ReactQuill
          theme="snow" modules={modules}
          value={quillValue} onChange={setQuillValue}
        />

        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? '처리중…' : '개시'}
        </Button>

      </Form>

      {/* TODO: remove preview */}
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(quillValue), }}
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
