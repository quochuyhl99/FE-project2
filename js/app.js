/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// get all sections in the DOM
const sections = document.querySelectorAll("section");

// Build the navbar based on section in the DOM
const navbarList = document.getElementById("navbar__list");
sections.forEach((section, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Section ${index + 1}`;
    navbarList.appendChild(listItem);
});

// Add class 'active' to navbar section
const activeNavbarSection = (index) => {
    for (let i = 0; i < navbarSections.length; i++) {
        navbarSections[i].classList.remove("active");
    }
    navbarSections[index].classList.add("active");
};

// Add class 'active' to section
const activeSection = (sectionTarget) => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("your-active-class");
    }
    sectionTarget.classList.add("your-active-class");
};

// Scroll to active section
const scrollToActiveSection = (index) => {
    const sectionTarget = document.querySelector(`#section${index}`);
    activeSection(sectionTarget);
    sectionTarget.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Check section in viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Begin Events
 *
 */
// Add click event to each navbar section
const navbarSections = document.querySelectorAll("#navbar__list li");
navbarSections.forEach((section, index) => {
    section.addEventListener("click", (listener) => {
        activeNavbarSection(index);
        scrollToActiveSection(index + 1);
    });
});

// Add Scroll event
document.addEventListener("scroll", (event) => {
    for (let i = 0; i < sections.length; i++) {
        if (isElementInViewport(sections[i])) {
            activeNavbarSection(i);
            activeSection(sections[i]);
        }
    }
});
