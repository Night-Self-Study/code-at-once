import React, { useState } from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const EditorValue = `function consoleLogExample() {
    console.log("test");
}`;

const Editor = () => {
  const [editorValue, setEditorValue] = useState(EditorValue);
  return (
    <EditorWrapper>
      <AceEditor
        style={{ width: '100%', height: '100%' }}
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="webEditor"
        //   onLoad={this.onLoad}
        value={editorValue}
        onChange={(v) => {
          setEditorValue(v);
        }}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
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
  * {
    font-family: consolas;
    line-height: 1;
  }
`;
export default Editor;
