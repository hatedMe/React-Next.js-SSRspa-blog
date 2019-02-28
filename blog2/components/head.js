import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = '蒋敏前端博客'
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="author" content="蒋敏" />
    <meta name="keywords" content="蒋敏,前端,博客" />
    <link rel="stylesheet" href="/static/css/style.min.css" />
    <link rel="stylesheet" href="/static/css/atom-one-light.css" />
    <script src="https://hm.baidu.com/hm.js?950e8d7c515bcd8b980309e7dc079efd"></script>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
