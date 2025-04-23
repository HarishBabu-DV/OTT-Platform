import { AiFillHome,AiOutlineInfoCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoSettingsOutline,IoClose,IoCloseCircleSharp,IoPlayOutline  } from "react-icons/io5";
import { MdDashboard,MdLocalMovies,MdAdd ,MdDelete,MdOutlineCategory } from "react-icons/md";
import { FaUser,FaCheck,FaRegFolderOpen,FaVolumeHigh,FaVolumeXmark   } from "react-icons/fa6";
import { FaBell ,FaUserCircle,FaEye,FaEyeSlash,FaEdit,FaCheckCircle   } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { RiRemoteControlFill } from "react-icons/ri";
import { SlCloudUpload } from "react-icons/sl";
import { PiPopcornFill } from "react-icons/pi";
import { LuListPlus } from "react-icons/lu";
import movie1 from './movie1.mp4'
import movie2 from './movie2.mp4'
import movie3 from './movie3.mp4'
import movie4 from './movie4.mp4'
import poster1 from './poster1.jpg'
import poster2 from './poster2.jpg'
import poster3 from './poster3.jpg'
import poster4 from './poster4.jpg'
import title1 from './title1.webp'
import title2 from './title2.webp'
import title3 from './title3.webp'
import title4 from './title4.webp'


//SignUp Page Icons
// export const signUpPageIcons={
//     infoIcon:AiOutlineInfoCircle,
//     viewIcon:FaEye,
//     notViewIcon:FaEyeSlash,
//     successIcon:FaCheck    
// }
//Movies Page Icons
// export const moviesPageContents={
//     iconContents:{
//         searchIcon:BsSearch,
//         createIcon:MdAdd,
//         retrieveIcon:FaRegFolderOpen,
//         editIcon:FaEdit ,
//         deleteIcon:MdDelete
//     },
//     tableHeadings:[
//         'S-No',
//         'movie name',
//         'ratings',
//         'duration',
//         'created by',
//         'actions'
//     ]
// }
//Users Page Icons
// export const userPageContents={
//     usersPageIcons:{
//         userIcon:FaUserCircle
//     },
//     usersCategory:[
//         'all',
//         'user',
//         'admin'
//     ]
// }
//Create Movies Page Icons
// export const createMoviesPageContents={
//     directorOptions:[ 
//         {
//             value:"vijay",label:"Vijay"
//         },
//         {
//             value:"ajith",label:"Ajith"
//         },
//         {
//             value:"vikram",label:"Vikram"
//         },
//         {
//             value:"surya",label:"Surya"
//         },
//         {
//             value:"sk",label:"SK"
//         }
//     ],
//     genreOptions:[
//         {
//             value:"action",label:"Action"
//         },
//         {
//             value:"romance",label:"Romance"
//         },
//         {
//             value:"comedy",label:"Comedy"
//         },
//         {
//             value:"thriller",label:"Thriller"
//         },
//         {
//             value:"mystery",label:"Mystery"
//         }
//     ],
//     fileUploadIcon:SlCloudUpload,
//     fileRemoveIcon:IoCloseCircleSharp,
//     fileUploadedIcon:FaCheckCircle
// }
//Search Page Icons
// export const searchPageContents={
//     icons:{
//         searchIcon:BsSearch,
//         playIcon:IoPlayOutline,
//         createIcon:MdAdd,
//     }
// }
const appData={
    //Navitems
    navBarData:[
        {
            id:1,
            navItemName:"Home",
            iconName:AiFillHome,
            pathName:"/"
        },
        {
            id:2,
            navItemName:"Search",
            iconName:BsSearch,
            pathName:"/search"
        },
        {
            id:3,
            navItemName:"Movies",
            iconName:PiPopcornFill,
            pathName:"/movies"
        },
        {
            id:4,
            navItemName:"Categories",
            iconName:MdOutlineCategory,
            pathName:"/categories"
        },
        {
            id:5,
            navItemName:"Profile",
            iconName:FaUserCircle,
            pathName:"/profile"
        }
    ],
    homePage:{
        //Carousel Movies Data
        moviesData:[
            {
                id:1,
                name:title1,
                description:'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.Also they fought against the Thanos for the infinity stones and to protect the universe',
                genre:['Action','Fantasy'],
                duration:140,
                releasedYear:2018,
                cbfc:'U/A 7+',
                language:'english',
                videoUrl:movie1,
                posterUrl:poster1
            },
            {
              id:2,
              name:title2,
              description:'The hiccup and dragon are friends.',
              genre:['Action', 'Animation'],
              duration:90,
              releasedYear:2020,
              cbfc:'U/A 13+',
              language:'english',
              videoUrl:movie2,
              posterUrl:poster2
            },
            {
              id:3,
              name:title3,
              description:'The fight between Kabir and Khaleed.',
              genre:['Action', 'War'],
              duration:110,
              releasedYear:2019,
              cbfc:'U/A 16+',
              language:'Tamil',
              videoUrl:movie3,
              posterUrl:poster3
            },
            {
              id:4,
              name:title4,
              description:'The Red is not a monster.',
              genre:['Animation','Adventure' ,' Fantasy'],
              duration:100,
              releasedYear:2023,
              cbfc:'A',
              language:'english',
              videoUrl:movie4,
              posterUrl:poster4
            }
        ],
        iconData:{
            playIcon:IoPlayOutline,
            volumeOffIcon:FaVolumeXmark,
            volumeOnIcon:FaVolumeHigh,
            watchListIcon:LuListPlus
        }
    }
}
export default appData