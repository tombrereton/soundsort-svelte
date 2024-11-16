export interface PlaylistFormData {
	genre: string;
	bpm: number | null;
}

export interface PlaylistTrack {
	id: string;
	name: string;
	artists: string[];
	albumName: string;
	albumImage: string;
}

export interface PlaylistResults {
	genre: string;
	bpm?: string;
	tracks: PlaylistTrack[];
	error?: string;
}
