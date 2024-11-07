import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{ opacity: props.opacity }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityThirdSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            {" "}
            🖖 Hello and welcome to my IT intro page!{" "}
          </h1>
          <br />
          <p>Scroll down to continue</p>

          <p className="animate-bounce mt-6">🖱 + ↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            <img
              src="icons/radar.svg"
              style={{ float: "left", padding: "0 5px 0 0" }}
              alt="radar"
            />{" "}
            Tech I enjoy working with:{" "}
          </h1>
          <p className="mt-3">
            <b>Backend:</b>
          </p>
          <ul className="leading-9" style={{ padding: "0 0 0 25px" }}>
            <li>☕ Java</li>
            <li>
              <img
                src="icons/aws.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="aws"
              />
              AWS
            </li>
            <li>
              {" "}
              <img
                src="icons/redis.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="redis"
              />{" "}
              Redis
            </li>
            <li>
              {" "}
              <img
                src="icons/lambda.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="lambda"
              />{" "}
              Lambda
            </li>
            <li>🐘 PostgreSQL</li>
            <li>
              {" "}
              <img
                src="icons/dynamodb.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="dynamodb"
              />{" "}
              DynamoDB
            </li>
            <li>
              {" "}
              <img
                src="icons/rabbitmq.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="rabbitmq"
              />{" "}
              RabbitMQ
            </li>
          </ul>
          <br />
          <b>Frontend:</b>
          <ul className="leading-9" style={{ padding: "0 0 0 25px" }}>
            <li>
              <img
                src="icons/react.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="react"
              />
              React
            </li>
            <li>
              <img
                src="icons/angular.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="angular"
              />
              Angular
            </li>
            <li>
              {" "}
              <img
                src="icons/svelte.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="svelte"
              />
              Svelte
            </li>
            <li>
              {" "}
              <img
                src="icons/threejs.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="threejs"
              />
              ThreeJS
            </li>
            <li>
              {" "}
              <img
                src="icons/d3js.svg"
                style={{ float: "left", padding: "7px 5px 0 0" }}
                alt="d3js"
              />
              D3.JS
            </li>
          </ul>
          <p className="animate-bounce mt-6">🖱 + ↓</p>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="font-semibold font-serif text-2xl">📫 Contact </h1>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            <svg viewBox="20 10 260 45" xmlns="http://www.w3.org/2000/svg">
              <text x="20" y="35">
                📧 mihalybrs
              </text>
              <text x="115" y="35">
                @
              </text>
              <text x="130" y="35">
                gmail.
              </text>
              <text x="175" y="35">
                com
              </text>
            </svg>
            <img
              src="icons/github.svg"
              style={{ float: "left", padding: "0 7px 0 0" }}
              alt="github"
            />
            <a href="https://github.com/boromi">GitHub profile</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
