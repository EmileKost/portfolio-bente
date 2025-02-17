export type Media = {
	src: string;
	alt: string;
};

export type Project = {
	slug: string;
	title: string;
	profession: string;
	image: {
		src: string;
		alt: string;
	};
	cursor?: string;
};
