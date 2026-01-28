import { Card, CardContent } from "./ui/card";
import React from "@/assets/react.png";
import Angular from "@/assets/Angular.svg";
import Flutter from "@/assets/pngwing.com.png";
import NestJS from "@/assets/NestJS.png";
import DotNet from "@/assets/DotNet.png";
import RubyOnRails from "@/assets/Ruby_on_Rails-Logo.wine.png";
import FireBase from "@/assets/Firebase.png";
import MySQL from "@/assets/Mysql.png";
import MongoDB from "@/assets/MongoDB.png";
import Postgres from "@/assets/PostgreSQL-Logo.wine.png";
import Javascript from "@/assets/JavaScript.png";
import Typescript from "@/assets/TypeScript.png";
import CSharp from "@/assets/CSharp.png";
import Python from "@/assets/Python.png";
import Dart from "@/assets/Dart.png";
import Ruby from "@/assets/ruby.png";

const About = () => {
  const frontendTech = [
    { label: "React", src: React },
    { label: "Angular", src: Angular },
    { label: "Flutter", src: Flutter },
  ];

  const backendTech = [
    { label: "NestJS", src: NestJS },
    { label: ".NET", src: DotNet },
    { label: "Rails", src: RubyOnRails },
  ];

  const databaseTech = [
    { label: "MySQL", src: MySQL },
    { label: "PostgreSQL", src: Postgres },
    { label: "MongoDB", src: MongoDB },
    { label: "Firebase", src: FireBase },
  ];

  const languages = [
    { label: "JavaScript", src: Javascript },
    { label: "TypeScript", src: Typescript },
    { label: "C#", src: CSharp },
    { label: "Python", src: Python },
    { label: "Dart", src: Dart },
    { label: "Ruby", src: Ruby },
  ];

  return (
    <div className="flex flex-col items-center gap-[100px]">
      <div className="w-full flex flex-col gap-[30px] items-center">
        <h1 className="text-2xl font-bold text-sky-600">Frontend</h1>

        <div className="flex flex-wrap gap-[30px] justify-center">
          {frontendTech.map((tech, index) => (
            <Card
              key={index}
              className="group transition-transform duration-300 hover:bg-neutral-600 "
            >
              <CardContent className="flex flex-col items-center justify-center">
                <div className="h-[60px] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={tech.src}
                    alt={tech.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-semibold">{tech.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[30px] items-center">
        <h1 className="text-2xl font-bold text-sky-600">Backend</h1>

        <div className="flex flex-wrap gap-[30px] justify-center">
          {backendTech.map((tech, index) => (
            <Card
              key={index}
              className="group transition-transform duration-300 hover:bg-neutral-600"
            >
              <CardContent className="flex flex-col items-center justify-center">
                <div className="h-[60px] flex items-center justify-center p-1 transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={tech.src}
                    alt={tech.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-semibold">{tech.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[30px] items-center">
        <h1 className="text-2xl font-bold text-sky-600">Databases</h1>

        <div className="flex flex-wrap gap-[30px] justify-center">
          {databaseTech.map((tech, index) => (
            <Card
              key={index}
              className="group transition-transform duration-300 hover:bg-neutral-600"
            >
              <CardContent className="flex flex-col items-center justify-center">
                <div className="h-[60px] flex items-center justify-center p-1 transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={tech.src}
                    alt={tech.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-semibold">{tech.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[30px] items-center">
        <h1 className="text-2xl font-bold text-sky-600">Languages</h1>

        <div className="flex flex-wrap gap-[30px] justify-center">
          {languages.map((lang, index) => (
            <Card
              key={index}
              className="group transition-transform duration-300 hover:bg-neutral-600"
            >
              <CardContent className="flex flex-col items-center justify-center">
                <div className="h-[60px] flex items-center p-1 justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={lang.src}
                    alt={lang.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-semibold">{lang.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
