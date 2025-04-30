"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Youtube,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const footerLinks = [
  {
    title: "About Us",
    sublinks: [
      { url: "/about", text: "About Give" },
      { url: "/blog", text: "Blog" },
      { url: "/careers", text: "Careers" },
      { url: "/contact", text: "Contact Us" },
    ],
  },
  {
    title: "Fundraiser Support",
    sublinks: [
      { url: "/faqs", text: "FAQs" },
      { url: "/reach-out", text: "Reach out" },
    ],
  },
  {
    title: "Start a Fundraiser for",
    sublinks: [
      { url: "/ngo", text: "NGO" },
    ],
  },
  {
    title: "Donate To",
    sublinks: [
      { url: "/", text: "Social Causes" },
      { url: "/", text: "NGOs" },
    ],
  },
];

const socialLinks = [
  {
    icon: <Facebook className="w-5 h-5 hover:text-blue-500" />,
    href: "/facebook",
  },
  {
    icon: <Instagram className="w-5 h-5 hover:text-pink-500" />,
    href: "/facebook",
  },
  {
    icon: <Youtube className="w-5 h-5 hover:text-red-500" />,
    href: "/facebook",
  },
  {
    icon: <X className="w-5 h-5 hover:text-black" />,
    href: "/facebook",
  },
  {
    icon: <Linkedin className="w-5 h-5 hover:text-blue-500" />,
    href: "/facebook",
  },
];

const Footer = () => {
  return (
    <div className="bg-blue-50 w-full flex flex-col gap-4">
      <div className="max-w-7xl mx-auto pt-[30px] py-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {footerLinks.map((flinks, ind) => (
          <div key={ind} className="w-full px-6 flex flex-col gap-2">
            <h4 className="text-lg font-semibold">{flinks.title}</h4>
            <div className="flex flex-col gap-2">
              {flinks.sublinks.map((links, index) => (
                <Link key={index} href={links.url}>
                  <p className="font-medium text-slate-500 hover:text-[#4db2ec]">
                    {links.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* social links */}
        <div className="flex flex-col gap-4">
          <Select defaultValue="inr">
            <SelectTrigger className="w-[180px] outline-none">
              <SelectValue placeholder="currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inr">INR(₹)</SelectItem>
              <SelectItem value="usd">USD($)</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex w-full justify-between text-gray-500">
            {
                socialLinks.map((link, ind) => (
                    <Link key={ind} href={link.href}>
                        {link.icon}
                    </Link>
                ))
            }
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-slate-200 rounded-md p-2">
        <h4 className="font-semibold">
            Disclaimer 
        </h4>
        Use of children's information including images, videos,
        testimonials, etc. in the Campaign is necessary for creating awareness
        about the charitable cause in order to bring traction to the said
        charitable cause and obtain donations which can then be used for
        charitable activities. Information is used and processed with valid
        consent. This statement is issued in compliance with the Consumer
        Protection Act, 2019, as amended from time to time.
      </div>
      {/* Copyright */}
      <div className="py-6 max-w-7xl mx-auto w-full border-t border-blue-300">
        <h3 className="font-bold text-lg text-center mb-12">
          &copy; {new Date().getFullYear()} Aadi Foundation. All Rights
          Reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
