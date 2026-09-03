/* =========================================
   DEREK EVERSON PERSONAL WEBSITE
   NAVIGATION JAVASCRIPT
   ========================================= */


/* =========================================
   WAIT FOR THE HTML PAGE TO LOAD
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       GET HTML ELEMENTS
       ========================================= */

    const navigation = document.getElementById("main-navigation");
    const menuButton = document.getElementById("menu-button");


    /* =========================================
       NAVIGATION ITEMS
       ========================================= */

    const navigationItems = [
        {
            name: "Personal",
            link: "#personal"
        },

        {
            name: "Professional",
            link: "#professional"
        },

        {
            name: "Projects",
            link: "#projects"
        }
    ];


    /* =========================================
       CREATE NAVIGATION LIST
       ========================================= */

    const navigationList = document.createElement("ul");


    /* =========================================
       CREATE EACH NAVIGATION LINK
       ========================================= */

    navigationItems.forEach(function (item) {

        // Create list item
        const listItem = document.createElement("li");

        // Create link
        const link = document.createElement("a");

        // Set link text
        link.textContent = item.name;

        // Set destination
        link.href = item.link;

        // Add link to list item
        listItem.appendChild(link);

        // Add list item to navigation list
        navigationList.appendChild(listItem);

    });


    /* =========================================
       ADD NAVIGATION TO THE PAGE
       ========================================= */

    navigation.appendChild(navigationList);


    /* =========================================
       SMOOTH SCROLLING
       ========================================= */

    const navigationLinks =
        document.querySelectorAll(".main-navigation a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            // Prevent the browser's default jump
            event.preventDefault();

            // Get the section ID
            const targetID = this.getAttribute("href");

            // Find the section
            const targetSection =
                document.querySelector(targetID);


            // Scroll to the section
            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }


            /* =========================================
               CLOSE MOBILE MENU AFTER CLICKING
               ========================================= */

            navigation.classList.remove("show");

        });

    });


    /* =========================================
       MOBILE MENU BUTTON
       ========================================= */

    menuButton.addEventListener("click", function () {

        // Show or hide the navigation
        navigation.classList.toggle("show");

    });


    /* =========================================
       HIGHLIGHT CURRENT SECTION
       ========================================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );


    const observerOptions = {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
    };


    const sectionObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    // Remove active class from every link
                    navigationLinks.forEach(function (link) {

                        link.classList.remove("active");

                    });


                    // Find the link for the current section
                    const activeLink =
                        document.querySelector(
                            '.main-navigation a[href="#' +
                            entry.target.id +
                            '"]'
                        );


                    // Highlight current section
                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        }, observerOptions);


    /* =========================================
       WATCH ALL SECTIONS
       ========================================= */

    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });


    /* =========================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
       ========================================= */

    document.addEventListener("click", function (event) {

        const clickedInsideNavigation =
            navigation.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);


        if (
            !clickedInsideNavigation &&
            !clickedMenuButton
        ) {

            navigation.classList.remove("show");

        }

    });


    /* =========================================
       KEYBOARD ACCESSIBILITY
       ========================================= */

    menuButton.addEventListener("keydown", function (event) {

        // Allow Enter and Space to open the menu
        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            navigation.classList.toggle("show");

        }

    });


    /* =========================================
       CONSOLE MESSAGE
       ========================================= */

    console.log(
        "Derek Everson's website navigation loaded successfully."
    );

});
