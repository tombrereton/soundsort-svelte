import type { PageServerLoad } from './$types';

export interface Playlist {
	id: string;
	name: string;
	created_at: string;
	schedule: string;
}

export const load: PageServerLoad = async () => {
	// Dummy data
	const playlists: Playlist[] = [
		{
			id: '1',
			name: 'Morning Vibes',
			created_at: '2023-01-01T08:00:00Z',
			schedule: 'Daily at 8 AM'
		},
		{
			id: '2',
			name: 'Workout Mix',
			created_at: '2023-02-15T06:30:00Z',
			schedule: 'Every Monday, Wednesday, Friday at 6:30 AM'
		},
		{
			id: '3',
			name: 'Chill Evening',
			created_at: '2023-03-10T18:00:00Z',
			schedule: 'Daily at 6 PM'
		}
	];

	return {
		playlists
	};
};
