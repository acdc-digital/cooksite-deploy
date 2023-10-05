import React from "react";

type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  return (
    <iframe
      src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdf_url)}`}
      className="w-full h-full"
    ></iframe>
  );
};

export default PDFViewer;
