import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Actions'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const { user } = this.props 

        if (!user) {
            return null
        }

        return <div className="header">{ user.name }</div>
    }
}

const mapStatetoProps = (state, ownProps) => {
    return { user: state.user.find(u => u.id === ownProps.userId) }
}

export default connect(mapStatetoProps, { fetchUser : fetchUser })(UserHeader)