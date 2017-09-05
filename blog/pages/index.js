


import Com from '../components/com'
import Article from '../components/article';
import 'isomorphic-fetch';

export default class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    static async getInitialProps({query, pathname}) {
        let rusllut = await fetch('http://localhost:4040/api/startarticle');
        let res = await rusllut.json();

        return {
            id : query,
            list: res.data
        }
    }

    async componentWillMount(){
        
        
    }

    render() {
        return (
            <Com infos="首页">
                <div className="content article-list">
                {
                    //console.log(this.props.list )
                    this.props.list.map((e,i)=>{
                        return <Article key={i} {...e} />
                    })
                }
                </div>
            </Com>
        )
    }
}
