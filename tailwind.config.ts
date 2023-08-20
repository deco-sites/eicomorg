// Daisi UI theme
export const theme = {
  "primary": "hsl(180 100% 10%)",
  "secondary": "hsl(0 39% 39%)",
  "accent": "hsl(150 100% 50%)",
  "neutral": "hsl(0 0% 20%)",
  "base-100": "hsl(0 0% 100%)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",

  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase", // set default text transform for buttons
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

export default {
  content: ["./**/*.tsx"],
  theme: {
    // https://tailwindcss.com/docs/container#centering-by-default
    container: {
      center: true,
    },
    extend: {
      display: ["group-hover"],
      animation: {
        "slide-left": "slide-left-frame 1s ease normal",
        "slide-right": "slide-right-frame 1s ease normal",
        "long-slide-right": "long-slide-right-frame .7s ease normal",
        "slide-bottom": "slide-bottom-frame 1s ease normal forwards",
        "slide-banner-right": "slide-banner-right-frame 1s ease normal",
        "progress": "progress-frame ease normal",
        "expand-bar": "expand-bar-frame 1s infinite ease-out normal",
        "button-expand": "expand-button-frame 1s ease normal forwards",
        "slide-top-bottom": "slide-top-bottom-frame 1s ease normal forwards",
        "slide-bottom-top": "slide-bottom-top-frame 1s ease normal forwards",
        "slide-top-right": "slide-top-right-frame 1s ease normal forwards",
        "slide-top-left": "slide-top-left-frame 1s ease normal forwards",
        "slide-bottom-right": "slide-bottom-right-frame 1s ease normal forwards",
        "slide-bottom-left": "slide-bottom-left-frame 1s ease normal forwards",
        "navbar-item-open-icon": "navbar-item-open-icon-frame 1s ease normal forwards",
        "navbar-item-close-icon": "navbar-item-close-icon-frame 1s ease normal forwards",
      },
      keyframes: {
        "slide-banner-right-frame": {
          from: { opacity: 0, backgroundPosition: "100px" },
          to: { opacity: 1, BackgroundPosition: "cover" },
        },
        "slide-left-frame": {
          from: { opacity: 0, transform: "translateX(20%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { opacity: 0, transform: "translateX(-20%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "long-slide-right-frame": {
          from: { opacity: 0, transform: "translateX(-70%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { opacity: 0, transform: "translateY(30%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "expand-bar-frame": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "expand-button-frame": {
          from: { transform: "scale(.3)", visibility: "hidden", opacity: 0 },
          to: { transform: "scale(1)", visibility: "visible", opacity: 1 },
        },
        "progress-frame": {
          from: {
            "--dot-progress": "0%",
          },
          to: {
            "--dot-progress": "100%",
          },
        },
        "slide-top-bottom-frame": {
          from: { opacity: 0, transform: "translateY(-20%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-bottom-top-frame": {
          from: { opacity: 0, transform: "translateY(20%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-top-right-frame": {
          from: { opacity: 0, transform: "translateY(-20%) translateX(-20%)" },
          to: { opacity: 1, transform: "translateY(0) translateX(0)" },
        },
        "slide-top-left-frame": {
          from: { opacity: 0, transform: "translateY(-20%) translateX(20%)" },
          to: { opacity: 1, transform: "translateY(0) translateX(0)" },
        },
        "slide-bottom-right-frame": {
          from: { opacity: 0, transform: "translateY(20%) translateX(-20%)" },
          to: { opacity: 1, transform: "translateY(0) translateX(0)" },
        },
        "slide-bottom-left-frame": {
          from: { opacity: 0, transform: "translateY(-20%) translateX(20%)" },
          to: { opacity: 1, transform: "translateY(0) translateX(0)" },
        },
        "navbar-item-open-icon-frame": {
          from: { transform: "rotateX(0)" },
          to: { transform: "rotateX(180deg)" },
        },
        "navbar-item-close-icon-frame": {
          from: { transform: "rotateX(180deg)" },
          to: { transform: "rotateX(0)" },
        },
      },
      fontFamily: {
        "AvenirNextLTPro": ["AvenirNextLTPro"],
        "Gravity": ["Gravity"],
      },
      screens: {
        "xs": "320px",
        "xl": "2000px",
      },
      listStyleType: {
        square: "square",
      },
      backgroundImage: {
        "gray-lines-texture": "url('/texture-lines-grays.svg')",
      },
    },
  },
};
