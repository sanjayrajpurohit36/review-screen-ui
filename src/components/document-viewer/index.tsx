import Viewer from "./Viewer2";

const DocumentViewer = () => {
    return (
        <div className="bg-[#525659] flex justify-center items-center h-[calc(100vh-3rem)] p-4 overflow-y-auto">
            <Viewer url="/file.pdf" />
        </div>
    );
};

export default DocumentViewer;
