import React from "react";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "Vincent Navas",
    username: "@NavasVincent",
    image: "https://avatars.githubusercontent.com/u/197640042?v=4",
    link: "https://github.com/NavasVincent",
    platform: "GitHub",
  },
  {
    name: "Vincent Navas",
    username: "LinkedIn Profile",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQFoyBbF9kdoSw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1598564467575?e=1746662400&v=beta&t=USNKxGXyupkR79FLhxF8h08eVYgYQJ5g0RmOzx04bPQ",
    link: "https://ph.linkedin.com/in/vincent-navas-8690b4125",
    platform: "LinkedIn",
  },
  {
    name: "Vincent Navas",
    username: "Facebook Profile",
    image:
      "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-1/462089996_8479137375496069_7154715055345216689_n.jpg?stp=cp6_dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=PxAFiHgnPPQQ7kNvgED-L7A&_nc_oc=Adg4WTae8N5X4Dx3gmdOWAmLxjS9_mxnH92oaod9owGqJfedr7UVb479Tn5EgN66LfA&_nc_zt=24&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=AzAmxl3d7IDQ_aTWr-cL6Dz&oh=00_AYEcrwHTuLOz5g5j0VIHo0229OcLqAP_q3XV4gswl2mWBg&oe=67D115A2",
    link: "https://www.facebook.com/Vhince.Navs/",
    platform: "Facebook",
  },
];

// Reusable Profile Card Component with Framer Motion
const ProfileCard = ({ name, username, image, link, platform }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="max-w-xs bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition z-30"
    >
      <motion.img
        src={image}
        alt={`${platform} Profile`}
        className="h-[80px] rounded-full shadow-lg"
        whileHover={{ rotate: 5 }}
      />
      <h3 className="mt-4   font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-[12px] ">{username}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 px-5 py-2  rounded-full shadow-md text-[12px] hover:bg-[rgba(112,181,249,0.15)] transition cursor-pointer text-[dodgerblue] border border-[dodgerblue] rounded-full"
      >
        View {platform}
      </a>
    </motion.div>
  );
}; 
const Footer = () => {
  return (
    <>
    {/* <section className="w-full gap-3 flex flex-col justify-between items-start max-w-[1150px] m-auto mt-5 ">
    <div className="flex flex-col items-center justify-center w-full"> 
      <motion.div
        className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-8 w-full justify-center items-center px-4 py-10 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </motion.div> 
    </div>
    </section>  */}
     <footer className="bg-gray-800 text-white py-6 w-full text-center mt-8">
     <p className="text-sm">&copy; 2024 Vincent Navas. All rights reserved.</p>
     <div className="mt-3 flex justify-center space-x-6">
       <motion.a
         href="https://linkedin.com/in/vincent"
         className="hover:underline transition transform hover:scale-110"
         whileHover={{ scale: 1.1, color: "#0077b5" }}
       >
         LinkedIn
       </motion.a>
       <motion.a
         href="https://github.com/vincent"
         className="hover:underline transition transform hover:scale-110"
         whileHover={{ scale: 1.1, color: "#333" }}
       >
         GitHub
       </motion.a>
     </div>
   </footer>
   </>
  );
};

export { Footer };
