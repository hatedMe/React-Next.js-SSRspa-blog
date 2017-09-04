import Link from 'next/link'
import Head from './head'
import Nav from './nav'


export default class Com extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="main-center">
                <Head title={this.props.title} />
                <Nav/>
                <section className="main">
                    <header className="article-header">
                        <h1 data-itemprop="title">文章列表</h1>
                        <p className="text-muted">Total 1 articles</p>
                    </header>
                    { this.props.children }
                </section>
            </div>
        )
    }
}
