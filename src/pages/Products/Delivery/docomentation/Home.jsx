import DeliveryDocumentationLayout from "../../../../Layout/DeliveryDocumentationLayout";
import CodeFormat from "./components/Code-format";

const DocumentationHome = () => {
  return (
    <DeliveryDocumentationLayout>
      <div className="doc-content">
        <CodeFormat />
      </div>
    </DeliveryDocumentationLayout>
  );
};

export default DocumentationHome;
