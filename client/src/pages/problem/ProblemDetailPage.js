import React, { useState } from 'react';

import Editor from '#/components/problem/problemDetail/Editor';
import Paper from '#/components/problem/problemDetail/Paper';
import Template from '#/components/problem/problemDetail/Template';
import EditorController from '#/components/problem/problemDetail/EditorController';
import MyContainer from '#/components/common/MyContainer';

import { dummyProblemDataToDemo } from '#/lib/dummyDB';

export default function DetailPage() {
  const [language, setLanguage] = useState('python');

  return (
    <MyContainer>
      <Template
        paper={
          <Paper
            data={dummyProblemDataToDemo}
            editorController={
              <EditorController language={language} setLanguage={setLanguage} />
            }
          />
        }
        editor={<Editor language={language} />}
      />
    </MyContainer>
  );
}
