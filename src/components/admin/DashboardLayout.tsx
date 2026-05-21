"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

import {
  LayoutDashboard,
  PanelsTopLeft,
  CalendarDays,
  ShieldCheck,
  Users,
  UserCog,
  KeyRound,
  Trophy,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { user, permissions, loading } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const [dropOpen, setDropOpen] = useState(false);
  const [eventDropOpen, setEventDropOpen] = useState(false);
  const [roleDropOpen, setRoleDropOpen] = useState(false);
  const [permissionsDropOpen, setPermissionsDropOpen] = useState(false);
  const [userDropOpen, setUserDropOpen] = useState(false);
  const [roleDrop, setRoleDrop] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      router.push("/client/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#050816]
        text-white
        text-xl
      "
      >
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="flex bg-[#050816] text-white min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-80
        bg-white/5
        backdrop-blur-2xl
        border-r
        border-white/10
        transition-all
        duration-300
        overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div
          className="
          flex
          items-center
          justify-between
          px-8
          py-7
          border-b
          border-white/10
        "
        >
          <div>
            <h1
              className="
              text-3xl
              font-black
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              bg-clip-text
              text-transparent
            "
            >
              SWIFT
            </h1>

            <p className="text-gray-400 text-sm mt-1">Admin Dashboard</p>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* User Card */}
        <div className="px-6 py-6">
          <div
            className="
            bg-gradient-to-r
            from-yellow-400/10
            to-orange-500/10
            border
            border-yellow-400/20
            rounded-3xl
            p-5
          "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-yellow-400
                text-black
                font-bold
                flex
                items-center
                justify-center
                text-xl
              "
              >
                {user?.name?.charAt(0)}
              </div>

              <div>
                <h2 className="font-bold text-lg">{user?.name}</h2>

                <p className="text-yellow-400 text-sm">{user?.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-4 pb-10 space-y-2">
          {/* Dashboard */}
          <Link
            href="#"
            className="
              flex
              items-center
              gap-4
              px-5
              py-4
              rounded-2xl
              hover:bg-white/10
              transition
            "
          >
            <LayoutDashboard size={22} />
            <span>Dashboard</span>
          </Link>

          {/* Page Handler */}
          {permissions.includes("Edit Home Text") && (
            <div>
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                  transition
                "
              >
                <div className="flex items-center gap-4">
                  <PanelsTopLeft size={22} />
                  <span>Page Handlers</span>
                </div>

                {dropOpen ? <ChevronDown /> : <ChevronRight />}
              </button>

              {dropOpen && (
                <div className="ml-8 mt-2 space-y-2">
                  <Link
                    href="/admin/createcontent/homecontent"
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      text-gray-300
                      hover:bg-white/10
                    "
                  >
                    Home Page
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Events */}
          {permissions.includes("Event Handler") && (
            <div>
              <button
                onClick={() => setEventDropOpen(!eventDropOpen)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                  transition
                "
              >
                <div className="flex items-center gap-4">
                  <CalendarDays size={22} />
                  <span>Events</span>
                </div>

                {eventDropOpen ? <ChevronDown /> : <ChevronRight />}
              </button>

              {eventDropOpen && (
                <div className="ml-8 mt-2 space-y-2">
                  {permissions.includes("Event Creation") && (
                    <Link
                      href="/admin/createcontent/createevent"
                      className="
                        block
                        px-4
                        py-3
                        rounded-xl
                        hover:bg-white/10
                        text-gray-300
                      "
                    >
                      Create Event
                    </Link>
                  )}

                  {permissions.includes("Event List") && (
                    <Link
                      href="/admin/list/eventlist"
                      className="
                        block
                        px-4
                        py-3
                        rounded-xl
                        hover:bg-white/10
                        text-gray-300
                      "
                    >
                      Event List
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Roles */}
          {permissions.includes("Roles Handlers") && (
            <div>
              <button
                onClick={() => setRoleDropOpen(!roleDropOpen)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                "
              >
                <div className="flex items-center gap-4">
                  <ShieldCheck size={22} />
                  <span>Roles</span>
                </div>

                {roleDropOpen ? <ChevronDown /> : <ChevronRight />}
              </button>

              {roleDropOpen && (
                <div className="ml-8 mt-2 space-y-2">
                  <Link
                    href="/admin/createcontent/createrole"
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-white/10
                      text-gray-300
                    "
                  >
                    Create Role
                  </Link>

                  <Link
                    href="/admin/list/roleslist"
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-white/10
                      text-gray-300
                    "
                  >
                    Roles List
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Permission */}
          {permissions.includes("Permission List") && (
            <div>
              <button
                onClick={() => setPermissionsDropOpen(!permissionsDropOpen)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                "
              >
                <div className="flex items-center gap-4">
                  <KeyRound size={22} />
                  <span>Permissions</span>
                </div>

                {permissionsDropOpen ? <ChevronDown /> : <ChevronRight />}
              </button>

              {
                permissionsDropOpen && (
                    <div className="ml-8 mt-2 space-y-2">
                  <Link
                    href="/admin/createcontent/createpermission"
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-white/10
                      text-gray-300
                    "
                  >
                    Create Permissions
                  </Link>

                </div>
                )
              }
            </div>
          )}

          {/* Users */}
          {permissions.includes("User List") && (
            <div>
              <button
                onClick={() => setUserDropOpen(!userDropOpen)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                "
              >
                <div className="flex items-center gap-4">
                  <Users size={22} />
                  <span>Users</span>
                </div>

                {userDropOpen ? <ChevronDown /> : <ChevronRight />}
              </button>

              {userDropOpen && (
                <div className="ml-8 mt-2 space-y-2">
                  <Link
                    href="/admin/createcontent/createuser"
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-white/10
                      text-gray-300
                    "
                  >
                    Create User
                  </Link>

                  <Link
                    href="/admin/list/userlist"
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-white/10
                      text-gray-300
                    "
                  >
                    User List
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Extra */}
          <div>
            <button
              onClick={() => setRoleDrop(!roleDrop)}
              className="
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
                rounded-2xl
                hover:bg-white/10
              "
            >
              <div className="flex items-center gap-4">
                <Trophy size={22} />
                <span>Achievements</span>
              </div>

              {roleDrop ? <ChevronDown /> : <ChevronRight />}
            </button>

            {roleDrop && (
              <div className="ml-8 mt-2 space-y-2">
                <Link
                  href="/admin/eventregister"
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    hover:bg-white/10
                    text-gray-300
                  "
                >
                  Event Register
                </Link>

                <Link
                  href="/admin/result"
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    hover:bg-white/10
                    text-gray-300
                  "
                >
                  Results
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Logout */}
        <div className="px-5 pb-10">
          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-gradient-to-r
              from-red-500
              to-pink-500
              hover:scale-[1.02]
              transition
              py-4
              rounded-2xl
              font-semibold
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Navbar */}
        <header
          className="
          sticky
          top-0
          z-40
          backdrop-blur-xl
          bg-[#050816]/70
          border-b
          border-white/10
          px-6
          py-5
          lg:pl-96
          flex
          items-center
          justify-between
        "
        >
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>

            <div>
              <h1
                className="
                text-2xl
                font-bold
              "
              >
                Welcome Back 👋
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Manage your platform efficiently
              </p>
            </div>
          </div>

          <div
            className="
            hidden
            md:flex
            items-center
            gap-3
            bg-yellow-400/10
            border
            border-yellow-400/20
            px-5
            py-3
            rounded-2xl
            text-yellow-400
          "
          >
            <Sparkles size={18} />
            Swift Admin Panel
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-10">
          <div
            className={`
            min-h-[calc(100vh-120px)]
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            lg:ml-80
          `}
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
