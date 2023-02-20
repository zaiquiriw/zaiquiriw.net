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
				<p>Howdy! I'm glad you were trying to learn more about me!
					Unfortunately I haven't quite set this site up yet. Check out my
					<a href="https://github.com/zaiquiriw"> github </a> to
					see what I've done in the meantime.
				</p>
				<p>
					All you need to know is I'm a passionate programmer, hoping to create
					ml models on the edge for my career. I also have interest in 
					full stack app development, keyboard design, and environmental conservation.
				</p>
			</section>
		</Layout>
	)
}
