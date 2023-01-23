import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Howdy! Looks like you want to visit my portfolio and see
					what I do. Sadly I haven't got that quite set up yet.
					For now, head to{' '}
					<a href="https://github.com/zaiquiriw">my github</a>{' '}
					to see what I am about!</p>
			</section>
		</Layout>
	);
}
