"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HomeSection from "../components/HomeSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Da Nang Real Estate Platform",
      description:
        "Advanced real estate management system in Da Nang allowing buying, selling, and renting properties with modern technology stack",
      tech: ["GraphQL", "NestJS", "Next.js", "Docker", "n8n", "MCP"],
      image:
        "https://i.ex-cdn.com/nhadautu.vn/files/news/2025/02/01/filmore-bat-dong-san-hang-hieu-120356.jpg",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution featuring user authentication, product catalog, shopping cart, secure payment processing and order management",
      tech: ["Express", "MongoDB", "NodeJs", "Pug", "Bootstrap"],
      image:
        "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Advanced real-time chat application with video calling, file sharing, and group chat features using modern web technologies",
      tech: ["Socket.io", "TypeScript", "MongoDB", "PeerJS"],
      image:
        "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HomeSection isVisible={isVisible} />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </div>
  );
}
