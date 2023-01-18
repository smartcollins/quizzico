import slide_image_one from "../images/slid-img.png";
import slide_image_two from "../images/slid-img-two.png";
import slide_image_three from "../images/slid-img-three.png";

import homeSlide1 from "../images/sch-one.jpeg";
import homeSlide2 from "../images/sch-two.png";
import homeSlide3 from "../images/sch-three.png";
import homeSlide4 from "../images/sch-four.jpg";
import homeSlide5 from "../images/sch-five.png";

import { User, Users, UsersThree, Briefcase,Student, GraduationCap    } from "phosphor-react";

export const sliderData = [
    {image: slide_image_one, caption: "create, share and play quizzes whenever and wherever you want", id:1},
    {image: slide_image_two, caption: "find fun and intersting quizzes to boost up your knowledge", id:2},
    {image: slide_image_three, caption: "play quiz challenges together with your friends", id:3},
];

export const accountCategory = [
    {icon:<User size={24} color={'white'}/>, color:"#2e72fd", title:"personal"},
    {icon:<Users size={24} color={'white'}/>, color:"#fd9b10", title:"Teacher"},
    {icon:<UsersThree size={24} color={'white'}/>, color:"#25d597", title:"student"},
    {icon:<Briefcase size={24} color={'white'}/>, color:"#e46974", title:"professional"},
];

export const workplaceCategory = [
    {icon:<GraduationCap r size={24} color={'white'}/>, color:"#2e72fd", title:"school"},
    {icon:<Student size={24} color={'white'}/>, color:"#fd9b10", title:"higher education"},
    {icon:<UsersThree size={24} color={'white'}/>, color:"#25d597", title:"teams"},
    {icon:<Briefcase size={24} color={'white'}/>, color:"#e46974", title:"business"},
];

export const homeCarouselImages = [homeSlide1, homeSlide2, homeSlide3, homeSlide4, homeSlide5]