import Link from 'next/link';
import Com from '../components/com';
import Article from '../components/article';
import 'isomorphic-fetch';
import moment from 'moment';


export default class Archives extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            year:[ 2017 , 2017 , 2017 , 2017 , 2017 , 2017 , 2017 , 2017 , 2017 , 2017 ]
        };
    }

    static async getInitialProps({query, pathname}) {
        let rusllut = await fetch(`http://localhost:4040/api/getAllArticle`);
        let res = await rusllut.json();

        return {
            data : res.data
        }
    }

    async componentWillMount() {
        
    }

    render() { 
        const { data } = this.props.data;
        const basepath = '../article?id='
        return (
            <Com infos="归档" title="博客归档">
                <div className="content article-list archive">
                    <div className="collection-title" >
                        <h2 className="archive-year">2017</h2>
                    </div>
                    {
                        this.props.data.map((e,i)=>{
                            return (
                                <div className="archive-post" key={i}>
                                    <span className="archive-post-time">{moment( e.createTime ).format('MMM Do')}
                                    </span>
                                    <span className="archive-post-title">
                                        <a href={`${basepath}${e.articleId}` } className="archive-post-link">{e.title }</a>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </Com>
        )
    }
}
