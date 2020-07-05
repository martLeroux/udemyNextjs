import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({router}) => (
    <Layout title={router.query.title}>
        <p>Lorem ipsum</p>
    </Layout>
)

export default withRouter(Post);