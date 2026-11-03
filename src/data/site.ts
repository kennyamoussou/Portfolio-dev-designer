// All the site copy in one place — placeholder content to replace with the
// photographer's real details.

/**
 * Colour theme. `accent: null` = pure black & white. Otherwise the accent
 * colour only touches small details (cursors, squares, progress, active menu).
 * Presets: blue '#2E68FF' (ink '#FFFFFF') · yellow '#FFD60A' (ink '#0E0E0E').
 */
export const THEME: { accent: string | null; accentInk: string } = {
	accent: '#2E68FF',
	accentInk: '#FFFFFF',
};

export const ACCENT_PRESETS = {
	blue: { accent: '#2E68FF', accentInk: '#FFFFFF' },
	yellow: { accent: '#FFD60A', accentInk: '#0E0E0E' },
	none: { accent: null, accentInk: '#0E0E0E' },
} as const;

export const SITE = {
	name: 'DEV-DESIGNER',
	city: '',
	email: 'kennyamoussou65@gmail.com',
	/** Optional — leave empty ('') to hide the phone everywhere */
	phone: '',
	socials: [
		{ label: 'Instagram', href: '#' },
		{ label: 'Tik-tok', href: 'https://www.tiktok.com/@devdesigner1' },
		{ label: 'LinkedIn', href: '#' },
	],
};

/**
 * Every visible sentence of the site, section by section. Titles are arrays:
 * one entry per line of the big pixel title (keep each line short).
 */
export type ExtraField =
	| { label: string; kind: 'date' }
	| { label: string; kind: 'select'; options: string[] }
	| { label: string; kind: 'text'; placeholder: string };

export const COPY = {
	hero: {
		label: '[Portfolio]',
		tagline: 'Sites WordPress, design, front-end. Huit images pour entrer dans l’atelier.',
	},
	intro: {
		label: '[01] — Studio',
		title: ['Webmaster', '& designer.'],
		text: 'Je conçois, design et développe des sites web sur WordPress et en front-end sur mesure. Des sites clairs, rapides et faciles à gérer au quotidien.',
		primaryCta: 'Démarrer un projet',
		secondaryCta: 'Voir les projets',
	},
	services: { label: 'Services' },
	work: {
		label: '[02] — Travaux',
		title: ['Projets', 'récents.'],
		text: 'Sites vitrines, boutiques en ligne et interfaces. Cliquez sur un projet pour le découvrir en détail.',
	},
	process: {
		label: '[03] — Processus',
		title: ['Du brief', 'à la mise en ligne.'],
	},
	about: {
		label: '[04] — À propos',
		title: ['Le web,', 'bien fait.'],
		text: 'Je suis webmaster, designer et développeur front-end. Je crée des sites WordPress et des interfaces sur mesure, du maquettage à la mise en ligne.',
		cta: 'Travaillons ensemble',
		/** Area of the portrait kept free of pixels (the face), in 0–1 coordinates */
		face: { x0: 0.3, y0: 0.1, x1: 0.72, y1: 0.5 },
	},
	testimonials: {
		label: '[05] — Ils en parlent',
		rating: '4/5 · 10 avis',
	},
	faq: {
		label: '[06] — FAQ',
		title: ['Questions', 'fréquentes.'],
		aside: 'Une autre question ?',
		asideLink: 'Écrivez-moi',
		asideEnd: ', je réponds sous 24 h.',
	},
	contact: {
		label: '[07] — Contact',
		title: ['Parlons', 'de votre site.'],
		text: 'Racontez-moi votre projet : je vous réponds sous 24 h avec une première proposition et un devis.',
		typeLabel: 'Type de projet',
		sessionTypes: ['Site vitrine', 'Boutique en ligne', 'Refonte', 'Design UI / UX', 'Autre'],
		extraField: { label: 'Budget', kind: 'select', options: ['< 150000 fcfa', '150000 – 300000 fcfa', '300000 – 500000 fcfa', '> 500000 fcfa'] } as ExtraField,
		messageLabel: 'Votre besoin',
		messagePlaceholder: 'Votre activité, les pages souhaitées, vos exemples de sites… quelques mots suffisent.',
		responseTime: 'Réponse sous 24 h',
		mailSubject: 'Demande de devis',
	},
	footer: {
		description: 'Webmaster, designer et développeur front-end. Sites WordPress et interfaces sur mesure.',
	},
	header: { cta: 'Démarrer un projet', ctaShort: 'Démarrer' },
};

