import NextHead from 'next/head'

import stylesheet from '../style/style.scss'



const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <meta name="description" content="网站描述" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </NextHead>
)


export default Head
