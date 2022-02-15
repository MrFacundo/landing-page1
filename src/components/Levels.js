import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

import milonga1 from "../assets/images/milonga1.jpg";
import milonga2 from "../assets/images/milonga2.jpg";
import milonga3 from "../assets/images/milonga3.jpg";
import milonga4 from "../assets/images/milonga4.jpg";
import milonga5 from "../assets/images/milonga5.jpg";

const levels = [
	{
		title: "GROUP LESSONS",
		description:
			"Curso anual de conhecimento, estudo e aperfeiçoamento do Tango Argentino como Dança Social",
		photo: milonga1,
	},
	{
		title: "WORKSHOPS",
		description:
			"Curso anual para alunos que já têm algum conhecimento de Tango Argentino. Estudo da linguagem tangueira e das suas possibilidades napista de dança.",
		photo: milonga2,
	},
	{
		title: "PRÁCTICA",
		description:
			"Curso anual onde abordam-se as necessidades do bailarino de Tango napista de dança, sequências, musicalidade, condução e utilização do espaço",
		photo: milonga3,
	},
	{
		title: "PRIVATE LESSONS",
		description:
			"abordam-se as necessidades do bailarino de Tango na pista de dança, sequências, musicalidade, condução e utilização do espaço.",
		photo: milonga4,
	},
];

// styles

const LevelsContainer = tw.div`
    flex
    flex-col
    w-[90%]
	md:w-[80%]
    font-text
    pb-4
`;

const LevelsWrapper = styled(motion.div)`
	${tw`
		flex
		md:pb-5
    `};
	align-self: ${(props) => (props.left ? "start" : "self-end")};
	flex-direction: ${(props) => (props.left ? "row" : "row-reverse")}; ;
`;

const Level = tw(motion.div)`
	flex
    flex-col
    min-h-[14rem]
    w-[18rem]
    border-[1px]
    border-color[#001F33]
	md:min-h-[20rem]
	md:min-w-[30rem]
	justify-between

`;
const Title = styled.div`
	${tw`
		text-3xl
		p-3
		pt-5
		md:text-6xl
		md:p-8
    `};
	text-align: ${(props) => (props.left ? "start" : "end")};
`;

const Description = styled.div`
	${tw`
		text-base
		px-4
		text-right
		pb-5
		md:px-8
		md:pt-6
		md:text-left
		md:text-lg
    `};
	text-align: ${(props) => (props.left ? "start" : "end")};
`;

const Image = tw(motion.img)`
	hidden
	md:flex
	max-h-[20rem]
	w-[40rem]
	px-16
	object-cover
`;

const Button = tw(motion.div)`
	flex
    flex-col
    min-h-[14rem]
    w-[18rem]
    border-[1px]
    border-color[#001F33]
	md:min-h-[20rem]
	md:min-w-[30rem]
	justify-center
	hover:text-white
	hover:bg-[#001F33]
	duration-300
	cursor-pointer
	items-center
`;

// animations

const levelVariant = {
	hidden: { opacity: 0, y: 200 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeIn",
			duration: 1,
		},
	},
};

const imageVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 1,
			ease: "easeIn",
			duration: 1,
		},
	},
};

const Levels = () => {
	return (
		<LevelsContainer>
			{levels.map((level, index) => {
				return (
					<LevelsWrapper
						key={index}
						left={+(index % 2 === 0)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.8, margin: "100px" }}
					>
						<Level variants={levelVariant}>
							<Title left={+(index % 2 === 0)}>{level.title}</Title>
							<Description>{level.description}</Description>
						</Level>
						<Image variants={imageVariant} src={level.photo} alt="" />
					</LevelsWrapper>
				);
			})}
			<LevelsWrapper
				left
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.8, margin: "100px" }}
			>
				<Button variants={levelVariant}>
					<Title left>BOOK A CLASS</Title>
					<BsChevronRight className="mt-[1rem] text-[3rem] md:text-[5rem]" />
				</Button>
				<Image variants={imageVariant} src={milonga5} alt="" />
			</LevelsWrapper>
		</LevelsContainer>
	);
};

export default Levels;
