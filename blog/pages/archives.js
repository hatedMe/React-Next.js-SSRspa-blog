import Com from '../components/com'
import Article from '../components/article';

export default class Archives extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    static async getInitialProps({query, pathname}) {

        return {id: query}
    }

    async componentWillMount() {}

    render() {
        return (
            <Com infos="归档" title="可惜">
                <div className="content article-list archive">
                    <div className="collection-title">
                        <h2 className="archive-year">2017</h2>
                    </div>
                    <div className="archive-post">
                        <span className="archive-post-time">
                            Aug 28
                        </span>
                        <span className="archive-post-title">
                            <a href="/2017/08/28/i18next/" className="archive-post-link">
                                i18next
                            </a>
                        </span>
                    </div>
                    <div className="archive-post">
                        <span className="archive-post-time">
                            Jul 7
                        </span>
                        <span className="archive-post-title">
                            <a
                                href="/2017/07/07/non-root-user-config-for-ssh-key-login/"
                                className="archive-post-link">
                                错误排查：非ROOT用户使用密钥进行ssh登录提示输入密码
                            </a>
                        </span>
                    </div>
                    <div className="archive-post">
                        <span className="archive-post-time">
                            Jun 21
                        </span>
                        <span className="archive-post-title">
                            <a href="/2017/06/21/use-editorconfig/" className="archive-post-link">
                                使用EditorConfig
                            </a>
                        </span>
                    </div>

                    <div className="collection-title">
                        <h2 className="archive-year">2016</h2>
                    </div>
                    <div className="archive-post">
                        <span className="archive-post-time">
                            Aug 28
                        </span>
                        <span className="archive-post-title">
                            <a href="/2017/08/28/i18next/" className="archive-post-link">
                                i18next
                            </a>
                        </span>
                    </div>
                    <div className="archive-post">
                        <span className="archive-post-time">
                            Jul 7
                        </span>
                        <span className="archive-post-title">
                            <a
                                href="/2017/07/07/non-root-user-config-for-ssh-key-login/"
                                className="archive-post-link">
                                错误排查：非ROOT用户使用密钥进行ssh登录提示输入密码
                            </a>
                        </span>
                    </div>
                    <div className="archive-post">
                        <span className="archive-post-time">
                            Jun 21
                        </span>
                        <span className="archive-post-title">
                            <a href="/2017/06/21/use-editorconfig/" className="archive-post-link">
                                使用EditorConfig
                            </a>
                        </span>
                    </div>

                </div>
            </Com>
        )
    }
}
