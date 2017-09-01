

import 'isomorphic-fetch'

import Com from './com'
import Article from '../components/article';

export default class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }
    static async getInitialProps({query, pathname}) {
        return {
            id : query
        }
    }

    async componentWillMount(){
        // let rusllut = await fetch('api/userInfo');
        // let res = await rusllut.json();
        // console.log(res);
        // this.setState({
        //     sex : res.data.sex,
        //     name : res.data.name,
        //     age : res.data.age
        // })
    }

    render() {
        return (
            <Com>
                <div className="content article-list">
                {
                    [1,2,3,1,2,3,1,2,3,1,2,3].map((e,i)=>{
                        return <Article key={i} />
                    })
                }
                </div>
            </Com>
        )
    }
}
