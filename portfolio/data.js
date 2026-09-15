/* ============================================================================
   data.js  —  THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE WEBSITE.

   Everything you see on the page comes from here. Change the words between
   the quote marks, save the file, refresh the browser. That's it.

   Three rules:
     1. Keep the quote marks "  " around every piece of text.
     2. Keep the comma at the end of each line.
     3. If your text contains a double quote, write it as \"  (backslash first).

   Lines starting with //  are notes to you. The website ignores them.
   ========================================================================= */

const SITE = {

  /* ---------------------------------------------------------------------
     1. BASICS — name, headline, contact
     ------------------------------------------------------------------ */
  name: "Anil Sehgal",

  // The single line that sits under your name.
  headline: "Sales & distribution leadership — automotive aftermarket, lubricants and spares",

  location: "Faridabad, India",

  // Email is split in two so that spam robots can't read it off the page.
  // script.js joins the halves back together. Leave it split.
  emailUser: "anilsehgal69",
  emailDomain: "gmail.com",

  phone: "+91 98105 19650",

  // Set to false if you'd rather not publish your phone number.
  // Recruiters can still reach you by email and LinkedIn.
  showPhone: true,

  linkedin: "https://linkedin.com/in/anil-sehgal",

  // Put your PDF in this same folder and write its exact filename here.
  // Set showResumeButton to false to hide the download button.
  resumeFile: "Anil-Sehgal-Resume.pdf",
  showResumeButton: true,

  // Your photo. Put the image file in a folder called "images" next to this
  // file, then write "images/your-photo.jpg" below.
  // Leave it as "" (empty) and the page shows a clean monogram instead.
  photo: "",


  /* ---------------------------------------------------------------------
     2. OPENING STATEMENT — the paragraph at the top of the page
     ------------------------------------------------------------------ */
  intro: "For thirty years I have built teams first and businesses second — and found that the order matters. Across automotive distribution, media, direct sales and hospitality, the method has not changed: put the operating discipline in place before the growth targets, and let that earn a wider mandate.",


  /* ---------------------------------------------------------------------
     3. WHAT I'M LOOKING FOR
     Set show to false to remove this section from the page entirely.
     ------------------------------------------------------------------ */
  seeking: {
    show: true,
    heading: "What I'm looking for",
    body: "A senior P&L or business-head mandate in passenger-vehicle lubricants or spare-parts distribution, with particular interest in companies building a private-label programme — where the work is to create a channel rather than inherit one. Based in Faridabad and open to a national remit.",
  },


  /* ---------------------------------------------------------------------
     4. HOW I WORK  —  the leadership record
     Add a new point by copying one { ... } block and changing the words.
     ------------------------------------------------------------------ */
  approachHeading: "How I lead",

  approachIntro: "Four things have held true across every business I have run.",

  approach: [
    {
      title: "Retention is the growth strategy",
      body: "Held team attrition to 10% against an industry average of 45%, sustained over six years — through the same period in which the business quadrupled synthetic lubricant sales. People leadership and business results are built together, not traded against each other.",
    },
    {
      title: "Build the discipline, then earn the mandate",
      body: "At Gulati Agencies I joined to run one channel and built out process, reporting and training from day one. That foundation earned progressively wider ownership across Goodyear, Michelin and TVS Accessories — three structurally different channels — and then the whole business. At GoMechanic I did it again from a standing start.",
    },
    {
      title: "Own the P&L, not just the topline",
      body: "Full profit-and-loss responsibility in every senior role held — from a ₹250 crore distribution business to a ₹35 crore private-label venture built from zero — instituting financial controls and supply-chain discipline in each.",
    },
    {
      title: "The playbook travels",
      body: "Rebuilt the same leadership and ownership system across four sectors: automotive aftermarket, media entrepreneurship, direct selling and hospitality. Recognised with Business Excellence awards in 2010, 2014 and 2017.",
    },
  ],


  /* ---------------------------------------------------------------------
     5. EXPERIENCE
     To add a job: copy one whole { ... } block, paste it above the block
     below it, and change the words. Newest role goes at the top.
     ------------------------------------------------------------------ */
  experienceHeading: "Experience",

  experience: [
    {
      dates: "Jan 2025 – Present",
      role: "Assistant Vice President, Sales",
      company: "OE Business Support LLP (3M PPF)",
      place: "Ghaziabad",
      points: [
        "Took ownership of a new exclusive distribution mandate spanning 3M Paint Protection and Sun Control Films, Tata BTST spares, Exide Batteries and Yokohama Tyres.",
        "Built the first 3M PPF Detailing Studio Select Partner Program in North India from concept to a network of 15+ studios, hiring and training partner teams from the ground up.",
      ],
    },
    {
      dates: "Jan 2021 – Nov 2024",
      role: "Assistant Vice President, Spares Sales",
      company: "GoMechanic",
      place: "Gurgaon",
      points: [
        "Built a 45-member cross-functional team from scratch and led it to launch a nationwide private-label spares and lubricants business, scaling to ₹35 crore in 18 months with 120+ distributors across 20 states.",
        "Held full P&L ownership — streamlined the supply chain, instituted financial controls, and managed distributor onboarding, margins and retention across the network.",
        "Aligned marketing and procurement around a single growth agenda as the venture moved from concept to national coverage.",
      ],
    },
    {
      dates: "Jun 2009 – Nov 2020",
      role: "Business Head, Automotive",
      company: "Gulati Agencies Pvt Ltd",
      place: "Faridabad",
      points: [
        "Joined as Installed Business Manager, Exxon Mobil's designation for the OEM-dealership channel role, and built out processes, reporting systems, team training and ownership culture from day one.",
        "Took on distinct channel-building responsibility with each brand added — Mobil aftermarket and TVS Accessories across retailers, mechanics and free-standing workshops; Goodyear across OEM dealerships; Michelin across the tyre-dealer network.",
        "Promoted to Business Head in 2014 with full ownership of a ₹250 crore turnover business, covering authorised and retail sectors plus the Mobil 1 Car Care Outlet programme across 300 authorised workshops and 3,000 retailers.",
        "Grew Mobil 1 synthetic oil sales 700% and quadrupled synthetic lubricant sales overall while holding attrition at 10%.",
      ],
    },
  ],


  /* ---------------------------------------------------------------------
     6. BRANDS
     Set show to false to hide this section.
     These are listed as names only — using company logos would need their
     permission, so the page deliberately avoids them.
     ------------------------------------------------------------------ */
  brands: {
    show: true,
    heading: "Brands built and distributed",
    list: [
      "Exxon Mobil",
      "Mobil 1",
      "3M",
      "Goodyear",
      "Michelin",
      "Yokohama",
      "Exide",
      "Maruti Genuine Parts",
      "TVS Accessories",
      "Tata BTST",
      "P&G",
      "GoMechanic",
    ],
  },


  /* ---------------------------------------------------------------------
     7. EARLIER CAREER
     ------------------------------------------------------------------ */
  earlierHeading: "Earlier career",

  earlier: [
    {
      dates: "2004 – 2009",
      role: "Founder",
      company: "Adi Studios",
      points: [
        "Built and led a media house from scratch, hiring and managing a full production and client-servicing team serving 30+ real estate developers and architects nationwide.",
      ],
    },
    {
      dates: "1999 – 2004",
      role: "Founder",
      company: "Japan Life India",
      points: [
        "Recruited, trained and led 600+ distributors across five states, generating ₹5 crore in revenue — the first proof of the network-building approach carried through every role since.",
      ],
    },
    {
      dates: "1989 – 1999",
      role: "Hospitality management",
      company: "Rembrandt Hotel, London · Sofitel Surya, Delhi · The Old Anchor, Goa · Park Royal, Delhi",
      points: [
        "Six promotions in ten years across managerial roles — foundational training in service leadership, team management and operational ownership.",
      ],
    },
  ],


  /* ---------------------------------------------------------------------
     8. EDUCATION
     ------------------------------------------------------------------ */
  educationHeading: "Education",

  education: [
    {
      qualification: "Professional Diploma in Hotel Management",
      institution: "Westminster College, London, United Kingdom",
      dates: "1990 – 1992",
    },
    {
      qualification: "Diploma in Hotel Management",
      institution: "Institute of Hotel Management, Catering & Technology, Delhi",
      dates: "1986 – 1989",
    },
  ],


  /* ---------------------------------------------------------------------
     9. CLOSING / CONTACT
     ------------------------------------------------------------------ */
  contactHeading: "Get in touch",
  contactBody: "If you are building a distribution business and want someone who has done it from zero, I would be glad to talk.",

};
