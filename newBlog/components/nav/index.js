import Link from 'next/link'
import React from 'react';
import Foot from './foot';
import NavItem from './navItem';



export default class Nav extends React.Component {
    constants(props){
        
    }
    static async getInitialProps({query, pathname}) {
        
        return {
            pathname,
            id : query
        }
    }

    render() {
        const navInfo = [{
            url:'/',
            classNames : "icon-zhuye1",
            navName :"主页"
        },{
            url:'/archives',
            classNames : "icon-guidangxiangmu",
            navName :"归档"
        },{
            url:'/categories',
            classNames : "icon-biaoqian",
            navName :"分类"
        },{
            url:'/tags',
            classNames : "icon-library-2",
            navName :"标签"
        },{
            url:'/repository',
            classNames : "icon-lianjie",
            navName :"项目"
        },{
            url:'/books',
            classNames : "icon-shuji",
            navName :"书单"
        },{
            url:'/books',
            classNames : "icon-wenjianjia",
            navName :"友链"
        },{
            url:'/about',
            classNames : "icon-fenxiang",
            navName :"关于"
        }];

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
                            { 
                                navInfo.map((e,i)=>{
                                    return <NavItem key={i} {...e} />
                                }) 
                            }
                        </ul>
                    </nav>
                    <Foot />
                </div>
            </section>
        )
    }
}