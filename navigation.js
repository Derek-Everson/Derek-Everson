/*
 * navigation.js
 * Shared navigation system for all pages of the website.
 *
 * Navigation sections:
 * - Primary navigation
 * - Secondary navigation
 * - Side navigation
 *
 * Add the following placeholders to your HTML:
 *
 * <div id="primary-navigation"></div>
 * <div id="secondary-navigation"></div>
 * <div id="side-navigation"></div>
 *
 * Then load this file before the closing </body> tag:
 *
 * <script src="navigation.js"></script>
 */

(function () {
    "use strict";

    // ============================================================
    // NAVIGATION LINKS
    // Edit these links here and they will update across all pages.
    // ============================================================

    const navigation = {

        // Main navigation across the top
        primary: [
            {
                label: "Personal",
                url: "personal.html"
            },
            {
                label: "Professional",
                url: "professional.html"
            },
            {
                label: "Projects",
                url: "projects.html"
            }
        ],

        // Secondary navigation
        secondary: [
            {
                label: "Home",
                url: "index.html"
            },
            {
                label: "About",
                url: "personal.html"
            },
            {
                label: "Contact",
                url: "contact.html"
            }
        ],

        // Navigation displayed in the left sidebar
        side: [
            {
                label: "Personal",
                url: "personal.html"
            },
            {
                label: "Professional",
                url: "professional.html"
            },
            {
                label: "Projects",
                url: "projects.html"
            }
        ]
    };


    // ============================================================
    // DETERMINE THE CURRENT PAGE
    // ============================================================

    function getCurrentPage() {

        let page = window.location.pathname.split("/").pop();

        // GitHub Pages may use the root URL for index.html
        if (page === "") {
            page = "index.html";
        }

        return page;
    }


    // ============================================================
    // CREATE A NAVIGATION LINK
    // ============================================================

    function createNavigationLink(item) {

        const link = document.createElement("a");

        link.href = item.url;
        link.textContent = item.label;

        // Highlight the current page
        if (getCurrentPage() === item.url) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );
        }

        return link;
    }


    // ============================================================
    // CREATE A NAVIGATION MENU
    // ============================================================

    function renderNavigation(
        containerId,
        items,
        navigationClass
    ) {

        const container =
            document.getElementById(containerId);

        // Stop if the HTML page doesn't contain
        // the requested navigation container.
        if (!container) {
            return;
        }

        // Create the <nav> element
        const nav = document.createElement("nav");

        nav.className = navigationClass;

        nav.setAttribute(
            "aria-label",
            navigationClass.replace("-", " ")
        );


        // Create the unordered list
        const list = document.createElement("ul");


        // Add every navigation item
        items.forEach(function (item) {

            const listItem =
                document.createElement("li");

            const link =
                createNavigationLink(item);

            listItem.appendChild(link);

            list.appendChild(listItem);
        });


        // Add list to navigation
        nav.appendChild(list);


        // Replace placeholder with navigation
        container.replaceWith(nav);
    }


    // ============================================================
    // START NAVIGATION SYSTEM
    // ============================================================

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            // Top primary navigation
            renderNavigation(
                "primary-navigation",
                navigation.primary,
                "primary-nav"
            );


            // Top secondary navigation
            renderNavigation(
                "secondary-navigation",
                navigation.secondary,
                "secondary-nav"
            );


            // Left sidebar navigation
            renderNavigation(
                "side-navigation",
                navigation.side,
                "side-nav"
            );

        }
    );

})();
