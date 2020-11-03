import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { Box, makeStyles } from '@material-ui/core';

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

const Editor = ({ language }) => {
	const [editorValue, setEditorValue] = useState('');
	const classes = useStyles();

	useEffect(() => {
		setEditorValue(language === 'python' ? pythonDefaultForm : javaDefaultForm);
	}, [language]);

	return (
		<Box className={classes.root}>
			<AceEditor
				style={{ width: '100%', height: '100%' }}
				placeholder='Placeholder Text'
				mode={language === 'python' ? 'python' : 'java'}
				theme='monokai'
				name='webEditor'
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
		</Box>
	);
};

export default Editor;
