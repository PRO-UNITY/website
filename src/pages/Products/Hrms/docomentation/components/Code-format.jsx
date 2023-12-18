/* eslint-disable react/prop-types */
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeFormat = ({ JsonData }) => {
  return (
    <div>
      <SyntaxHighlighter
        language="json"
        showLineNumbers
        customStyle={{ background: "#fff" }}
        style={docco}
      >
        {JSON.stringify(JsonData, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFormat;
