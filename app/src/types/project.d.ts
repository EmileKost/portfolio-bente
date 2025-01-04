export type Project = {
	title: string;
	discipline: string;
	image: string; // will change later
	video?: string; // will change later
	projectType: string;
	client?: string;
	date: Date;
	media: Array<string>;
	text: Array<string>;
};

export type ProjectCard = Omit<
	Project,
	"discipline" | "media" | "date" | "text"
> & {
	index: number;
	length: number;
	className?: string;
};
