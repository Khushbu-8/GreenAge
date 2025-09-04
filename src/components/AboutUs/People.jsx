import React from "react";
import TitleHeading from "../UI/TitleHeading";

const people = [
  {
    id: "01",
    name: "Mr. Rajendra Kadiwar",
    description:
      "The Company Is Under The Able Guidance Of Mr. Rajendra Kadiwar, The Director Of The Company And Promoter Of Umiya Group Of Industries. A Visionary Who Understands The Finer Nuances Of Business, He Has Drafted A Path For Propelling The Company Forward. Under His Supervision We Have Set Milestones In Terms Of Quality And Production For Our Contemporaries To Follow.",
  },
  {
    id: "02",
    name: "Mr. Ravi Kadiwar",
    description:
      "A Degree In Business Administration Has Only Sharpened His Business Acumen To Take Important Decisions In Favour Of The Company. His Enthusiasm Is Contagious And His Tendency To Work Hard Creates An Inspiration For Everyone In The Team. Apart From Our Stalwarts We Have Several Divisions In Our Office To Check The Quality Of The Final Product, Right From Its Inception To Formation Of Finished Product.",
  },
];

const People = () => {
  return (
    <section className="py-12  sm:py-16 bg-white ">
      <div className="mx-auto">
        {/* Section Title */}
        <TitleHeading tagline="The people" heading="Our People, Our Power" />

        {/* People Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 pb-20">
          {people.map((person) => (
            <div
              key={person.id}
              className="bg-[#F9F9F9] p-6 sm:p-8 rounded-xl shadow-md"
            >
              {/* Person ID and Name */}
              <div className="mb-4">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">
                  {person.id}
                </h3>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {person.name}
                </h4>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
