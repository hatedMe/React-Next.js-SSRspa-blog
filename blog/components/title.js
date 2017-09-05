








export default class Title extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <header className="article-header">
                <h1>{this.props.infos}</h1>
                <p className="text-muted">dsfdgfd</p>
            </header>
        )
    }
}
