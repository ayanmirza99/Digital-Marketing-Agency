import gsap from "gsap";
import { useEffect, useRef } from "react";

const FramerButton = ({ children, backgroundColor = "#455CE9", ...props }) => {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeOutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ pinned: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circle.current,
        {
          top: "-150%",
          width: "125%",
          duration: 0.25,
        },
        "exit"
      );
  }, []);
  const manageMouseEnter = () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
      timeOutId = null;
    }
    timeline.current.tweenFromTo("enter", "exit");
  };
  const manageMouseLeave = () => {
    timeOutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <div
      style={{ overflow: "hidden" }}
      className="rounded-[3em] cursor-pointer relative flex items-center justify-center py-[15px] px-[60px]"
      {...props}
      onMouseEnter={(e) => manageMouseEnter(e)}
      onMouseLeave={(e) => manageMouseLeave(e)}
    >
      {children}
      <div
        ref={circle}
        className="h-[150%] w-[100%] absolute rounded-full top-[100%]"
        style={{ backgroundColor }}
      ></div>
    </div>
  );
};

export default FramerButton;
