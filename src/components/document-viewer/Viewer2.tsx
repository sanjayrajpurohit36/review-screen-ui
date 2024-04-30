import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

type PropsType = {
    url: string;
};

const Viewer = (props: PropsType) => {
    const { url } = props;
    return (
        <Document file={url}>
            <Page pageNumber={1} size={"A0"} />
        </Document>
    );
};

export default Viewer;
