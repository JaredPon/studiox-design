export interface Requirements {
  name: string;
  id: string;
  tasks: Task[];
}

interface Task {
  id: string;
  description: string;
  src: string;
}

export const similarWebsites: Requirements = {
  name: "Similar Sites",
  id: "2.1",
  tasks: [
    {
      id: "Willow Tree Design Co.",
      description:
        "Willow Tree Design Co. leverages many animations on the homepage. The animations help to keep the webpage looking modern and the user engaged when viewing it.",
      src: "https://www.willowtreedesign.ca/",
    },
    {
      id: "Six Degrees ltd.",
      description:
        "Six Degrees does a great job at leveraging a consistent theme and color palette. The simple and elegant design is pleasing to the eye and functional.",
      src: "https://www.sixdegreesltd.com/",
    },
    {
      id: "True Market",
      description:
        "The True Market website has a great flow to the homepage. The backgrounds often intentionally overlap seamlessly connecting the various sections. Additionally the site looks great as you resize down to mobile screen sizes.",
      src: "https://truemarket.ca/",
    },
  ],
};

export const downloadableWebsites: Requirements = {
  name: "Downloadable Sites",
  id: "2.1",
  tasks: [
    {
      id: "Heroicons",
      description:
        "Heroicons provides a library of icons that can be used on a website and is very flexible in its usage. Heroicons allows you to install the icons as an npm package or download them individually as SVGs. Additionally it has multiple variations of the same icons to allow you to fit the design style.",
      src: "https://heroicons.com",
    },
    {
      id: "Pixabay",
      description:
        "Pixabay provides sound effects that can be used to enhance a website. These sound effects are user uploaded, free to use and easily searchable.",
      src: "https://pixabay.com/sound-effects/",
    },
    {
      id: "Pexels",
      description:
        "Pexels provides stock images that can be used on a website and are free to download. Pexels has a very large gallery of images which can be searched by color hex codes to easily find images that match a color palette",
      src: "https://www.pexels.com/",
    },
  ],
};

export const technicalWebsites: Requirements = {
  name: "Technical Information Websites",
  id: "2.1",
  tasks: [
    {
      id: "Tailwind CSS",
      description:
        "Tailwind is a CSS library that was leveraged to build this website. The documentation provides guidance on how to use the built in classes to achieve various results as well as how to extend the default classes that Tailwind provides.",
      src: "https://tailwindcss.com/docs",
    },
    {
      id: "MDN Web Docs",
      description:
        "MDN web docs provide detailed documentation on the JavaScript language. It has lots of detail and many of the pages come with an interface where you can edit and run code snippets.",
      src: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      id: "W3 Schools",
      description:
        "W3 schools is a great reference for native CSS features. It has a comprehensive glossary and provides many examples that are easy to work with.",
      src: "https://www.w3schools.com/css/default.asp",
    },
  ],
};

export const htmlRequirements: Requirements = {
  name: "HTML5",
  id: "2.4.1",
  tasks: [
    {
      id: "a",
      description:
        "Appropriate HTML5 section elements tags, including the use of semantic HTML5 elements used in sectioning",
      src: "/",
    },
    {
      id: "b",
      description: "Images both static and clickable",
      src: "/gallery",
    },
    {
      id: "c",
      description: "Use of appropriate special characters",
      src: "/",
    },
    { id: "d", description: "Use of appropriate <meta> tags", src: "/" },
    {
      id: "e",
      description:
        "Home page footer, use of the <address> element, and to indicate dynamically when the web site was last updated or modified by using BOM object",
      src: "/",
    },
  ],
};

export const cssRequirements: Requirements = {
  name: "CSS3",
  id: "2.4.2",
  tasks: [
    {
      id: "a",
      description:
        "Format the appearance of paragraphs, lists, headers, background images, tables, forms with the use of appropriate CSS3 selectors",
      src: "/",
    },
    {
      id: "b",
      description:
        "CSS3 contextual selectors (e1, e2, e3; e f; e > f; e + f) and at least two other CSS3 contextual selectors (e1, e2, e3; e f; e > f; e + f) and at least two other attribute selectors, besides class and id attribute selectors",
      src: "/events",
    },
    {
      id: "c",
      description:
        "CSS3 styles for color (RGBA & HSLA). Demonstrate that you understand the concept of progressive enhancement",
      src: "/",
    },
    {
      id: "d",
      description:
        "Appropriate use of dynamic pseudo-classes to highlight hyperlinks states of link, visited, active, hover, including focus and two structural pseudo-classes: first-of-type and last-of-type",
      src: "/crossreference",
    },
    {
      id: "e",
      description:
        "Appropriate use of CSS3 background styles (background size, background-clip, background-origin, etc.), padding, margins, borders, including the use of rounded corners",
      src: "/events",
    },
    {
      id: "f",
      description:
        "The user of a drop cap created with CSS3 is to be implemented at an appropriate place on your home page",
      src: "/",
    },
    {
      id: "g",
      description:
        "Use of CSS3 page layout techniques with grid, flex, float and positioning MUST ALL be demonstrated. The use of framework for layout is discouraged due to ALL be demonstrated. The use of framework for layout is discouraged due to too many unknown factors",
      src: "/events",
    },
    {
      id: "h",
      description:
        "CSS3 text, box shadows, transform, rotate, opacity features must be applied appropriately on your web site",
      src: "/events",
    },
  ],
};

