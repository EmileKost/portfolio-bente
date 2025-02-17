"use client";

import type { Project } from "@/types/types.common";

import { HomeSlider } from "./_components/HomeSlider";

const projects: Array<Project> = [
	{
		slug: "the-unwritten-lawswwwwww",
		title: "The Unwritten Laws",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-1.png",
			alt: "Mock image",
		},
		cursor: "See project",
	},
	{
		slug: "the-unwritten-lawwwwwwws",
		title: "Consumer Society",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-2.png",
			alt: "Mock image",
		},
		cursor: "consume",
	},
	{
		slug: "the-unwritten-lawwwwwws",
		title: "Consumers",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-1.png",
			alt: "Mock image",
		},
		cursor: "Discover",
	},
	{
		slug: "the-unwritten-lawwwwws",
		title: "The Unwritten Lawssss",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-2.png",
			alt: "Mock image",
		},
		cursor: "consume",
	},
	{
		slug: "the-unwritten-lawwwws",
		title: "Consumersss",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-1.png",
			alt: "Mock image",
		},
		cursor: "Discover",
	},
	{
		slug: "the-unwritten-lawwws",
		title: "The Unwritten Lawssddss",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-2.png",
			alt: "Mock image",
		},
		cursor: "consume",
	},
	{
		slug: "the-unwritten-lawws",
		title: "Consumerssasdfs",
		profession: "UX/UI & Visual Design",
		image: {
			src: "/projects/project-1.png",
			alt: "Mock image",
		},
		cursor: "Discover",
	},
];

export default function HomePage() {
	return (
		<>
			<HomeSlider projects={projects} />
		</>
	);
}
