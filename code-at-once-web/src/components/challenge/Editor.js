import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import { Box, makeStyles } from '@material-ui/core';

const EditorValue = `def solution(source):
  answer = ''
  
  return answer`;

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		background: 'white',
	},
});

const Editor = () => {
	const [editorValue, setEditorValue] = useState(EditorValue);
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<AceEditor
				style={{ width: '100%', height: '100%' }}
				placeholder='Placeholder Text'
				mode='python'
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
