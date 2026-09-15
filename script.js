/* ============================================================================
   script.js — takes everything in data.js and puts it on the page.

   You should not need to edit this file to change content. It is here so that
   data.js can stay simple. Comments explain what each part does, in case you
   want to look under the bonnet.
   ========================================================================= */

(function () {
  "use strict";

  /* --- Small helpers -------------------------------------------------- */

  // Finds the spot in index.html marked with data-mount="name".
  function slot(name) {
    return document.querySelector('[data-mount="' + name + '"]');
  }

  // Writes plain text safely (stops any stray characters breaking the page).
  function text(name, value) {
    var el = slot(name);
    if (el && value) { el.textContent = value; }
  }

  // Escapes text before it is placed inside generated HTML.
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Rebuilds the email address from its two halves in data.js.
  var email = SITE.emailUser + "@" + SITE.emailDomain;


  /* --- 1. Name, headline, opening paragraph --------------------------- */

  document.title = SITE.name + " — " + SITE.headline;

  text("navName", SITE.name);
  text("heroName", SITE.name);
  text("heroPlace", SITE.location);
  text("heroHeadline", SITE.headline);
  text("heroIntro", SITE.intro);


  /* --- 2. Buttons ----------------------------------------------------- */

  var actions = [
    '<a class="btn btn--solid" href="mailto:' + esc(email) + '">Email me</a>',
    '<a class="btn btn--outline" href="' + esc(SITE.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>'
  ];

  if (SITE.showResumeButton && SITE.resumeFile) {
    actions.push('<a class="btn btn--outline" href="' + esc(SITE.resumeFile) + '" download>Download resume</a>');
  }

  slot("heroActions").innerHTML = actions.join("");


  /* --- 3. Photo, or a monogram if no photo is set --------------------- */

  var portrait = slot("heroPortrait");

  if (SITE.photo) {
    portrait.innerHTML = '<img src="' + esc(SITE.photo) + '" alt="' + esc(SITE.name) + '">';
  } else {
    // Takes the first letter of each word in the name, e.g. "AS".
    var initials = SITE.name.split(/\s+/).map(function (w) {
      return w.charAt(0).toUpperCase();
    }).join("");
    portrait.innerHTML = '<div class="monogram" aria-hidden="true">' + esc(initials) + "</div>";
  }


  /* --- 4. What I'm looking for ---------------------------------------- */

  var seekingSection = slot("seeking");

  if (SITE.seeking && SITE.seeking.show) {
    seekingSection.innerHTML =
      '<div class="wrap"><div class="seeking__panel">' +
        "<h2>" + esc(SITE.seeking.heading) + "</h2>" +
        "<p>" + esc(SITE.seeking.body) + "</p>" +
      "</div></div>";
  } else {
    seekingSection.remove();
  }


  /* --- 5. How I lead --------------------------------------------------- */

  text("approachHeading", SITE.approachHeading);
  text("approachIntro", SITE.approachIntro);

  slot("approach").innerHTML = SITE.approach.map(function (item) {
    return '<article class="principle">' +
             "<h3>" + esc(item.title) + "</h3>" +
             "<p>" + esc(item.body) + "</p>" +
           "</article>";
  }).join("");


  /* --- 6. Experience and earlier career -------------------------------- */

  // Both sections share the same shape, so they share one builder.
  function buildRoles(list) {
    return list.map(function (job) {
      var bullets = (job.points || []).map(function (p) {
        return "<li>" + esc(p) + "</li>";
      }).join("");

      var company = esc(job.company);
      if (job.place) { company += ", " + esc(job.place); }

      return '<article class="role">' +
               '<div class="role__dates">' + esc(job.dates) + "</div>" +
               "<div>" +
                 '<h3 class="role__title">' + esc(job.role) + "</h3>" +
                 '<p class="role__company">' + company + "</p>" +
                 '<ul class="role__points">' + bullets + "</ul>" +
               "</div>" +
             "</article>";
    }).join("");
  }

  text("experienceHeading", SITE.experienceHeading);
  slot("experience").innerHTML = buildRoles(SITE.experience);

  text("earlierHeading", SITE.earlierHeading);
  slot("earlier").innerHTML = buildRoles(SITE.earlier);


  /* --- 7. Brands -------------------------------------------------------- */

  var brandsSection = slot("brands");

  if (SITE.brands && SITE.brands.show) {
    var chips = SITE.brands.list.map(function (b) {
      return "<li>" + esc(b) + "</li>";
    }).join("");

    brandsSection.innerHTML =
      '<div class="wrap">' +
        '<h2 class="section-title">' + esc(SITE.brands.heading) + "</h2>" +
        '<ul class="brands__list">' + chips + "</ul>" +
      "</div>";
  } else {
    brandsSection.remove();
  }


  /* --- 8. Education ----------------------------------------------------- */

  text("educationHeading", SITE.educationHeading);

  slot("education").innerHTML = SITE.education.map(function (e) {
    return '<div class="school">' +
             '<div class="school__dates">' + esc(e.dates) + "</div>" +
             "<div>" +
               '<p class="school__qual">' + esc(e.qualification) + "</p>" +
               '<p class="school__place">' + esc(e.institution) + "</p>" +
             "</div>" +
           "</div>";
  }).join("");


  /* --- 9. Contact ------------------------------------------------------- */

  text("contactHeading", SITE.contactHeading);
  text("contactBody", SITE.contactBody);

  var lines = ['<p><a href="mailto:' + esc(email) + '">' + esc(email) + "</a></p>"];

  if (SITE.showPhone && SITE.phone) {
    var dialable = SITE.phone.replace(/[^\d+]/g, "");
    lines.push('<p><a href="tel:' + esc(dialable) + '">' + esc(SITE.phone) + "</a></p>");
  }

  lines.push('<p><a href="' + esc(SITE.linkedin) + '" target="_blank" rel="noopener">' +
             esc(SITE.linkedin.replace(/^https?:\/\//, "")) + "</a></p>");
  lines.push("<p>" + esc(SITE.location) + "</p>");

  slot("contactLines").innerHTML = lines.join("");

  text("contactFine", "© " + new Date().getFullYear() + " " + SITE.name);


  /* --- 10. Menu button on small screens --------------------------------- */

  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Tapping a link closes the menu again.
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });


  /* --- 11. Highlight the section currently on screen -------------------- */

  var watched = Array.prototype.slice.call(
    document.querySelectorAll("#approach, #experience, #earlier, #contact")
  );

  var menuItems = Array.prototype.slice.call(navLinks.querySelectorAll("a"));

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        menuItems.forEach(function (a) {
          a.classList.toggle("is-current", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    watched.forEach(function (section) { observer.observe(section); });
  }

})();
