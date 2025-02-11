import { RefObject } from "react";
import { create } from "zustand";

export interface UseInViewFunctions {
	setInView: (ref: RefObject<unknown>, isInView: boolean) => void;
}

export interface InViewObj extends UseInViewFunctions {
	[key: string]: boolean;
}

// Store
