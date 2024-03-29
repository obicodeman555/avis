import HomeIcon from "../../assets/svgs/home.svg";
import PowerIcon from "../../assets/svgs/power-white.svg";
import VerifiedUsersIcon from "../../assets/svgs/verified-user.svg";
import CarIcon from "../../assets/svgs/car-white.svg";
import AdminIcon from "../../assets/svgs/admin-white.svg";

export const SidebarData = [
  {
    title: "Home",
    icon: HomeIcon,
    link: "/content-management/home",
  },

  {
    title: "Registered Cars",
    icon: CarIcon,
    link: "/content-management/official-cars",
  },

  {
    title: "Member",
    icon: VerifiedUsersIcon,
    link: "/content-management/member",
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
