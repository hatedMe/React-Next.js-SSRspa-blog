import NextHead from 'next/head'

import stylesheet from '../style/style.scss'
import githubstylesheet from '../style/atom-one-light.scss'



const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="description" content="网站描述" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <style dangerouslySetInnerHTML={{ __html: githubstylesheet }} />
  </NextHead>
)


export default Head
