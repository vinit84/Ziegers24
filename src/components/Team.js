/* This example requires Tailwind CSS v2.0+ */

import sujal from "../assets/cores/sujal.webp";
import prailin1 from "../assets/cores/prailin1.webp";
import aneesh1 from "../assets/cores/aneesh1.webp";
import dinesh1 from "../assets/cores/dinesh1.webp";
import ganesh1 from "../assets/cores/ganesh1.webp";
import hritika1 from "../assets/cores/hritika1.webp";
import jestin1 from "../assets/cores/jestin1.webp";
import kushal1 from "../assets/cores/kushal1.webp";
import mayank1 from "../assets/cores/mayank1.webp";
import mohnish1 from "../assets/cores/mohnish1.webp";
import noel1 from "../assets/cores/noel1.webp";
import pranav1 from "../assets/cores/pranav1.webp";
import ritesh1 from "../assets/cores/ritesh1.webp";
import rithend1 from "../assets/cores/rithend1.webp";
import saloni1 from "../assets/cores/saloni1.webp";
import sanika1 from "../assets/cores/sanika1.webp";
import sonal1 from "../assets/cores/sonal1.webp";
import sourav1 from "../assets/cores/sourav1.webp";
import sulaj1 from "../assets/cores/sulaj1.webp";
import suprith1 from "../assets/cores/suprith1.webp";
import vinit1 from "../assets/cores/vinit1.webp";
import sabee1 from "../assets/cores/sabee1.webp";
import ritika from "../assets/cores/ritika1.webp";
import sethu from "../assets/cores/sethu1.webp";
import saad from "../assets/cores/saad1.webp";

const people = [
  {
    name: "Sujal Jaiswal",
    role: "ChairPerson",
    imageUrl: sujal,
  },
  {
    name: "Prailin Priyanka",
    role: "Vice-ChairPerson",
    imageUrl: prailin1,
  },
  {
    name: "Ganesh Udutha",
    role: "Committee Head",
    imageUrl: ganesh1,
  },
  {
    name: "Hritika Hanumanthkari",
    role: "Committee Co-Head",
    imageUrl: hritika1,
  },
  {
    name: "Ritika Pamu",
    role: "Committee Member",
    imageUrl: ritika,
  },
  {
    name: "Sethu Balan",
    role: "Committee Member",
    imageUrl: sethu,
  },
  {
    name: "Mohnish Kalaimani",
    role: "Finance Head",
    imageUrl: mohnish1,
  },
  {
    name: "Rithend Sushanth",
    role: "Finance Co-Head",
    imageUrl: rithend1,
  },
  {
    name: "Sonal Gupta",
    role: "Sponsorship Head",
    imageUrl: sonal1,
  },
  {
    name: "Pranav Iyengar",
    role: "Sponsorship Co-Head",
    imageUrl: pranav1,
  },
  {
    name: "Ritesh Chabarkar",
    role: "Art & Decor Head",
    imageUrl: ritesh1,
  },
  {
    name: "Sulaj Acharya",
    role: "Art & Decor Co-Head",
    imageUrl: sulaj1,
  },
  {
    name: "Khan Sabeehuddin",
    role: "Logistics Head",
    imageUrl: sabee1,
  },
  {
    name: "Dinesh Rajan",
    role: "Logistics Co-Head",
    imageUrl: dinesh1,
  },
  {
    name: "Sanika Patole",
    role: "Prh Head",
    imageUrl: sanika1,
  },
  {
    name: "Noel James",
    role: "Prh Co-Head",
    imageUrl: noel1,
  },
  {
    name: "Mayank Padmakar",
    role: "Gaming Head",
    imageUrl: mayank1,
  },
  {
    name: "Jestin Oommen",
    role: "Gaming Co-Head",
    imageUrl: jestin1,
  },
  {
    name: "Vinit Upadhyay",
    role: "Webdev Head",
    imageUrl: vinit1,
  },
  {
    name: "Sourav Mohanty",
    role: "Webdev Co-Head",
    imageUrl: sourav1,
  },
  {
    name: "Kushal Senghani",
    role: "Codex Head",
    imageUrl: kushal1,
  },
  {
    name: "Aneesh Sharma",
    role: "Codex Co-Head",
    imageUrl: aneesh1,
  },
  {
    name: "Saad Ansari",
    role: "GDSC Lead",
    imageUrl: saad,
  },
  {
    name: "Saloni Dalavi",
    role: "Technutz Head",
    imageUrl: saloni1,
  },
  {
    name: "Suprith Shetty",
    role: "Technutz Co-Head",
    imageUrl: suprith1,
  },
];

export default function Example() {
  return (
    <div className="bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-readex text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-500">
              Ziegers 2024 Unveils the Brains Behind the Magic. Get to Know Our
              Visionary Heads and Co-Heads.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 font-readex">
                  <img
                    className="mx-auto h-36 w-36 rounded-full lg:w-52 lg:h-52"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-xl text-white">
                      <h3 className="text-[16px] lg:text-2xl">{person.name}</h3>
                      <p className=" text-[#267ba3] lg:text-[16px] mt-[5px] lg:mt-0">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
