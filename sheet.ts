interface Celldata {
	object?: 'ABSOLUTE' | 'RELATIVE' | 'ACTION';
	color: string;
	pointer: Number | String;
	content: string;
}

export interface Layerdata {
	projectCode: string;
	layerName: string;
	layerIndex: Number;
	layerNumber: string;
	stt: Date | null;
	end: Date | null;
	aud: string;
	iss: string;
	isc: string;
	body: Array<Array<Celldata>>;
}
