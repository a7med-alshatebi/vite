/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html","./serv.html","./src/**/*.{jsx,ts,tsx,vue}" ,"./src/**/*.{css,scss,sass}", "./about.html","./cont.html"],
    theme: {
      extend: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) 
  
        'telephone': '375px',
        // => @media (min-width: 375px) { ... }
      
        listStyleImage: {
          checkmark: 'url("/img/checkmark.png")', 
      },
      backgroundImage: {
        'hero-pattern': "url('src/socatra.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    plugins: [],
  }
  }