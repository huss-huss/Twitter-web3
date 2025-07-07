// app/components/Feed.jsx
"use client";

import React from "react";
import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Alex",
    userName: "0xA1b2C3D4e5F6g7H8i9J0K1L2M3N4O5P6Q7R8S9T",
    avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
    text: "Excited for the weekend hackathon! 🚀",
    isProfileImageNft: true,
    timestamp: "2025-07-01T09:00:00.000Z",
  },
  {
    displayName: "Jordan",
    userName: "jordan.eth",
    avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
    text: "Coffee first, code later ☕️💻",
    isProfileImageNft: false,
    timestamp: "2025-07-01T10:15:30.000Z",
  },
  {
    displayName: "Rina",
    userName: "0xFfEeDdCcBbAa99887766554433221100AaBbCcDd",
    avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
    text: "Just solved a tricky bug in my app! 🎉",
    isProfileImageNft: false,
    timestamp: "2025-07-01T11:45:00.000Z",
  },
  {
    displayName: "Sam",
    userName: "sam.eth",
    avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
    text: "Reading up on Next.js App Router 🛠️",
    isProfileImageNft: true,
    timestamp: "2025-07-01T13:20:10.000Z",
  },
  // {
  //   displayName: "Ella",
  //   userName: "0x1234ABCD5678efab9012CDEF3456abcd7890EF12",
  //   avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
  //   text: "Good morning, world! 🌍",
  //   isProfileImageNft: false,
  //   timestamp: "2025-07-01T08:05:45.000Z",
  // },
  // {
  //   displayName: "Kai",
  //   userName: "kai.eth",
  //   avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
  //   text: "Deploying my first smart contract today 📝",
  //   isProfileImageNft: true,
  //   timestamp: "2025-07-01T14:50:00.000Z",
  // },
  // {
  //   displayName: "Rasheed",
  //   userName: "0xAaBbCcDdEeFf00112233445566778899AaBbCcDd",
  //   avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
  //   text: "Looking for collaborators on an open-source project 🔍",
  //   isProfileImageNft: false,
  //   timestamp: "2025-07-01T16:30:25.000Z",
  // },
  // {
  //   displayName: "Mia",
  //   userName: "mia.eth",
  //   avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
  //   text: "Just published a new blog post on React hooks ✍️",
  //   isProfileImageNft: false,
  //   timestamp: "2025-07-01T17:05:15.000Z",
  // },
  // {
  //   displayName: "Leo",
  //   userName: "0xDEADBEEFCAFEBABE1234567890ABCDEF12345678",
  //   avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
  //   text: "Who else is attending ETHGlobal next month? 🗓️",
  //   isProfileImageNft: true,
  //   timestamp: "2025-07-01T18:45:00.000Z",
  // },
  // {
  //   displayName: "Tara",
  //   userName: "tara.eth",
  //   avatar: "https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg",
  //   text: "Weekend vibes: hiking and fresh air 🏞️",
  //   isProfileImageNft: false,
  //   timestamp: "2025-07-01T19:30:40.000Z",
  // },
];

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1 className={style.headerTitle}>Feed</h1>
        <BsStars />
      </div>

      <TweetBox />

      {tweets.map((tweet, idx) => (
        <Post
          key={idx}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
