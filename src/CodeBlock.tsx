import * as React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  language?: string
  value: string
}
const CodeBlock = (props: Props) => {
  return (
    <SyntaxHighlighter language={props.language}>
      {props.value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
