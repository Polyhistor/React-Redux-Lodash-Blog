import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions'
import UserHeader  from './UserHeader'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderList() {
        return this.props.post.map( p => {
            return (
                <div className="item" key={p.id}>
                    <i className="large middle aligned icon user" />
                    <div className="contet">
                        <div className="description">
                            <h2>{p.title}</h2>
                            <p>{p.body}</p>
                        </div>
                        <UserHeader userId={p.userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
        return <div className="ui relaxed divided list"> { this.renderList() } </div>
    }
}

const mapStatetoProps = (state) => {
    return { post : state.post}
}

export default connect(mapStatetoProps, { fetchPosts: fetchPosts })(PostList)