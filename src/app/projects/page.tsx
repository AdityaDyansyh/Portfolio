"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "C++ Programming Course - Saylor Academy",
    description: `C++ Programming at Saylor Academy is your foundation for mastering
  high-performance code — where you sharpen logic, manage memory with
  precision, and build efficient systems like a true software engineer.
  Strengthen your fundamentals, write optimized code, and level up your
  problem-solving mindset.`,
    link: "",
    images: [],
  },
  {
    id: 2,
    name: "HubSpot Revenue Operations",
    description: `HubSpot Revenue Operations (RevOps) helps align marketing, sales, and customer service into one unified system to drive predictable growth. By centralizing data, automating processes, and providing real-time insights, RevOps enables teams to work more efficiently, improve customer experience, and maximize revenue across the entire customer lifecycle.`,
    link: "",
    images: [],
  },
  {
    id: 3,
    name: "Prinsip Pemrograman SOLID - Dicoding",
    description: `The SOLID Programming Principles are five fundamental principles in object-oriented programming designed to make code easier to understand, maintain, and extend. These principles include the Single Responsibility Principle (SRP), the Open/Closed Principle (OCP), the Liskov Substitution Principle (LSP), the Interface Segregation Principle (ISP), and the Dependency Inversion Principle (DIP). Adhering to these principles helps developers create robust and flexible software systems that can adapt to changing requirements over time.`,
    link: "",
    images: [],
  },
  {
    id: 4,
    name: "Dasar Manajemen Proyek - Dicoding",
    description: `Project Management Fundamentals is a course that provides a fundamental understanding of project management, including the planning, execution, and monitoring stages of a project. The material covers managing time, budget, risk, and team communication to ensure the successful completion of a project on time. This course is ideal for individuals looking to enhance their project management skills and effectively lead projects in various industries.`,
    link: "",
    images: [],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Certifications</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
