import React, { useState } from "react";
// import ClassicEditor from "src/ckeditor5-build-classic/src/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setState({
      [name]: value,
    });
    console.log("state", state);
  };

  const handleCkEditorState = (event, editor) => {
    const data = editor.getData();
    console.log("🚀 ~ data", data);
  };
  const _exportPdf = () => {
    html2canvas(document.querySelector(".ck-editor__main")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form className="form-group">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control"
              value={state.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="enail"
              name="eamil"
              placeholder="Enter Name"
              className="form-control"
              value={state.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              placeholder="Enter Name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <CKEditor
              editor={Editor}
              id="hello"
              // config={editorConfiguration}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={handleCkEditorState}
            />
          </div>
          <div className="form-group">
            <input type="submit" name="submit" className="btn btn-secondary" />
          </div>
          <div className="form-group">
            <button onClick={_exportPdf}>Click to genearete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