export const NAV = [
	{ label: 'Travaux', id: 'travaux' },
	{ label: 'Processus', id: 'processus' },
	{ label: 'À propos', id: 'apropos' },
	{ label: 'Contact', id: 'contact' },
];

export const STATS = [
	{ value: '10+', label: 'Sites livrés' },
	{ value: '1', label: 'Années d’expérience' },
	{ value: '4/5', label: 'Note moyenne clients' },
	{ value: '2 sem.', label: 'Délai moyen' },
];

/** Services scrolling in the band under the intro (short, one or two words each) */
export const SERVICES = [
	'Sites WordPress',
	'Webdesign',
	'Front-end',
	'E-commerce',
	'UI / UX',
	'Refonte',
	'Maintenance',
	'SEO de base',
];

export const PROCESS = [
	{
		title: 'Brief',
		text: 'Un appel de 20 minutes pour comprendre votre activité, vos objectifs et vos contraintes.',
		duration: 'S-4',
		icon: 'chat',
	},
	{
		title: 'Maquettes',
		text: 'Arborescence, maquettes et design validés ensemble avant la moindre ligne de code.',
		duration: 'S-3',
		icon: 'board',
	},
	{
		title: 'Développement',
		text: 'Intégration WordPress ou front-end sur mesure, rapide, responsive et facile à gérer.',
		duration: 'S-2',
		icon: 'code',
	},
	{
		title: 'Mise en ligne',
		text: 'Tests, mise en ligne et prise en main : vous repartez autonome pour faire vivre votre site.',
		duration: 'Jour J',
		icon: 'rocket',
	},
] as const;

export const TESTIMONIALS = [
	{
		quote: 'Le dev-designer a refait notre site vitrine en moin de deux semaines. Il est clair, rapide, et on le modifie nous-mêmes sans difficulté.',
		author: 'Marianne Dahouenon',
		role: 'Gérante — DMBTP',
	},
	{
		quote: 'Une vraie écoute et un design soigné. Notre boutique en ligne a doublé ses commandes dès le premier mois.',
		author: 'Boris Kpadonou',
		role: 'Fondateur — Kazama tech',
	},
	{
		quote: 'Un site qui me permet de mettre en avant mes plats et mes recttes de cuisine pour tous mes clients dans le monde.',
		author: 'Excellence Goho',
		role: 'Chef Cuisinié — Manger Manger',
	},
];

export const FAQ = [
	{
		q: 'Combien coûte un site web ?',
		a: 'Cela dépend du nombre de pages et des fonctionnalités. Après notre premier échange, vous recevez un devis clair et détaillé, sans surprise.',
	},
	{
		q: 'Combien de temps faut-il pour créer mon site ?',
		a: 'Comptez en moyenne trois à quatre semaines pour un site vitrine, un peu plus pour une boutique en ligne.',
	},
	{
		q: 'Pourrai-je modifier mon site moi-même ?',
		a: 'Oui. Avec WordPress, vous gérez vos textes, images et pages en toute autonomie. Une prise en main est incluse.',
	},
	{
		q: 'Vous occupez-vous de l’hébergement et du nom de domaine ?',
		a: 'Je vous conseille et m’occupe de la configuration, pour que tout soit en ligne sans que vous ayez à vous en soucier.',
	},
	{
		q: 'Proposez-vous la maintenance ?',
		a: 'Oui, des mises à jour, sauvegardes et petites évolutions régulières sont possibles avec une formule de maintenance.',
	},
];
