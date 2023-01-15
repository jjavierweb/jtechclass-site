export interface Service {
	image: string;
	serviceName: string;
	description: string;
}

export interface Review {
	stars: number;
	review: string;
	customerImage: string;
	author: string;
	authorImage: string;
	authorPosition: string;
}

export interface Menu {
	name: string;
	url: string;
}
