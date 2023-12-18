import HrmsDocumentationLayout from "../../../../Layout/HrmsDocumentationLayout";
import CodeFormat from "./components/Code-format";

const DocumentationHome = () => {
  return (
    <HrmsDocumentationLayout>
      <div className="doc-content">
        <CodeFormat />
      </div>
    </HrmsDocumentationLayout>
  );
};

export default DocumentationHome;
