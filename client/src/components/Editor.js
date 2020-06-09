import React from "react";
import styled from "styled-components";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const EditorValue = `function consoleLogExample() {
    console.log();
}`;

const Editor = () => {
  return (
    <EditorWrapper>
      <AceEditor
        style={{ width: "100%", height: "100%" }}
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="webEditor"
        //   onLoad={this.onLoad}
        //   onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={EditorValue}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;
export default Editor;
