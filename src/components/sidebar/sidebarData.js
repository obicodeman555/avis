import HomeIcon from "../../assets/svgs/home.svg";
import PowerIcon from "../../assets/svgs/power-white.svg";
// import VerifiedUsersIcon from "../../assets/svgs/verified-user.svg";
import CarIcon from "../../assets/svgs/car-white.svg";
import AdminIcon from "../../assets/svgs/admin-white.svg";
import UsersIcon from "../../assets/svgs/users-solid.svg";
import ApplicationIcon from "../../assets/svgs/card-list.svg";

export const SidebarData = [
  {
    title: "Home",
    icon: HomeIcon,
    link: "/content-management/home",
  },
  // {
  //   title: "Users",
  //   icon: VerifiedUsersIcon,
  //   link: "/content-management/members",
  // },
  {
    title: "Registered Cars",
    icon: CarIcon,
    link: "/content-management/official-cars",
  },
  {
    title: "Applications",
    icon: ApplicationIcon,
    link: "/content-management/unapproved",
  },
  {
    title: "Staffs",
    icon: UsersIcon,
    link: "/content-management/staffs",
  },
  {
    title: "Account",
    icon: AdminIcon,
    link: "/content-management/account",
  },

  {
    title: "Logout",
    icon: PowerIcon,
    link: "/logout",
  },
];
