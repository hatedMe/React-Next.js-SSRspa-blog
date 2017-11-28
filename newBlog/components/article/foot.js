




import React, { Component } from 'react';


class ArticleFoot extends Component {
    render() {
        return (
            <div className="article-foot">
                <div className="recommend">
                    推荐 <span></span>
                </div>
                <div className="share">
                    <a>微博</a>
                    <a>空间</a>
                    <a>微信</a>
                </div>
            </div>
        );
    }
}

export default ArticleFoot;

