import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Title } from "../globalStyles";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import NewsletterForm from "../components/NewsletterForm";
import bgMobile from "../assets/images/c3.jpg";

import {
	BsFacebook,
	BsInstagram,
	BsTelephone,
	BsYoutube,
} from "react-icons/bs";

const location = {
	address: "Clube Ferroviário de Portugal",
	lat: 38.71915288600478,
	lng: -9.118489015809267,
};

// styles

const ContactContainer = styled(Element)`
	${tw`
	text-white
    w-full
    flex
    justify-center
	font-text
	relative
	`};

	@media only screen and (max-width: 768px) {
		/* bg mobile non ios */

		@supports not (-webkit-overflow-scrolling: touch) {
			background-size: 100%;
			background-repeat: no-repeat;
			background: url(${bgMobile}) fixed;
		}

		/* bg mobile ios */

		@supports (-webkit-overflow-scrolling: touch) {
			background-color: #d4a573;
		}
	}

	@media only screen and (min-width: 769px) {
		/* bg desktop non ios */

		@supports not (-webkit-overflow-scrolling: touch) {
			background: url(${bgMobile}) fixed;
			background-size: 100%;
			background-position: 100% 25%;
		}

		/* bg desktop ios */

		@supports (-webkit-overflow-scrolling: touch) {
			background: url(${bgMobile});
			background-position: 100% 25%;
		}
	}
`;

const BgGradient = styled.div`
	${tw`
	absolute
	w-[100%]
	h-full
	bg-[rgba(107, 40, 169, 0.3)]
         `};
	@media only screen and (max-width: 768px) {
		@supports (-webkit-overflow-scrolling: touch) {
			display: none;
		}
	}
`;

const ContactSectionWrapper = tw.div`
    max-w-[90%]
    height[90%]
    flex
	flex-col
	lg:my-[3rem]
	lg:flex-row
	lg:items-stretch
	z-20
`;

const SectionTitle = tw(Title)`
	max-h-[12rem]
	w-[90%]
	font-normal
	text-align[left]
	md:text-align[center]
	md:text-5xl
	mx-auto
	border-t-2 
	lg:border-t-0
`;

const Description = tw.div`
	w-[80%]
	min-h-[8rem]
	text-[1rem]
	md:text-[1.5rem]
	lg:text-[1.2rem]
	m-auto
`;

const Address = tw.div`
    lg:border-r-2
    flex-1
	pb-10
	h-auto
`;

const AddressDescription = tw(Description)`
	lg:ml-0
`;

const Registration = tw.div`
	lg:border-r-2
	flex-1
	pb-10
	lg:pb-0
`;

const ContactDescription = tw(Description)`
`;

const Contacts = tw.div`
	w-[90%]
	md:w-[70%]
	pt-5
	margin[auto]
	text-[1.2rem]
	md:text-[1.5rem]
	lg:text-[1.2rem]
	font-semibold
`;

const SocialIcons = tw.div`
	pt-5
	max-w-[25rem]
	flex
	margin[auto]
	justify-around
`;

const Button = tw.a`
	text-4xl
	md:text-5xl
	hover:text-[#deb992]
	transition-colors
	duration-200
`;

const Newsletter = tw.div`
	flex-1
`;
const ContactSection = () => {
	const { t } = useTranslation();

	return (
		<ContactContainer className="border-t-2 lg:border-t-0" name="Contact">
			<BgGradient></BgGradient>
			<ContactSectionWrapper>
				<Address>
					<SectionTitle style={{ border: "none" }}>
						{t("contact_section.title_1")}
					</SectionTitle>
					<AddressDescription>
						{t("contact_section.description_1")}
					</AddressDescription>
					<Map location={location} zoomLevel={14} />
				</Address>
				<Registration>
					<SectionTitle>{t("contact_section.title_2")}</SectionTitle>
					<ContactDescription>
						{t("contact_section.description_2")}
					</ContactDescription>
					<ContactForm />
					<Contacts>
						<p className="flex flex-row pb-3">
							<BsTelephone className="mr-3 text-3xl" />
							(+351) 916 192 919 || 935 478 559
						</p>
						<p>lisboaemtango@gmail.com</p>
					</Contacts>
				</Registration>
				<Newsletter>
					<SectionTitle>{t("contact_section.title_3")}</SectionTitle>
					<Description>{t("contact_section.description_3")} </Description>
					<NewsletterForm />
					<div className="py-[3rem]">
						<SectionTitle>{t("contact_section.title_4")}</SectionTitle>
						<SocialIcons>
							<Button
								href="https://www.instagram.com/lisboaemtango/"
								target={"_blank"}
								rel="noopener noreferrer"
								title="Instagram account"
							>
								<BsInstagram />
							</Button>
							<Button
								href="https://www.facebook.com/lisboaemtango"
								target={"_blank"}
								rel="noopener noreferrer"
								title="Facebook account"
							>
								<BsFacebook />
							</Button>
							<Button
								href="https://www.youtube.com/channel/UCqxHTF_eaM3oP4-Gmlji-kw"
								target={"_blank"}
								rel="noopener noreferrer"
								title="Youtube account"
							>
								<BsYoutube />
							</Button>
						</SocialIcons>
					</div>
				</Newsletter>
			</ContactSectionWrapper>
		</ContactContainer>
	);
};

export default ContactSection;
