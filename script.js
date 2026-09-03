document.addEventListener("DOMContentLoaded", function () {

    // Create the navigation menu
    const nav = document.createElement("nav");
    nav.className = "main-navigation";

    // Navigation items
    const navigationItems = [
        { name: "Personal", link: "#personal" },
        { name: "Professional", link: "#professional" },
        { name: "Projects", link: "#projects" }
    ];

    // Create the navigation list
    const navList = document.createElement("ul");

    navigationItems.forEach(function (item) {
        const listItem = document.createElement("li");

        const link = document.createElement("a");
        link.textContent = item.name;
        link.href = item.link;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    nav.appendChild(navList);

    // Add navigation to the page
    document.body.prepend(nav);

    // Smooth scrolling
    document.querySelectorAll(".main-navigation a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const section = document.querySelector(this.getAttribute("href"));

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
