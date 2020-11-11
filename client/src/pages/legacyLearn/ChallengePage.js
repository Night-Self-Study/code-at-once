import React, { useState } from 'react';
import ChallengeTemplate from '#/components/challenge/ChallengeTemplate';
import ChallengePaper from '#/components/challenge/ChallengePaper';
import Editor from '#/components/challenge/Editor';
import EditorController from '#/components/challenge/EditorController';
import MyContainer from '#/components/common/MyContainer';

const dummyChallengeToDemo = {
  title: '책 정리하기',
  challengeDescription: [
    `책 이름과 책에 대한 번호가 input으로 주어질 때, 번호가 가장 작은 책에 대해서, 해당 책 이름과 책의 번호를 출력하시오.`,
  ],
  inputDescription: ['책 이름과 책 번호가 입력된다.'],
  outputDescription: ['책 이름과 책 번호가 출력된다.'],
  inputExample: [1, 2, 3, 4],
  outputExample: [2, 4, 6, 8],
};

export default function ChallengePage() {
  const [language, setLanguage] = useState('python');

  return (
    <MyContainer>
      <ChallengeTemplate
        paper={
          <ChallengePaper
            challenge={dummyChallengeToDemo}
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