export const formRequirements: Requirements = {
  name: "Web Form",
  id: "2.4.3",
  tasks: [
    {
      id: "a",
      description:
        "Appropriate form elements including the use of HTML5 form widgets",
      src: "/contact",
    },
    {
      id: "b",
      description: "Appropriate CSS3 styles applied to Web Forms",
      src: "/contact",
    },
    {
      id: "c",
      description: "Use of inline form validation with the focus pseudo-class",
      src: "/contact",
    },
  ],
};

export const tableRequirements: Requirements = {
  name: "Web Tables",
  id: "2.4.4",
  tasks: [
    {
      id: "a",
      description:
        "Use of web tables to depict relevant appropriate business related mut be demonstrated",
      src: "/contact",
    },
  ],
};

export const mediaRequirements: Requirements = {
  name: "Multimedia",
  id: "2.4.5",
  tasks: [
    {
      id: "a",
      description:
        "Appropriate use of sound and video elements on your site. Note: Ensure audio and video clip are of no more than 30 seconds duration",
      src: "/events",
    },
    {
      id: "b",
      description:
        "Appropriate use of CSS3 transitions and animations that enhances functionality of your website",
      src: "/events",
    },
  ],
};

export const javascriptRequirements: Requirements = {
  name: "Javascript",
  id: "2.4.6",
  tasks: [
    {
      id: "a",
      description:
        "Use of appropriate variables, arithmetic, comparison and logical operators, subroutines, functions, arrays, conditional statements, conditional operators, running time commands with system clock",
      src: "/events",
    },
    {
      id: "b",
      description:
        "Use of system date (example: clock, countdown timer to an event) on your web site.",
      src: "/events",
    },
    {
      id: "c",
      description:
        "Validating appropriate form input by using JavaScript functions (client side).",
      src: "/contact",
    },
    {
      id: "d",
      description: "Use of JavaScript alerts for validation purposes.",
      src: "/contact",
    },
    {
      id: "e",
      description: "Use of BOM/DOM in emulating events using event handlers.",
      src: "/contact",
    },
  ],
};

export const responsiveRequirements: Requirements = {
  name: "Responsive Design",
  id: "2.4.7",
  tasks: [
    {
      id: "a.i",
      description:
        "CSS Grid Layout using the display: grid (Note: The use of third party grid/flex layouts is NOT allowed.)",
      src: "/events",
    },
    {
      id: "a.ii",
      description:
        "CSS Flex Layout using the display: flex (Note: The use of third party grid/flex layouts is NOT allowed.)",
      src: "/events",
    },
    {
      id: "a.iii",
      description: "CSS Positioning",
      src: "/",
    },
    {
      id: "b",
      description:
        "The use of contextual selectors to control sub level menus, including the use of a navicon image for mobile design is required. Note: For small screen sizes, be mindful of number of menus and sub menus that are visible by hovering on the navicon image",
      src: "/",
    },
    {
      id: "c",
      description: "Responsive Images",
      src: "/gallery",
    },
    {
      id: "d",
      description: "Responsive Web Form",
      src: "/contact",
    },
  ],
};

export const ctaRequirements: Requirements = {
  name: "Call to Action (CTAs)",
  id: "2.4.8",
  tasks: [
    {
      id: "a",
      description:
        "Your website must include at least THREE CTAs located on the homepage of the website.",
      src: "/",
    },
  ],
};

export const projectDocumentation: Requirements = {
  name: "Project Documentation",
  id: "2.5",
  tasks: [
    {
      id: "Web Project Proposal",
      description: "pdf",
      src: "/documents/resume.pdf",
    },
    {
      id: "Web Project Documentation",
      description: "pdf",
      src: "/documents/resume.pdf",
    },
  ],
};
