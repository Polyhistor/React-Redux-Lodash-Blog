import JSONPlaceholder from '../APIs/JSONPlaceholder'
import _ from 'lodash'

// a function that returns a function
export const fetchPosts = () => async dispatch => {

        // we get the request asynchronously
        const response = await JSONPlaceholder.get('/posts')

        // we are manually dispatching the action
        dispatch({ type: 'FETCH_POSTS', payload: response.data })

  }

// memorizing the function
export const fetchUser = (id) => dispatch => _fetchUser (id, dispatch)


const _fetchUser = _.memoize(async (id, dispatch) => {
        // getting the list of users
        const response = await JSONPlaceholder.get(`/users/${id}`)

        // manual dispatch again
        dispatch({ type: 'FETCH_USER', payload: response.data})       
})


