import Link from 'next/link'
import Head from './head'
import Nav from './nav'
import Title from '../components/title'

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
                    <Title infos={this.props.infos} />
                    { this.props.children }
                </section>
            </div>
        )
    }
}
