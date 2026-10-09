module.exports = {
    name: "Optimal Plumbing",
    legalName: "Optimal Home Experts LLC",
    email: "optimalhomeexperts@gmail.com",
    phoneForTel: "425-791-0480",
    phoneFormatted: "(425) 791-0480",
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://optimaldemo.netlify.app",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
    isDemo: (process.env.URL || "").includes("netlify.app"),
};
