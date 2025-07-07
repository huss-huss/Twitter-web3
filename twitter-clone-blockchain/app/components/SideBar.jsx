"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMoreHorizontal } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import {
  BsPerson,
  BsPersonFill,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
import SidebarOption from "./SideBarOption";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  navContainer: `flex-1`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-full p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};

const Sidebar = ({ initalSelectedIcon = "Home" }) => {
  const [selected, setSelected] = useState(initalSelectedIcon);
  return (
    <div className={style.wrapper}>
      {/* Twitter logo */}
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>

      {/* Navigation links */}
      <div className={style.navContainer}>
        <SidebarOption
          text="Home"
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          text="Explore"
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          isActive={Boolean(selected === "Explore")}
          setSelected={setSelected}
          redirect={"/explore"}
        />
        <SidebarOption
          text="Notifications"
          Icon={selected === "Notifications" ? FaBell : FiBell}
          isActive={Boolean(selected === "Notifications")}
          setSelected={setSelected}
          redirect={"/notifications"}
        />
        <SidebarOption
          text="Messages"
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          isActive={Boolean(selected === "Messages")}
          setSelected={setSelected}
          redirect={"/messages"}
        />
        <SidebarOption
          text="Bookmarks"
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          isActive={Boolean(selected === "Bookmarks")}
          setSelected={setSelected}
          redirect={"/bookmarks"}
        />
        <SidebarOption
          text="Lists"
          Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
          isActive={Boolean(selected === "Lists")}
          setSelected={setSelected}
          redirect={"/lists"}
        />
        <SidebarOption
          text="Profile"
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
          redirect={"/profile"}
        />
        <SidebarOption
          text="More"
          Icon={selected === "More" ? CgMoreO : CgMoreO}
          isActive={Boolean(selected === "More")}
          setSelected={setSelected}
          redirect={"/more"}
        />

        {/* “Mint” button */}
        <div className={style.tweetButton}>Mint</div>
      </div>

      {/* Profile preview at bottom */}
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
          {/* replace with <img src="..." /> if you have an avatar */}
          <div className="h-12 w-12 bg-gray-600 rounded-full" />
        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>clevergaziz</div>
            <div className={style.handle}>@0x22dF...5xf2df</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
