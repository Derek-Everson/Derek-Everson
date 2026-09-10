/* ============================================================
   DEREK EVERSON WEBSITE
   NAVIGATION SYSTEM
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * ========================================================
     * NAVIGATION LINKS
     *
     * IMPORTANT:
     * These filenames must match the actual HTML files
     * in your GitHub repository.
     * ========================================================
     */

    const primaryNavigation = [
        {
            name: "Personal",
            link: "personal.html"
        },
        {
            name: "Professional",
            link: "professional.html"
        },
        {
            name: "Projects",
            link: "projects.html"
        }
    ];


    const secondaryNavigation = [
        {
            name: "Home",
            link: "index.html"
        },
        {
            name: "About",
            link: "personal.html"
        },
        {
            name: "Contact",
            link: "contact.html"
        }
    ];


    const sideNavigation = [
        {
            name: "Home",
            link: "index.html"
        },
        {
            name: "Personal",
            link: "personal.html"
        },
        {
            name: "Professional",
            link: "professional.html"
        },
        {
            name: "Projects",
            link: "projects.html"
        },
        {
            name: "Contact",
            link: "contact.html"
        }
    ];


    /*
     * ========================================================
     * FIND CURRENT PAGE
     * ========================================================
     */

    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    /*
     * If GitHub Pages is displaying the homepage,
     * the pathname can sometimes be empty.
     */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {
        currentPage = "index.html";
    }


    /*
     * ========================================================
     * CREATE NAVIGATION
     * ========================================================
     */

    function createNavigation(
        containerID,
        navigationItems,
        cssClass
    ) {

        const container =
            document.getElementById(containerID);


        /*
         * If the navigation container doesn't exist,
         * stop here.
         */

        if (!container) {
            return;
        }


        /*
         * Create <nav>
         */

        const nav =
            document.createElement("nav");

        nav.className = cssClass;


        /*
         * Create <ul>
         */

        const list =
            document.createElement("ul");


        /*
         * Create each navigation item
         */

        navigationItems.forEach(function (item) {

            const listItem =
                document.createElement("li");


            const link =
                document.createElement("a");


            /*
             * Set the link
             */

            link.href = item.link;

            link.textContent = item.name;


            /*
             * Check whether this is the
             * page the visitor is currently on.
             */

            if (
                currentPage ===
                item.link.toLowerCase()
            ) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }


            /*
             * Add link to list item
             */

            listItem.appendChild(link);


            /*
             * Add list item to list
             */

            list.appendChild(listItem);

        });


        /*
         * Add list to nav
         */

        nav.appendChild(list);


        /*
         * Remove the placeholder div
         * and replace it with the navigation.
         */

        container.innerHTML = "";

        container.appendChild(nav);

    }


    /*
     * ========================================================
     * CREATE ALL THREE NAVIGATION MENUS
     * ========================================================
     */


    createNavigation(
        "primary-navigation",
        primaryNavigation,
        "primary-nav"
    );


    createNavigation(
        "secondary-navigation",
        secondaryNavigation,
        "secondary-nav"
    );


    createNavigation(
        "side-navigation",
        sideNavigation,
        "side-nav"
    );

});
