import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";

type PropsType = {
    url: string;
};

const Viewer = (props: PropsType) => {
    const [dataURL, setDataURL] = useState("");
    const { url } = props;

    useEffect(() => {
        const loadPDF = async () => {
            const doc = new jsPDF();
            // Ye nhi chal rha
            var img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.src = url;
            var img = new Image();
            img.src = "/image.jpg";
            doc.addImage(img, "jpg", 0, 0, img.offsetWidth, 270);

            doc.rect(12, 57.5, 26, 5);
            const blobData = new Blob([doc.output("blob")], {
                type: "application/pdf",
            });
            const blobUrl = URL.createObjectURL(blobData);
            setDataURL(blobUrl);
        };
        loadPDF();
    }, []);

    return (
        <embed
            src={`${dataURL}#toolbar=0`}
            className="w-full h-full"
            type="application/pdf"
            id="pdfViewer"
        />
    );
};

export default Viewer;
