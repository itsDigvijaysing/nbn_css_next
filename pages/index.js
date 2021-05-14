// import styles from '../styles/Home.module.css'
// className={styles.container}

import Link from 'next/link'
import { CodeBlock, dracula } from 'react-code-blocks'

export default function Home() {


  return (
    <>
      <div>
        <CodeBlock
          language="html"
          text="hello monster "
          showLineNumbers="5"
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </>
  )
}
