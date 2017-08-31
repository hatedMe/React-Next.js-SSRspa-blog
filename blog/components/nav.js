import Link from 'next/link'

import React from 'react';

import Foot from '../components/foot'

export default class Nav extends React.Component {
    static async getInitialProps({query, pathname}) {

        return {}

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
                                    src=""
                                    width="200"
                                    height="200"/>
                            </a>
                            <h2 id="name" className="hidden-xs hidden-sm">作者</h2>
                            <h3 id="title" className="hidden-xs hidden-sm hidden-md">Web Developer & Designer</h3>
                            <small id="location" className="text-muted hidden-xs hidden-sm">
                                <i className="fa fa-map-marker"></i> Shenzhen, China
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
                                <a href="">
                                    <i className="fa fa-fw fa-dashboard icon-qq"></i>
                                    <span className="menu-title">菜单</span>
                                </a>
                            </li>
                            <li className="menu-item menu-item-">
                            <a href="<%- url_for(theme.menu[i]) %>">
                                <i className="fa fa-fw fa-dashboard"></i>
                                <span className="menu-title">菜单</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-">
                                <a href="<%- url_for(theme.menu[i]) %>">
                                    <i className="fa fa-fw fa-dashboard"></i>
                                    <span className="menu-title">菜单</span>
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