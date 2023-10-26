import type { EntryGenerator, PageServerLoad } from './$types';

export const entries = (() => {
	return [
		{
			slug: 'hello-world'
		}
	];
}) satisfies EntryGenerator;

export const load = (async ({ params }) => {
	return {
		slug: params.slug
	};
}) satisfies PageServerLoad;
