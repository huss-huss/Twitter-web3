// // app/components/TweetBox.jsx
// "use client";

// import React, { useState } from "react";
// import { BsStars } from "react-icons/bs";
// // → import any other icons you like here

// const style = {
//   wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
//   tweetBoxLeft: `mr-4`,
//   tweetBoxRight: `flex-1`,
//   profileImage: `h-12 w-12 rounded-full`,
//   inputField: `w-full h-full outline-none bg-transparent text-lg`,
//   formLowerContainer: `flex items-center`,
//   iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
//   icon: `mr-2 cursor-pointer`,
//   submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
//   inactiveSubmit: `bg-[#196195] text-[#95999e]`,
//   activeSubmit: `bg-[#1d9bf0] text-white`,
// };

// const TweetBox = () => {
//   const [tweetMessage, setTweetMessage] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     // ← your “post tweet” logic here
//     console.log("posting:", tweetMessage);
//     setTweetMessage("");
//   }

//   return (
//     <div className={style.wrapper}>
//       <div className={style.tweetBoxLeft}>
//         <img
//           src='https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg'
//           alt="profile image"
//           className={style.profileImage}
//         />
//       </div>
//       <div className={style.tweetBoxRight}>
//         {/* attach onSubmit here instead of onClick on the button */}
//         <form onSubmit={handleSubmit}>
//           <textarea
//             className={style.inputField}
//             placeholder="What's happening?"
//             value={tweetMessage}
//             onChange={(e) => setTweetMessage(e.target.value)}
//           />
//           <div className={style.formLowerContainer}>
//             <div className={style.iconsContainer}>{/* …your icons… */}</div>
//             <button
//               type="submit"
//               disabled={!tweetMessage.trim()}
//               className={
//                 style.submitGeneral +
//                 " " +
//                 (tweetMessage ? style.activeSubmit : style.inactiveSubmit)
//               }
//             >
//               Tweet
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TweetBox;

// app/components/TweetBox.jsx
"use client";

import React, { useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  // profileImage: `h-12 w-12 rounded-full`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex items-center`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2 cursor-pointer text-xl`, // bumped up size
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
};

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("posting:", tweetMessage);
    setTweetMessage("");
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://i.ibb.co/N2LwWcLc/photo-2025-07-03-18-44-55.jpg"
          alt="profile image"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form onSubmit={handleSubmit}>
          <textarea
            className={style.inputField}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <div className={style.formLowerContainer}>
            {/* ICON BAR */}
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!tweetMessage.trim()}
              className={
                style.submitGeneral +
                " " +
                (tweetMessage.trim()
                  ? style.activeSubmit
                  : style.inactiveSubmit)
              }
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
