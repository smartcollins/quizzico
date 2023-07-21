export const ROUTE_PATHS = {
  INDEX: "/",
  OCCUPATION: "/occupation",
  WORKPLACE: "/occupation/workplace",
  ACCOUNT: "/occupation/account",
  CONFIRM: "/confirm",
  FORGOT: "/forgot",
  HOME: "/home",
  SIGNIN: "/sign-in",
  FINDFRIENDS: "/find-friends",
  DISCOVER: "/discover",
  NEW: "/new",
  TOPAUTHORS: "/topAuthor",
  COLLECTIONS: "/collections",
  COLLECTIONSINFO: "/collections/:infoId",
  TOPAUTHORSID: "/topAuthor/:title",
  USERCOLLECTION: "/topAuthor/:title/userCollection",
  USERABOUT: "/topAuthor/:title/userAbout",
  LIBRARY: "/library",
  LIBRARY_QUIZ: "/library/Quizzo",
  LIBRARY_QUIZ_COLLECTION: "Quizzo/collections",
  LIBRARY_FAVORITES: "/library/Favorites",
  LIBRARY_COLLABO: "/library/Collaboration",
  NEWCOLLECTION:"/collection/createNew",
  CREATEQUIZ: "/createQuiz",
  QUIZDETAILS: "/quiz-details",
  QURCODE: "/quiz-details/QRCode",
  QUESTIONS: "/questions"
};

// root path = topAuthor/:title/userCollection
//This details is the button/link details
export const details = (title) => [
  { path: `/topAuthor/${title}`, targetId: "quizzo", text: "Quizzo" },
  {
    path: `/topAuthor/${title}/userCollection`,
    targetId: "collection",
    text: "Collections",
  },
  { path: `/topAuthor/${title}/userAbout`, targetId: "about", text: "About" },
];

export const iconsHover = ` relative cursor-pointer h-fit w-6 h-6 
  hover:after:scale-x-125  hover:after:scale-y-150 after:content-[''] 
  after:block after:h-full after:w-full after:rounded-full after:absolute after:top-0
   after:left-0 after:transition-all after:duration-300 after:bg-gray-100 after:-z-10 hover:after:opacity-100 
   after:opacity-0 `;
