import React, { useState } from "react";
import { TextStyleConfig } from "./TextStyleConfig";
import { ImageUpload } from "./ImageUpload";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const GeneratePDF = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generatePDF = () => {
    const documentDefinition = {
        content: [
            {text: `Titulo: ${title}`},
            {text: `Description: ${description}`}
        ],
       
    };

    pdfMake.createPdf(documentDefinition).download();
  }

  return (
    <div className="container">
      <label className="label">
        Título:
        <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label className="label">
        Descrição:
        <input type="text" className="input" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label>
      <TextStyleConfig />
      <ImageUpload />
      <button className="button" onClick={generatePDF}>Gerar PDF</button>
    </div>
  );
};
