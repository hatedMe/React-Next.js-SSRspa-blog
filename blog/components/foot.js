import Link from 'next/link'

import React from 'react';

export default class Foot extends React.Component {
    static async getInitialProps({query, pathname}) {

        return {}

    }

    render() {
        return (
            <div className="footer">
                <ul className="social-links">
                    <li><a href="https://github.com/cofess" target="_blank" title="" data-toggle="tooltip" data-placement="top" data-original-title="Github"><i className="fa fa-github"></i></a></li>
                    <li><a href="http://weibo.com/cofess" target="_blank" title="" data-toggle="tooltip" data-placement="top" data-original-title="Weibo"><i className="fa fa-weibo"></i></a></li>
                    <li><a href="https://twitter.com/iwebued" target="_blank" title="" data-toggle="tooltip" data-placement="top" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.behance.net/cofess" target="_blank" title="" data-toggle="tooltip" data-placement="top" data-original-title="Behance"><i className="fa fa-behance"></i></a></li>
                    <li><a href="/atom.xml" target="_blank" title="" data-toggle="tooltip" data-placement="top" data-original-title="Rss"><i className="fa fa-rss"></i></a></li>
                </ul>
                <div className="copyright">
                    © 2017 John Doe
                    <div className="publishby">
                        Powered by <a href="http://hexo.io/" target="_blank">Hexo</a>. 
                        Theme by <a href="https://github.com/cofess" target="_blank"> cofess </a>base on <a href="https://github.com/cofess/hexo-theme-pure" target="_blank">pure</a>.
                    </div>
                </div>
            </div>
        )
    }
}