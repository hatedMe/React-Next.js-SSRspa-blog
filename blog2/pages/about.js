


import Com from '../components/com'
import Article from '../components/article';
import 'isomorphic-fetch';





export default class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    static async getInitialProps({query, pathname}) {
      
        return {
            
        }
    }

    async componentWillMount(){
        
        
    }

    render() {
        return (
            <Com>
                <div className="content article-list">
                  about
                </div>
            </Com>
        )
    }
}
