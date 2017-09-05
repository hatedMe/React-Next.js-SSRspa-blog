import Link from 'next/link'

import React from 'react';

import Foot from '../components/foot'

export default class Nav extends React.Component {
    static async getInitialProps({query, pathname}) {
        
        return {
            pathname,
            id : query
        }
    }

    render() {
        return (
            <section className="mainside">
                <div className="slimContent">
                    <div className="navbar-header">
                        <div className="profile-block text-center">
                            <a id="avatar" href="<%= profile.follow %>" target="_blank">
                                <img
                                    className="thumb-xl img-circle img-rotate"
                                    src="/static/images/avatar.png"
                                    width="200"
                                    height="200"/>
                            </a>
                            <h2 id="name" className="hidden-xs hidden-sm">HetaMe</h2>
                            <h3 id="title" className="hidden-xs hidden-sm hidden-md">Web Developer & Designer</h3>
                            <small id="location" className="text-muted hidden-xs hidden-sm">
                                <i className="fa fa-map-marker"></i> Chongqing, China
                            </small>
                        </div>

                        <div className="search" id="search-form-wrap">
                            <form className="search-form sidebar-form">
                                <div className="input-group">
                                    <input type="text" className="search-form-input form-control" placeholder="Search" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="search-form-submit btn btn-flat"><i className="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <button
                            className="navbar-toggle collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#main-navbar"
                            aria-controls="main-navbar"
                            aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>
                    <nav id="main-navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav main-nav">
                            <li className="menu-item menu-item-home active">
                                <a href="/">
                                    <i className="iconfont icon-yibiaopan"></i>
                                    <span className="menu-title">首页</span>
                                </a>
                            </li>
                            <li className="menu-item menu-item-">
                            <a href="/archives">
                                <i className="iconfont icon-guidangxiangmu"></i>
                                <span className="menu-title">归档</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                            <a href="/categories">
                                <i className="iconfont icon-biaoqian"></i>
                                <span className="menu-title">分类</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                            <a href="/tags">
                                <i className="iconfont icon-daima"></i>
                                <span className="menu-title">标签</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                            <a href="/repository">
                                <i className="iconfont icon-flyme_icon-"></i>
                                <span className="menu-title">项目</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                            <a href="/books">
                                <i className="iconfont icon-shuji"></i>
                                <span className="menu-title">书单</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                            <a href="">
                                <i className="iconfont icon-wenjianjia"></i>
                                <span className="menu-title ">友链</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                            <a href="/about">
                                <i className="iconfont icon-fenxiang"></i>
                                <span className="menu-title">关于</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                    <Foot />
                </div>
            </section>
        )
    }
}