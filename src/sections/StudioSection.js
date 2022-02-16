import styled from "styled-components";
import tw from "twin.macro";
import { Title } from "../styles";
import { Element } from "react-scroll";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import studio1 from "../assets/images/studio1.jpeg";
import studio2 from "../assets/images/studio2.jpeg";
import studio3 from "../assets/images/studio3.jpeg";

const studioImages = [
	{ image: studio1, description: "description 1" },
	{ image: studio2, description: "description 2" },
	{ image: studio3, description: "description 3" },
];

const StudioSectionContainer = tw(Element)`
        w-full
        min-h-screen
        flex
        flex-col
        relative
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
        items-center
        // bg-[rgba(107, 185, 10, 0.3)]
        bg-[#DEBA93]

`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-white
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const StudioSectionWrapper = tw.div`
    w-[90%]
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-3xl
`;

const Item = styled.div`
	${tw`
        flex
        flex-col
    `}
	img {
		${tw`
            max-w-full
            max-h-full
        `}
	}
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

const StudioSection = () => {
	return (
		<StudioSectionContainer name="Studio">
			<Title>OUR STUDIO</Title>
			<SectionInfo>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, esse
				magnam modi, cum laboriosam sunt numquam error placeat harum at,
				doloremque suscipit deleniti quasi illo in tenetur? Quidem, totam
				molestiae.
			</SectionInfo>
			<StudioSectionWrapper>
				<Carousel
					dynamicHeight={false}
					autoPlay
					showStatus={false}
					swipeable={true}
					showThumbs={false}
					// animationHandler={"fade"}
					infiniteLoop={true}
				>
					{studioImages.map((image, index) => {
						return (
							<Item key={index}>
								<img src={image.image} alt={image.description} />
								{/* <Description>{image.description} </Description> */}
							</Item>
						);
					})}
				</Carousel>
			</StudioSectionWrapper>
		</StudioSectionContainer>
	);
};

export default StudioSection;
