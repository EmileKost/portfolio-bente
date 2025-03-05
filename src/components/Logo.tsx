import LogoDesktop from "@/assets/svg/logo-large.svg";
import LogoMobile from "@/assets/svg/logo-mobile.svg";

export const Logo = () => {
	return (
		<div className="w-full flex items-end">
			<div className="w-full items-center justify-center">
				{/* TODO: Check animation library that Rano mentioned */}
				<LogoDesktop className="w-full hidden md:block" />
				<LogoMobile className="w-full block md:hidden" />
			</div>
		</div>
	);
};
