import { SvelteKitAuth, type DefaultSession } from '@auth/sveltekit';
import Spotify from '@auth/sveltekit/providers/spotify';

export interface AccessToken {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	expires?: number;
}

declare module '@auth/sveltekit' {
	interface Session {
		token: AccessToken;
		user: {
			id: string;
			email: string;
			image: string;
			name: string;
		} & DefaultSession['user'];
	}
}

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Spotify],
	callbacks: {
		jwt: async ({ token, user, account }) => {
			if (user) {
				token.id = user.id;
			}
			if (account) {
				token.access_token = account.access_token;
				token.token_type = account.token_type;
				token.expires_in = account.expires_in;
				token.refresh_token = account.refresh_token;
				token.expires = account.expires_at;
			}
			return token;
		},
		session: async ({ session, token }) => {
			session.user.id = token.id as string;
			session.token = {
				access_token: token.access_token as string,
				token_type: token.token_type as string,
				expires_in: token.expires_in as number,
				refresh_token: token.refresh_token as string,
				expires: token.expires_at as number
			};
			return session;
		}
	}
});
