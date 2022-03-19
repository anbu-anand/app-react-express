import { connect } from 'react-redux';
import { fetchPosts } from '../../state/reducers/userReducer';

import { Page as PageBase } from './Page';

const mapStateToProps = (state) => ({ posts: state.users.posts });

const mapDispatchToProps = (dispatch) => ({
    getPost: dispatch(fetchPosts()),
});

export const Page = connect(mapStateToProps, mapDispatchToProps)(PageBase);
