import * as React from 'react';
import ReactMarkdown from 'react-markdown';
/** @jsx jsx */
import { jsx } from '@emotion/core'

function App() {
  const input = '# This is a header\n\nAnd this is a paragraph'
  const [text, setText] = React.useState(input)
  return (
    <div css={{
      display: "flex",
      justifyContent: "space-between",
    }}>
      <div>
        <textarea rows={40} cols={40} value={text} onChange={e => setText(e.target.value)}/>
      </div>
      <div css={{
      }}>
        <ReactMarkdown source={text}></ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
