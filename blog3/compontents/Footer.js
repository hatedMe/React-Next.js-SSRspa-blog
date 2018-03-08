import React, { Component } from 'react';
class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon"><span className="copyright-year">©2012 - 2018
                <span className="footer-author">Henry Huang.</span>
                    <span className="power-by">Powered by <a className="hexo-link" href="https://hexo.io/">Hexo</a> and <a className="theme-link" href="https://github.com/henryhuang/hexo-theme-polarbearsimple">Polar Bear Simple</a>
                    </span>
                </span>
            </footer>
        );
    }
}

export default Footer;