import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  LockClosedIcon,
  ArrowUpTrayIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Create beautiful campaigns",
  desc: "Create engaging and responsive campaigns with our rich-text editor",
  image: benefitOneImg,
  bullets: [
    {
      title: "Design responsive campaigns",
      desc: "Design your campaign to be responsive on a mobile device",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Upload media",
      desc: "Use the media manager to upload images for your e-mail campaigns",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Create templates",
      desc: "Create templates so you can use them later",
      icon: <ClipboardDocumentIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Manage campaigns and subscribers",
  desc: "Take care of your email list and campaigns with our easy to use Panel",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Import subscribers",
      desc: "Import your contacts, create lists and manage campaigns",
      icon: <ArrowUpTrayIcon />,
    },
    {
      title: "Analytics",
      desc: "Simple analaytics and visualizations.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Privacy at top",
      desc: "Allow subscribers to permanently blocklist themselves, export all their data, and to wipe all their data in a single click.",
      icon: <LockClosedIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
