export const    ROUTE_PATHS = {
    INDEX:"/",
    ACCOUNT: "/account",
    SIGNIN: "/sign-in",
    FORGOT: "/forgot",
    CONFIRM: "/confirm",
    OCCUPATION: "/occupation",
    WORKPLACE: "workplace",
    HOME: "/home",
    FINDFRIENDS: "/find-friends",
    DISCOVER: "/discover",
    NEW:"/new",
    TOPAUTHORS: "/topAuthor",
    TOPAUTHORSID:"/topAuthor/:title",
    USERCOLLECTION:"/topAuthor/:title/userCollection",
    USERABOUT:"/topAuthor/:title/userAbout",
    LIBRARY: "/library",
};

// root path = topAuthor/:title/userCollection
//This is the button/link details
 export const details = (title)=> [
    {path: `/topAuthor/${title}`, targetId: "quizzo", text:"Quizzo"},
    {path: `/topAuthor/${title}/userCollection`, targetId: "collection", text:"Collections"},
    {path: `/topAuthor/${title}/userAbout`, targetId: "about", text:"About"},
  ]
  export const iconsHover = ` relative cursor-pointer h-fit w-6 h-6 
  hover:after:scale-x-125  hover:after:scale-y-150 after:content-[''] 
  after:block after:h-full after:w-full after:rounded-full after:absolute after:top-0
   after:left-0 after:transition-all after:duration-300 after:bg-gray-100 after:-z-10 hover:after:opacity-100 
   after:opacity-0 `

   