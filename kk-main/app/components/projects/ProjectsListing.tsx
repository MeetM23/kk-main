"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArea, IconArrowRight, IconBath, IconBed, IconPin } from "../Icons";

type Category = "Villas" | "Apartments" | "Commercial";
type Status = "Ongoing" | "Completed" | "Upcoming";

type Project = {
  name: string;
  location: string;
  price: string;
  image: string;
  category: Category;
  status: Status;
  beds: number;
  baths: number;
  area: string;
};

const projects: Project[] = [
  {
    name: "The Meridian Villa",
    location: "Bopal, Ahmedabad",
    price: "₹2.4 Cr onwards",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    category: "Villas",
    status: "Ongoing",
    beds: 4,
    baths: 4,
    area: "3,200 sqft",
  },
  {
    name: "Palm Grove Estate",
    location: "Shela, Ahmedabad",
    price: "₹3.1 Cr onwards",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    category: "Villas",
    status: "Completed",
    beds: 5,
    baths: 5,
    area: "4,100 sqft",
  },
  {
    name: "Willow Park Homes",
    location: "Bodakdev, Ahmedabad",
    price: "₹2.9 Cr onwards",
    image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?auto=format&fit=crop&w=1200&q=80",
    category: "Villas",
    status: "Completed",
    beds: 4,
    baths: 4,
    area: "3,600 sqft",
  },
  {
    name: "Azure Court Residences",
    location: "SG Highway, Ahmedabad",
    price: "₹1.8 Cr onwards",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    category: "Apartments",
    status: "Upcoming",
    beds: 3,
    baths: 3,
    area: "2,450 sqft",
  },
  {
    name: "Sunrise Heights",
    location: "Thaltej, Ahmedabad",
    price: "₹1.4 Cr onwards",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Apartments",
    status: "Ongoing",
    beds: 2,
    baths: 2,
    area: "1,650 sqft",
  },
  {
    name: "Silver Oak Residency",
    location: "Prahladnagar, Ahmedabad",
    price: "₹1.6 Cr onwards",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1200&q=80",
    category: "Apartments",
    status: "Upcoming",
    beds: 3,
    baths: 2,
    area: "1,900 sqft",
  },
  {
    name: "Kalaivaani Business Park",
    location: "SG Highway, Ahmedabad",
    price: "₹85 Lakh onwards",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    status: "Ongoing",
    beds: 0,
    baths: 2,
    area: "1,200 sqft",
  },
  {
    name: "Orion Corporate Tower",
    location: "Science City Road, Ahmedabad",
    price: "₹1.2 Cr onwards",
    image: "https://images.unsplash.com/photo-1576731753569-3e93a228048c?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    status: "Completed",
    beds: 0,
    baths: 2,
    area: "1,800 sqft",
  },
  {
    name: "Vertex Trade Centre",
    location: "Iscon Cross Road, Ahmedabad",
    price: "₹95 Lakh onwards",
    image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    status: "Upcoming",
    beds: 0,
    baths: 1,
    area: "950 sqft",
  },
];

const categories: ("All" | Category)[] = ["All", "Villas", "Apartments", "Commercial"];

const statusStyles: Record<Status, string> = {
  Ongoing: "bg-[#c8974a] text-[#151a2d]",
  Completed: "bg-[#151a2d] text-[#c8974a]",
  Upcoming: "bg-white text-[#151a2d]",
};

const PAGE_SIZE = 6;

export default function ProjectsListing() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="bg-[#faf8f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 text-[12px] font-semibold tracking-[0.08em] transition ${
                activeCategory === category
                  ? "bg-[#151a2d] text-[#c8974a]"
                  : "border border-[#151a2d]/15 text-[#151a2d]/70 hover:border-[#151a2d]/40"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="mt-6 text-center text-[13px] text-[#151a2d]/50">
          Showing {visible.length} of {filtered.length} project
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden border border-black/5 bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status.toUpperCase()}
                </span>
                <span className="absolute right-4 top-4 bg-white/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-[#151a2d]">
                  {project.category.toUpperCase()}
                </span>
              </div>

              <div className="p-6">
                <p className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.04em] text-[#151a2d]/60">
                  <IconPin className="h-3.5 w-3.5 text-[#c8974a]" />
                  {project.location}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#151a2d]">
                  {project.name}
                </h3>
                <p className="mt-1 text-[15px] font-semibold text-[#c8974a]">
                  {project.price}
                </p>

                <div className="mt-5 flex items-center gap-5 border-t border-black/5 pt-5 text-[13px] text-[#151a2d]/70">
                  {project.beds > 0 && (
                    <span className="flex items-center gap-1.5">
                      <IconBed className="h-4 w-4" /> {project.beds}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <IconBath className="h-4 w-4" /> {project.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconArea className="h-4 w-4" /> {project.area}
                  </span>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] text-[#151a2d] transition group-hover:text-[#c8974a]"
                >
                  VIEW DETAILS
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="mt-16 text-center text-[15px] text-[#151a2d]/50">
            No projects found in this category yet.
          </p>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-2 border border-[#151a2d] px-8 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#151a2d] transition hover:bg-[#151a2d] hover:text-[#c8974a]"
            >
              LOAD MORE PROJECTS
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
