import React, { useState } from "react";
// import ClassicEditor from "src/ckeditor5-build-classic/src/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./override.css";
import "./bulma.min.css";
import { HTMLFILE } from "./custom-file";

const Contact = () => {
  const html = ` <p style="text-align: center"><strong>TITLE SEARCH REPORT</strong></p>
<p><br />To,&nbsp;<br /><br /><br /><br />&nbsp;</p>
<p>Sir/Madam,</p>
<p>
  <strong>Subject</strong>: Legal scrutiny of documents pertaining to
  <span style="background-color: #ffffff"
    >Mrs. Padmashree wife of Mr. Somashekhara P. Kke</span
  >
  for the property bearing
  <span style="background-color: #ffffff"
    >Survey no. 46 Khata, No. 157 , Serial no. 821/1 Property no. 25</span
  >
  situated at
  <span style="background-color: #ffffff"
    >SANTHOSH C) - SRINIDHI LAYOUT, SOS POST, BANGALORE | (8) MANJUNATH. G.
    BANNERUGHATTIA ROAD. KALENA AGRAHARA, BANGALORE ಣಿ</span
  >.
</p>
<p style="text-align: center">
  <strong>PART - I: LIST OF DOCUMENTS SCRUTINISED</strong>
</p>
<figure class="table">
  <table style="border: 1px solid black">
    <colgroup>
      <col style="width: 33.33%" />
      <col style="width: 33.33%" />
      <col style="width: 33.34%" />
    </colgroup>
    <tbody>
      <tr>
        <th>Sl. No.</th>
        <th>Description of the Document</th>
        <th>Document No. &amp; Date of Execution</th>
      </tr>
      <tr>
        <th>1.</th>
        <th>
          Registered sale deed executed by (a) Mrs. B. D. Bhagya, (b) Kumari
          Arpita D. , (c) Kumari Ranjita and (d) Mrs. B. D. Bhagya in favour
          of Mrs. Padmashree
        </th>
        <th>
          Document No. JPN-1-04681-2020-21&nbsp;<br /><br />Dated:
          05-11-2020
        </th>
      </tr>
      <tr>
        <th>2.</th>
        <th>
          Registered sale deed executed by (a) SRI. G. SURESH BABU, (b) SRI.
          SHANKAR, (c) SMT. SAROJA, (d) SRI. ROOPENDRA, (e) B and (f) GY in
          favour of SMT. B. D. BHAGYA
        </th>
        <th>
          Document No. BGR-1-00521-2018-19&nbsp;<br /><br />Dated:
          23-04-2018
        </th>
      </tr>
      <tr>
        <th>3.</th>
        <th>
          Registered confirmation deed executed by (a) SMT. GOWRAMMA and (b)
          SRI. SUNIL in favour of (a) SRI. G. SURESH BABU and (b) G. SURESH
          BABU
        </th>
        <th>
          Document No. JPN-1-09456-2015-16&nbsp;<br /><br />Dated:
          30-01-2016
        </th>
      </tr>
      <tr>
        <th>4.</th>
        <th>
          Registered sale deed executed by (a) Mrs. Saroja and (b) Mr. C.
          Roopendra (a 2a )a in favour of Mrs. Saroja
        </th>
        <th>
          Document No. JPN-1-05730-2015-16&nbsp;<br /><br />Dated:
          05-10-2015
        </th>
      </tr>
      <tr>
        <th>5.</th>
        <th>
          Registered sale deed executed by (a) SMT. BHAGYAVATHI and (b) SRI
          MUNISWAMY, UNK in favour of (a) SRI G. SURESH BABU and (b) RASIMHA
          REDDY
        </th>
        <th>
          Document No. BMH-1-04475-2012-13&nbsp;<br /><br />Dated:
          03-09-2012
        </th>
      </tr>
      <tr>
        <th>6.</th>
        <th>
          Registered sale agreement executed by (a) SMT. BHAGYAVATHI, (b)
          SRI. NAGAPPA, (c) SRI. MUNISWAMY and (d) SRI. SHANKAR in favour of
          SRI. C. NARASIMHA REDDY
        </th>
        <th>
          Document No. JPN-1-05352-2007-08&nbsp;<br /><br />Dated:
          18-01-2008
        </th>
      </tr>
    </tbody>
  </table>
</figure>
<p style="text-align: center">
  <strong>PART - II: DESCRIPTION OF THE PROPERTY</strong>
</p>
<p style="text-align: justify">
  All that piece and parcel of property bearing Survey no. 46 Khata, No. 157
  , Serial no. 821/1 Property no. 25, situated at SANTHOSH C) - SRINIDHI
  LAYOUT, SOS POST, BANGALORE | (8) MANJUNATH. G. BANNERUGHATTIA ROAD.
  KALENA AGRAHARA, BANGALORE ಣಿ measuring East to West 30 - 0 ::: ft and
  North to South 50 - 0 ::: ft, in all measuring 1500 ::: sq.ft and bounded
  on:
</p>
<p style="margin-left: 200px">
  East By&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;Property no. 24
</p>
<p style="margin-left: 200px">
  West By&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;Property no. 20
</p>
<p style="margin-left: 200px">
  North By&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;No. 4
</p>
<p style="margin-left: 200px">
  South By&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;Road.
</p>
<p></p>

<p style="text-align: center">
  <strong>PART - III : FLOW OF TITLE&nbsp;</strong>
</p>
<p style="text-align: center"><strong>Section - A</strong></p>
<p>
  1. Originally, (a) SMT. BHAGYAVATHI WIFE OF SRI NAGAPPA and (b) SRI
  MUNISWAMY, UNK SON OF SRI NAGAPPA executed a sale deed in favour of (a)
  SRI G. SURESH BABU NA and (b) RASIMHA REDDY EMPTY for property bearing
  SITE BEARING NO. 25, KATHA NO. 157, SURVEY N0. 46 and measuring 1500 :::
  sq.ft having document no. BMH-1-04475-2012-13, book no. 1, stored in CD
  no. NULL, dated 03-09-2012 and registered in the office of Bommanahalli
  Sub-Registrar, Bengaluru Urban.
</p>
<p>
  Prior to the above-mentioned deed, (a) SMT. BHAGYAVATHI W/O NAGAPPA D/O
  CHINNAPPA, (b) SRI. NAGAPPA S/O. PERUMAL, (c) SRI. MUNISWAMY S/O NAGAPPA
  and (d) SRI. SHANKAR S/O NAGAPPA UNK executed a sale agreement in favour
  of SRI. C. NARASIMHA REDDY S/O LATE CHINNAPPA REDDY for property bearing
  SITE NO. 25, SY. NO. 46, KATHA NE. 157 and measuring EMPTY having document
  no. JPN-1-05352-2007-08, book no. 1, stored in CD no. NULL, dated
  18-01-2008 and registered in the office of J.P. Nagar Sub-Registrar,
  Bengaluru Urban.
</p>
<p>
  2. Further, (a) Mrs. Saroja son of Late. Chinnappa and (b) Mr. C.
  Roopendra (a 2a )a EMPTY executed a sale deed in favour of Mrs. Saroja son
  of Mrs. C. Rekha for property bearing Survey no. 46 Property no. 25 House
  and measuring 1500 ::: sq.ft having document no. JPN-1-05730-2015-16, book
  no. 1, stored in CD no. NULL, dated 05-10-2015 and registered in the
  office of J.P. Nagar Sub-Registrar, Bengaluru Urban.
</p>
<p>
  Further, (a) SMT. GOWRAMMA SON OF LATE. CHINNAPPA and (b) SRI. SUNIL SON
  OF LATE. CHINNAPPA executed a deed of confirmation in favour of (a) SRI.
  G. SURESH BABU SON OF SRI. NARASIM and (b) G. SURESH BABU S/O NARASIMHA
  REDDY for property bearing SITE NO. 25, KATHA NO. 157, SURVEY NO. 46 and
  measuring 1500 ::: sq.ft having document no. JPN-1-09456-2015-16, book no.
  1, stored in CD no. NULL, dated 30-01-2016 and registered in the office of
  J.P. Nagar Sub-Registrar, Bengaluru Urban, confirming the absolute
  ownership of the property to (a) SRI. G. SURESH BABU SON OF SRI. NARASIM
  and (b) G. SURESH BABU S/O NARASIMHA REDDY.
</p>
<p>
  3. Further, (a) SRI. G. SURESH BABU R/, (b) SRI. SHANKAR , (c) SMT. SAROJA
  NAP, (d) SRI. ROOPENDRA S/O. CHINNAPPA, (e) B EMPTY and (f) GY D/O. LATE
  CHINNAPPA executed a sale deed in favour of SMT. B. D. BHAGYA W/OO. SRI.
  DODDAIAH. A for property bearing SITE NO. 25, KATHA NO. 157, SY. NO. 46
  and measuring 1500 ::: sq.ft having document no. BGR-1-00521-2018-19, book
  no. 1, stored in CD no. NULL, dated 23-04-2018 and registered in the
  office of Begur Sub-Registrar, Bengaluru Urban.
</p>
<p>
  4. Subsequently, (a) Mrs. B. D. Bhagya child of Mr. Doddayya &amp;a ,a,
  (b) Kumari Arpita D. EMPTY, (c) Kumari Ranjita since minor represented by
  of ,a and (d) Mrs. B. D. Bhagya EMPTY executed a sale deed in favour of
  Mrs. Padmashree wife of Mr. Somashekhara P. Kke for property bearing
  Survey no. 46 Khata, No. 157 , Serial no. 821/1 Property no. 25 and
  measuring 1500 ::: sq.ft having document no. JPN-1-04681-2020-21, book no.
  1, stored in CD no. NULL, dated 05-11-2020 and registered in the office of
  J.P. Nagar Sub-Registrar, Bengaluru Urban.
</p>
<p>
  5. Ever since then, Mrs. Padmashree wife of Mr. Somashekhara P. Kke has
  been enjoying the absolute ownership and possession of the property
  without any encumbrances, liens or pending attachments.
</p>
<p style="text-align: center"><strong>Section - B</strong></p>
<p><!-- PART 4 -->&nbsp;</p>
<p style="text-align: center">
  <strong>PART - IV: ENCUMBERANCE CERTIFICATE</strong>
</p>
<p>
  The encumbrance certificate for a period of 0 years commencing from dated
  00-00-0000 to 00-00-0000 discloses that it is not updated to reflect all
  the transactions of the property. Therefore, we cannot comment on any
  outstanding liabilities of the property.
</p>
<p>
  Thus, it is clear that the encumbrance certificate needs to be updated.
</p>
<p><!-- PART 4 -->&nbsp;</p>
<p style="text-align: center"><strong>PART - V: CONCLUSION</strong></p>
<p>
  As stated above, since the present owner has not been in clear title as
  evident from the encumbrance certificate and flow of title, we are of the
  opinion that Mrs. Padmashree wife of Mr. Somashekhara P. Kke does not have
  a valid, absolute and marketable title over the property proposed for
  security/sale.
</p>
<div class="page-break" style="page-break-after: always">
  <span style="display: none">&nbsp;</span>
</div>
<p style="text-align: center"><strong>CERTIFICATE</strong></p>
<p>
  On inspection of the documents relating to the schedule property provided
  by the applicant, we found that the documents referred above are not the
  perfect evidence of the title and we came across conflicts that would
  hinder the right, title and interest of the present owner. We further
  certify that:<br />&nbsp;
</p>
<p>
  We have made a thorough analysis and found features that would hinder the
  title holder from creating a valid mortgage/transferring the ownership.
</p>
<p>
  As evident from the encumbrance certificate and flow of title, there is an
  unclear chain of title of the property.
</p>
<p>
  There are no prior mortgages or charges pertaining to the schedule
  property as could be derived from the encumbrance certificate.
</p>
<p>
  The Khata Certificate and Khata Extract of the present owner are
  Missing/not found.
</p>
<p>
  The building plan approval of the schedule property is Missing/not found.
</p>
<p>The schedule property tax receipt is Missing/not found.</p>
<p>
  Therefore, we certify that Mrs. Padmashree wife of Mr. Somashekhara P. Kke
  is not the absolute owner and does not have a clear, valid and marketable
  title in the schedule property as per the documents provided by the
  applicant.
</p>
<p>Place :&nbsp;Bangalore<br />Date :&nbsp;13-06-2022</p>
<div class="page-break" style="page-break-after: always">
  <span style="display: none">&nbsp;</span>
</div>
<p style="text-align: center"><strong>REMARKS</strong></p>
<figure class="table">
  <table style="border: 1px solid black">
    <colgroup>
      <col style="width: 33.33%" />
      <col style="width: 33.33%" />
      <col style="width: 33.34%" />
    </colgroup>
    <tbody>
      <tr>
        <th>Sl. No.</th>
        <th>Description of the Document</th>
        <th>Remarks</th>
      </tr>
      <tr>
        <th>1.</th>
        <th>
          Registered sale deed executed by (a) Mrs. B. D. Bhagya, (b) Kumari
          Arpita D. , (c) Kumari Ranjita and (d) Mrs. B. D. Bhagya in favour
          of Mrs. Padmashree
        </th>
        <th>EMPTY</th>
      </tr>
      <tr>
        <th>2.</th>
        <th>
          Registered sale deed executed by (a) SRI. G. SURESH BABU, (b) SRI.
          SHANKAR, (c) SMT. SAROJA, (d) SRI. ROOPENDRA, (e) B and (f) GY in
          favour of SMT. B. D. BHAGYA
        </th>
        <th>EMPTY</th>
      </tr>
      <tr>
        <th>3.</th>
        <th>
          Registered confirmation deed executed by (a) SMT. GOWRAMMA and (b)
          SRI. SUNIL in favour of (a) SRI. G. SURESH BABU and (b) G. SURESH
          BABU
        </th>
        <th>EMPTY</th>
      </tr>
      <tr>
        <th>4.</th>
        <th>
          Registered sale deed executed by (a) Mrs. Saroja and (b) Mr. C.
          Roopendra (a 2a )a in favour of Mrs. Saroja
        </th>
        <th>EMPTY</th>
      </tr>
      <tr>
        <th>5.</th>
        <th>
          Registered sale deed executed by (a) SMT. BHAGYAVATHI and (b) SRI
          MUNISWAMY, UNK in favour of (a) SRI G. SURESH BABU and (b) RASIMHA
          REDDY
        </th>
        <th>EMPTY</th>
      </tr>
      <tr>
        <th>6.</th>
        <th>
          Registered sale agreement executed by (a) SMT. BHAGYAVATHI, (b)
          SRI. NAGAPPA, (c) SRI. MUNISWAMY and (d) SRI. SHANKAR in favour of
          SRI. C. NARASIMHA REDDY
        </th>
        <th>EMPTY</th>
      </tr>
      <tr>
        <th>7.</th>
        <th>Encumbrance Certificate</th>
        <th>Document missing/not found</th>
      </tr>
      <tr>
        <th>8.</th>
        <th>Khata</th>
        <th>Missing/not found</th>
      </tr>
      <tr>
        <th>9.</th>
        <th>Building Plan approval</th>
        <th>Missing/not found</th>
      </tr>
      <tr>
        <th>10.</th>
        <th>Property Tax receipt</th>
        <th>Missing/not found</th>
      </tr>
      <tr>
        <th>11.</th>
        <th>Title Search Report</th>
        <th>Unclear, not valid and not marketable title</th>
      </tr>
    </tbody>
  </table>
</figure>
<p>&nbsp;</p>
<div class="page-break" style="page-break-after: always">
  <span style="display: none">&nbsp;</span>
</div>
<p style="text-align: center">
  <strong
    >ANNEXURE - LIST OF DOCUMENTS TO COLLECT FOR CREATION OF SECURITY /
    TRANSFER OF OWNERSHIP</strong
  >
</p>
<figure class="table">
  <table style="border: 1px solid black">
    <colgroup>
      <col style="width: 33.33%" />
      <col style="width: 33.33%" />
      <col style="width: 33.34%" />
    </colgroup>
    <tbody>
      <tr>
        <th>Sl. No.</th>
        <th>Description of the Document</th>
        <th>Original or Xerox</th>
      </tr>
      <tr>
        <th>1.</th>
        <th>
          Registered sale deed executed by (a) Mrs. B. D. Bhagya, (b) Kumari
          Arpita D. , (c) Kumari Ranjita and (d) Mrs. B. D. Bhagya in favour
          of Mrs. Padmashree
        </th>
        <th>Original</th>
      </tr>
      <tr>
        <th>2.</th>
        <th>
          Registered sale deed executed by (a) SRI. G. SURESH BABU, (b) SRI.
          SHANKAR, (c) SMT. SAROJA, (d) SRI. ROOPENDRA, (e) B and (f) GY in
          favour of SMT. B. D. BHAGYA
        </th>
        <th>Original</th>
      </tr>
      <tr>
        <th>3.</th>
        <th>
          Registered confirmation deed executed by (a) SMT. GOWRAMMA and (b)
          SRI. SUNIL in favour of (a) SRI. G. SURESH BABU and (b) G. SURESH
          BABU
        </th>
        <th>Original</th>
      </tr>
      <tr>
        <th>4.</th>
        <th>
          Registered sale deed executed by (a) Mrs. Saroja and (b) Mr. C.
          Roopendra (a 2a )a in favour of Mrs. Saroja
        </th>
        <th>Original</th>
      </tr>
      <tr>
        <th>5.</th>
        <th>
          Registered sale deed executed by (a) SMT. BHAGYAVATHI and (b) SRI
          MUNISWAMY, UNK in favour of (a) SRI G. SURESH BABU and (b) RASIMHA
          REDDY
        </th>
        <th>Original</th>
      </tr>
      <tr>
        <th>6.</th>
        <th>
          Registered sale agreement executed by (a) SMT. BHAGYAVATHI, (b)
          SRI. NAGAPPA, (c) SRI. MUNISWAMY and (d) SRI. SHANKAR in favour of
          SRI. C. NARASIMHA REDDY
        </th>
        <th>Original</th>
      </tr>
    </tbody>
  </table>
</figure>
<p>&nbsp;</p>
<p>
  <strong>Disclaimer:</strong> This opinion is solely based on the documents
  provided by the applicant. Lending Katalyst Private Limited shall not be
  liable for any inaccuracy that may occur due to failure of furnishing any
  information/document necessary for ascertaining the title of the property
  and the absolute liability shall be that of the applicant.&nbsp;<br /><br />This
  information is prepared for Lending Katalyst customer only and any sharing
  of information without express consent of Lending Katalyst Private Limited
  is forbidden.
</p>
<p>
  <br /><br />---------------------------------------------------------------------------------------End
  of
  Report----------------------------------------------------------------------------------------
</p>
<div class="page-break" style="page-break-after: always">
  <span style="display: none">&nbsp;</span>
</div>`;
  const [state, setState] = useState(html);

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setState(value);
    console.log("state", state);
  };

  const handleCkEditorState = (event, editor) => {
    const data = editor.getData();
    setState(data);
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
  const clickEvent = () => {
    let htmlString = HTMLFILE;
    let htmlObject = document.createElement("html");
    htmlObject.innerHTML = htmlString;
    // htmlObject.getElementsByTagName("/body");
    // console.log("🚀 ~ htmlObject", state.message);
    let divElement = document.createElement("div");
    divElement.innerHTML = state;
    htmlObject.getElementsByTagName("body")[0].appendChild(divElement);
    // body.innerHTML = "<p>hellow</p>";
    console.log(htmlObject);
  };
  return (
    <div className="container mt-4">
      <button className="mb-4" onClick={clickEvent}>
        Click That
      </button>
      <div className="wrapper">
        <CKEditor
          editor={Editor}
          id="hello"
          // config={editorConfiguration}
          data={html}
          onReady={(editor) => {
            setState(html);
            setState(html);
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={handleCkEditorState}
        />
      </div>
    </div>
  );
};

export default Contact;
