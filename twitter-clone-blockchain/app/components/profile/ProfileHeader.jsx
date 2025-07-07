"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
import React from "react";

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};

const ProfileHeader = () => {
  const router = useRouter();
  const isProfileImageNft = false;
  const currentAccount = "0x1234567890abcdef1234567890abcdef12345678";

  return (
    <div className={style.wrapper}>
      {/* top bar with back button and tweet count */}
      <div className={style.header}>
        <div onClick={() => router.push("/")} className={style.backButton}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Rafeh Qaziz</div>
          <div className={style.secondary}>4 Tweets</div>
        </div>
      </div>

      {/* cover photo */}
      <div className={style.coverPhotoContainer}>
        <img
          src="https://storage.googleapis.com/support-kms-prod/Ch5HG5RGzGnfHhvVSD93gdoEvWm5IPGUkOnS"
          alt="cover"
          className={style.coverPhoto}
        />
      </div>

      {/* profile image */}
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? "hex" : style.profileImageContainer}
        >
          <img
            src="https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg"
            alt="Qazi"
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>

      {/* name & wallet/address */}
      <div className={style.details}>
        <div>
          <div className={style.primary}>Rafeh Qazi</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}
              ...{currentAccount.slice(37)}
            </>
          )}
        </div>
      </div>

      {/* navigation tabs */}
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  );
};

export default ProfileHeader;

