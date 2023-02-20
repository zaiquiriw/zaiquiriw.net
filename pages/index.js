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
			</section>
			<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#57196a"></stop><stop offset="95%" stop-color="#ffc517"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,150 0,150 C 106.70813397129183,158.66985645933016 213.41626794258366,167.3397129186603 301,178 C 388.58373205741634,188.6602870813397 457.043062200957,201.31100478468898 560,189 C 662.956937799043,176.68899521531102 800.4114832535884,139.41626794258374 892,138 C 983.5885167464116,136.58373205741626 1029.3110047846892,171.02392344497608 1113,179 C 1196.6889952153108,186.97607655502392 1318.3444976076553,168.48803827751198 1440,150 C 1440,150 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#57196a"></stop><stop offset="95%" stop-color="#ffc517"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 63.645933014354085,312.20095693779905 127.29186602870817,324.4019138755981 234,329 C 340.70813397129183,333.5980861244019 490.47846889952143,330.59330143540666 587,317 C 683.5215311004786,303.40669856459334 726.7942583732059,279.22488038277515 824,263 C 921.2057416267941,246.77511961722487 1072.3444976076555,238.50717703349284 1184,246 C 1295.6555023923445,253.49282296650716 1367.8277511961724,276.7464114832536 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#57196a"></stop><stop offset="95%" stop-color="#ffc517"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,450 0,450 C 99.67464114832538,453.5406698564593 199.34928229665076,457.08133971291863 311,443 C 422.65071770334924,428.91866028708137 546.2775119617224,397.21531100478467 627,407 C 707.7224880382776,416.78468899521533 745.5406698564594,468.05741626794264 838,477 C 930.4593301435406,485.94258373205736 1077.55980861244,452.55502392344494 1187,441 C 1296.44019138756,429.44497607655506 1368.22009569378,439.72248803827756 1440,450 C 1440,450 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
		</Layout>
	)
}
