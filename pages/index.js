import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Howdy! I'm glad you were trying to learn more about me
					but I haven't quite set this site up yet. Check out my
					<a href="https://github.com/zaiquiriw"> github </a> to
					see what I've done.
				</p>
			</section>
		</Layout>
	)
}
