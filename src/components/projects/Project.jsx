import React, { useEffect, useRef, useState } from "react";
import Todo from "../../assets/1.png";
import Portfolio from "../../assets/2.png";
import FoodOrder from "../../assets/3.png";
import EmployeeLeave from "../../assets/4.png";

import "./Project.css";

const Project = () => {
    const steps = [
        { id: 1, title: "ToDoList", desc: "Simple and Smart Task Organizer", img: Todo },
        {
            id: 2,
            title: "Portfolio",
            desc: "Highlights of my academic projects and learning journey. Reflecting growth, innovation, and a passion for excellence.",
            img: Portfolio,
        },
        { id: 3, title: "Food Order", desc: "Order the Food And Calculate the Bill.", img: FoodOrder },
        { id: 4, title: "EmployeeLeave", desc: "Check the Employee id is Correct and Apply the Leave.", img: EmployeeLeave },
    ];

    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDown, setScrollDown] = useState(true);

    // ✅ Track scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollDown(currentScrollY > lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // ✅ Create refs for all steps
    const stepRefs = useRef([]);
    if (stepRefs.current.length !== steps.length) {
        stepRefs.current = steps.map((_, i) => stepRefs.current[i] || React.createRef());
    }

    // ✅ Custom Hook: Animate on scroll (defined inline for convenience)
    const useOnScreenScrollDown = (ref, threshold = 0.3) => {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            if (!ref.current) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    // When entering viewport while scrolling down
                    if (entry.isIntersecting && scrollDown) {
                        setIsVisible(true);
                    }
                    // When leaving viewport while scrolling up
                    else if (!entry.isIntersecting && !scrollDown) {
                        setIsVisible(false);
                    }
                },
                {
                    threshold,
                    rootMargin: "0px 0px -50px 0px", // start animating slightly before visible
                }
            );

            observer.observe(ref.current);

            // ✅ Clean up only this element’s observer
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        }, [scrollDown, threshold]);

        return isVisible;
    };

    return (
        <section className="design-page section" id="Project">
            <header className="design-header">
                <h1>Project</h1>
            </header>

            <div className="timeline">
                {steps.map((step, index) => {
                    const stepRef = stepRefs.current[index];
                    const isVisible = useOnScreenScrollDown(stepRef);

                    return (
                        <div
                            key={step.id}
                            ref={stepRef}
                            className={`timeline-step ${index % 2 === 0 ? "left" : "right"} ${isVisible ? "visible" : ""}`}
                        > {console.log(index % 2, IDBIndex)}
                            <div className="timeline-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>

                            <div className="timeline-circle">{step.id}</div>

                            {step.img && (
                                <div className="timeline-image">
                                    <img src={step.img} alt={step.title} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Project;
