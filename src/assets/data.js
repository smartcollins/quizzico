import slide_image_one from "../images/slid-img.png";
import slide_image_two from "../images/slid-img-two.png";
import slide_image_three from "../images/slid-img-three.png";

import homeSlide1 from "../images/sch-img15.png";
import homeSlide2 from "../images/sch-img14.png";
import homeSlide3 from "../images/sch-img12.png";
import homeSlide4 from "../images/sch-img13.png";
import homeSlide5 from "../images/sch-five.jpg";
import homeSlide7 from "../images/sch-seven.png";
import homeSlide8 from "../images/sch-four.jpg";
import homeSlide9 from "../images/sch-10.png";
import homeSlide10 from "../images/sch-11.png";

import miniSlide1 from "../images/mini-img.png";
import miniSlide2 from "../images/mini-img1.png";
import miniSlide3 from "../images/mini-img2.png";
import miniSlide4 from "../images/mini-img3.png";
import miniSlide5 from "../images/mini-img4.png";
import miniSlide6 from "../images/mini-img2.jpg";

import followImg1 from "../images/know-1.png";
import followImg2 from "../images/know-2.png";
import followImg3 from "../images/know-3.png";
import followImg4 from "../images/know-4.png";

import discoverImg1 from "../images/discover-1.png";
import discoverImg3 from "../images/discover-3.png";
import discoverImg4 from "../images/discover-4.png";
import discoverImg5 from "../images/discover-5.png";
import discoverImg6 from "../images/discover-6.png";

import author from '../images/author.jpg'
import author2 from '../images/author2.jpg'
import author3 from '../images/author3.jpg'
import author4 from '../images/author4.jpg'

import lection from '../images/lection.jpg'
import lection2 from '../images/lection2.jpg'
import lection3 from '../images/lection3.jpg'
import lection4 from '../images/lection4.jpg'
import lection5 from '../images/lection5.jpg'
import lection6 from '../images/lection6.jpg'
import lection7 from '../images/lection7.jpg'
import lection8 from '../images/lection8.jpg'
import lection9 from '../images/lection9.jpg'
import lection10 from '../images/lection10.jpg'

import {
  User,
  Users,
  UsersThree,
  Briefcase,
  Student,
  GraduationCap,
} from "phosphor-react";

export const sliderData = [
  {
    image: slide_image_one,
    caption: "create, share and play quizzes whenever and wherever you want",
    id: 1,
  },
  {
    image: slide_image_two,
    caption: "find fun and intersting quizzes to boost up your knowledge",
    id: 2,
  },
  {
    image: slide_image_three,
    caption: "play quiz challenges together with your friends",
    id: 3,
  },
];

/**
 * ?This is the data for the account category page that is passed as prop from the account category  page.
 */
export const accountCategory = [
  {
    icon: <User size={24} color={"white"} />,
    color: "#2e72fd",
    title: "personal",
  },
  {
    icon: <Users size={24} color={"white"} />,
    color: "#fd9b10",
    title: "Teacher",
  },
  {
    icon: <UsersThree size={24} color={"white"} />,
    color: "#25d597",
    title: "student",
  },
  {
    icon: <Briefcase size={24} color={"white"} />,
    color: "#e46974",
    title: "professional",
  },
];

/**
 * ?This is the data for the workplace page that is passed as prop from the workplace page.
 */
export const workplaceCategory = [
  {
    icon: <GraduationCap size={24} color={"white"} />,
    color: "#2e72fd",
    title: "school",
  },
  {
    icon: <Student size={24} color={"white"} />,
    color: "#fd9b10",
    title: "higher education",
  },
  {
    icon: <UsersThree size={24} color={"white"} />,
    color: "#25d597",
    title: "teams",
  },
  {
    icon: <Briefcase size={24} color={"white"} />,
    color: "#e46974",
    title: "business",
  },
];

/**
 * ?This is the large images of the home slider or carousel component
 */
export const homeCarouselImages = [
  homeSlide1,
  homeSlide2,
  homeSlide3,
  homeSlide4,
  homeSlide5,
  homeSlide7,
  homeSlide8,
  homeSlide9,
  homeSlide10,
];

/**
 * ?This is the smaller images beneath the home slider or carousel component
 */
export const homeMiniImage = [
  miniSlide1,
  miniSlide2,
  miniSlide3,
  miniSlide4,
  miniSlide5,
  miniSlide6,
];

/**
 * ?Images for people you may know. This is supposed to come from the backend
 * ?But let use this data for now
 */
export const peopleYouMayKnow = [
  {
    image: followImg1,
    title: "king delee",
    id: "1",
    email: "test@test.com",
    contact: "09030099916",
    verify: true,
  },
  {
    image: followImg2,
    title: "samuel delee",
    id: "2",
    email: "sam@test.com",
    contact: "09030099916",
    verify: false,
  },
  {
    image: followImg3,
    title: "ben manny",
    id: "3",
    email: "oguaju@test.com",
    contact: "0813253611",
    verify: false,
  },
  {
    image: followImg4,
    title: "pinkin vim",
    id: "4",
    email: "neche@test.com",
    contact: "722920026",
    verify: true,
  },
];

export const discoverData = [
  {
    image: discoverImg1,
    miniImage: miniSlide1,
    timeAgo: "2 months ago",
    caption: "smarter with Productivity",
    writer: "Titus Kitamura",
    played: 5600,
    id: "6",
  },
  
  {
    image: discoverImg3,
    miniImage: miniSlide3,
    timeAgo: "2 years ago",
    caption: "having fun & always smart",
    writer: "Titus Kitamura",
    played: 18500,
    id: "4",
  },
  {
    image: discoverImg4,
    miniImage: miniSlide4,
    timeAgo: "6 months ago",
    caption: "can you imagine, world of elites",
    writer: "darly neils",
    played: 4900,
    id: "3",
  },
  {
    image: discoverImg5,
    miniImage: miniSlide5,
    timeAgo: "2 years ago",
    caption: "back to school, get to feet",
    writer: "Titus Kitamura",
    played: 1000,
    id: "2",
  },
  {
    image: discoverImg6,
    miniImage: miniSlide6,
    timeAgo: "5 months ago",
    caption: "what is your favorite learning core",
    writer: "elmer laverly",
    played: 6200,
    id: "1",
  },
];


export const authors = [{
  img: author,
  txt: "Rayford"
},{
  img: author2,
  txt: "Wilard"
},{
  img: author3,
  txt: "Hannah"
},{
  img: author4,
  txt: "Geoffrey"
},{
  img: author,
  txt: "Hoseh"
},{
  img: author2,
  txt: "Auora"
},{
  img: author3,
  txt: "Jasmine"
},{
  img: author4,
  txt: "Saliem"
}]

export const collections = [{
  img: lection
},{
  img: lection2
},{
  img: lection3
},{
  img: lection4
},{
  img: lection5
},{
  img: lection6
},{
  img: lection7
},{
  img: lection8
},{
  img: lection9
},{
  img: lection10
},]

export const category = [{
  txt:"recent",
  bold:true
},{
  txt:"back to school"
},{
  txt:"finance and banking"
},{
  txt:"darron kulikowski"
},{
  txt:"business and marketing"
},{
  txt:"art & design"
},{
  txt:"geoferry dorrance"
},{
  txt:"food & drink"
},{
  txt:"productivity quiz"
}]