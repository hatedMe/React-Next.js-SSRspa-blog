import Link from 'next/link'
import Head from './head'
import Nav from './nav'
import Title from '../components/title'

export default class Com extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {title , description} = this.props
        return (
            <div className="main-center">
                <Head title={title} description={description} />
                <Nav/>
                <section className="main">
                    <Title infos={this.props.infos} />
                    { this.props.children }
                </section>
            </div>
        )
    }
}
