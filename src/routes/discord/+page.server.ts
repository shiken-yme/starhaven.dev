import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(307, 'https://discord.gg/paper-mario-modding');
}
