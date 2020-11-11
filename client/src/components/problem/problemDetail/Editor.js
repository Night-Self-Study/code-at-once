import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

import { useCodeContext } from '#/contexts/CodeContext';
import { JAVA, PYTHON } from '#/lib/constants';

const pythonDefaultForm = `def solution(command):
  answer = ''
  
  return answer`;

const javaDefaultForm = `class solution {
	public String solution(String[] command) {
		String answer = "";
		return answer;
	}
}`;

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    background: 'white',
  },
  formControl: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
});

export default function Editor() {
  const classes = useStyles();
  const { code, setCode, language } = useCodeContext();

  useEffect(() => {
    setCode(language === PYTHON ? pythonDefaultForm : javaDefaultForm);
  }, [language, setCode]);

  return (
    <div className={classes.root}>
      <AceEditor
        style={{ width: '100%', height: '100%' }}
        placeholder='Type code'
        mode={language === PYTHON ? PYTHON : JAVA}
        theme='monokai'
        name='webEditor'
        value={code}
        onChange={(v) => {
          setCode(v);
        }}
        fontSize={'1rem'}
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
    </div>
  );
}
