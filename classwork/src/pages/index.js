import Link from 'next/link';
import Layout from '../app/components/Layout';

const Home = () => (
  <Layout>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Layout>
);

export default Home;
