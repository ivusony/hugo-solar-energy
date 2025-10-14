const tailwindConfig = {
  content: [
    // 1. Files in the top-level 'src' directory (where your app starts)
    './src/**/*.{js,ts,jsx,tsx}',
    
    // 2. All files within the 'components' directory (at the project root)
    './components/**/*.{js,ts,jsx,tsx}',
    
    // 3. All files within the 'pages' directory inside 'src'
    './src/pages/**/*.{js,ts,jsx,tsx}',
    
    // Optional, but recommended for robustness if you have any custom CSS files
    './**/*.module.css', 
  ],
  // ... rest of your config ...
}

export default tailwindConfig;