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

export const htmlRequirements: Requirements = {
  name: "HTML5",
  id: "2.4.1",
  tasks: [
    {
      id: "a",
      description:
        "Appropriate HTML5 section elements tags, including the use of semantic HTML5 elements used in sectioning",
      src: "",
    },
    { id: "b", description: "Images both static and clickable", src: "" },
    {
      id: "c",
      description: "Use of appropriate special characters",
      src: "",
    },
    { id: "d", description: "Use of appropriate <meta> tags", src: "" },
    {
      id: "e",
      description:
        "Home page footer, use of the <address> element, and to indicate dynamically when the web site was last updated or modified by using BOM object",
      src: "",
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
      src: "",
    },
    {
      id: "b",
      description:
        "CSS3 contextual selectors (e1, e2, e3; e f; e > f; e + f) and at least two other CSS3 contextual selectors (e1, e2, e3; e f; e > f; e + f) and at least two other attribute selectors, besides class and id attribute selectors",
      src: "",
    },
    {
      id: "c",
      description:
        "CSS3 styles for color (RGBA & HSLA). Demonstrate that you understand the concept of progressive enhancement",
      src: "",
    },
    {
      id: "d",
      description:
        "Appropriate use of dynamic pseudo-classes to highlight hyperlinks states of link, visited, active, hover, including focus and two structural pseudo-classes: first-of-type and last-of-type",
      src: "",
    },
    {
      id: "e",
      description:
        "Appropriate use of CSS3 background styles (background size, background-clip, background-origin, etc.), padding, margins, borders, including the use of rounded corners",
      src: "",
    },
    {
      id: "f",
      description:
        "The user of a drop cap created with CSS3 is to be implemented at an appropriate place on your home page",
      src: "",
    },
    {
      id: "g",
      description:
        "Use of CSS3 page layout techniques with grid, flex, float and positioning MUST ALL be demonstrated. The use of framework for layout is discouraged due to ALL be demonstrated. The use of framework for layout is discouraged due to too many unknown factors",
      src: "",
    },
    {
      id: "h",
      description:
        "CSS3 text, box shadows, transform, rotate, opacity features must be applied appropriately on your web site",
      src: "",
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
      src: "",
    },
    {
      id: "b",
      description: "Appropriate CSS3 styles applied to Web Forms",
      src: "",
    },
    {
      id: "c",
      description: "Use of inline form validation with the focus pseudo-class",
      src: "",
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
      src: "",
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
      src: "",
    },
    {
      id: "b",
      description:
        "Appropriate use of CSS3 transitions and animations that enhances functionality of your website",
      src: "",
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
      src: "",
    },
    {
      id: "b",
      description:
        "Use of system date (example: clock, countdown timer to an event) on your web site.",
      src: "",
    },
    {
      id: "c",
      description:
        "Validating appropriate form input by using JavaScript functions (client side).",
      src: "",
    },
    {
      id: "d",
      description: "Use of JavaScript alerts for validation purposes.",
      src: "",
    },
    {
      id: "e",
      description: "Use of BOM/DOM in emulating events using event handlers.",
      src: "",
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
      src: "",
    },
    {
      id: "a.ii",
      description:
        "CSS Flex Layout using the display: flex (Note: The use of third party grid/flex layouts is NOT allowed.)",
      src: "",
    },
    {
      id: "a.iii",
      description: "CSS Positioning",
      src: "",
    },
    {
      id: "b",
      description:
        "The use of contextual selectors to control sub level menus, including the use of a navicon image for mobile design is required. Note: For small screen sizes, be mindful of number of menus and sub menus that are visible by hovering on the navicon image",
      src: "",
    },
    {
      id: "c",
      description: "Responsive Images",
      src: "",
    },
    {
      id: "d",
      description: "Responsive Web Form",
      src: "",
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
      src: "",
    },
  ],
};
