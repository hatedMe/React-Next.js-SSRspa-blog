import Link from 'next/link';
import React from 'react';

export default class Foot extends React.Component {
    static async getInitialProps({query, pathname}) {

        return {}

    }

    render() {
        return (
            <div className="footer">
                <ul className="social-links">
                    <li><a href="https://github.com/cofess" target="_blank" ><i className="iconfont icon-github"></i></a></li>
                    <li><a href="http://weibo.com/cofess" target="_blank" ><i className="iconfont icon-twitter"></i></a></li>
                    <li><a href="https://twitter.com/iwebued" target="_blank" ><i className="iconfont icon-behance"></i></a></li>
                    <li><a href="https://www.behance.net/cofess" target="_blank" ><i className="iconfont icon-fenxiang"></i></a></li>
                    <li><a href="/atom.xml" target="_blank" ><i className="icon-weibo iconfont"></i></a></li>
                </ul>
                <div className="copyright">
                    © 2017 Min jiang
                    <div className="publishby">
                        Powered by <a href="http://hexo.io/" target="_blank">hexo </a>. 
                        Theme by <a href="https://github.com/cofess" target="_blank"> cofess </a>base on <a href="https://github.com/cofess/hexo-theme-pure" target="_blank">pure</a>.
                    </div>
                </div>
            </div>
        )
    }
}