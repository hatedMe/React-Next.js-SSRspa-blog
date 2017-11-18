import React from 'react';
class ContentFooter extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div>
                        <h3 className="item__title">关于</h3>
                        <div className="item__content">
                            <p className="item__text">本站是基于 Hexo 搭建的静态资源博客，主要用于分享日常学习、生活及工作的一些心得总结，欢迎点击右下角订阅 rss。</p>
                            <ul className="footer__contact-info">
                                <li className="contact-info__item">
                                    <i className="iconfont icon-address"></i>
                                    <span>Guangzhou, Guangdong Province, China</span>
                                </li>
                                <li className="contact-info__item">
                                    <i className="iconfont icon-email2"></i>
                                    <span>chenxiaowu1994@outlook.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default ContentFooter;