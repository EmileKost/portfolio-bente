import { useEffect, useState } from "react";

import { useBreakpointValues } from "@/hooks/useBreakpointValues";
import { removeVowels } from "@/utils/removeVowels";

export const SCREEN_MD = 768;

export const useFullTextContent = (
	text: string,
	shouldRemoveVowels: boolean = true,
	textType: "word" | "sentence" = "word"
) => {
	const [content, setContent] = useState<string>(text);
	const { width } = useBreakpointValues();

	useEffect(() => {
		if (width <= SCREEN_MD && shouldRemoveVowels) {
			return setContent(removeVowels(text));
		}

		return setContent(text);
	}, [width, content, text, shouldRemoveVowels]);

	return content.split(textType === "word" ? "" : " ");
};
