import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) {
      router.push("/sign-in");
    }
  };
  return (
    <footer className="footer">
      <div
        className={type === "desktop" ? "footer_name" : "footer_name-mobile"}
      >
        <p className="text-xl font-bold text-gray-700">{user.firstName[0]}</p>
      </div>
      <div
        className={type === "desktop" ? "footer_email" : "footer_email-mobile"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700 ">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div onClick={handleLogout} className="footer_image">
        <Image src="/icons/logout.svg" alt="Logout" width={20} height={20} />
      </div>
    </footer>
  );
};

export default Footer;
