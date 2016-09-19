(function() {

    /**
     * Check if the current page is a profile page or not
     * @returns {boolean}
     */
    function pageIsProfile()
    {
        return document.querySelector("body.page-profile") !== null;
    }

    /**
     * Get the bio element from the page
     * @returns {HTMLDivElement|null}
     */
    function getBioElement()
    {
        return document.querySelector(".user-profile-bio div");
    }

    /**
     * Let there be newlines!
     * @returns {void}
     */
    function letThereBeNewLines()
    {
        var bio = getBioElement();
        if (bio)
        {
            bio.innerHTML = bio.innerHTML.replace(/\n/g, "<br>");
        }
    }

    /**
     * Main entry point of the script
     * @returns {void}
     */
    function main()
    {
        if (pageIsProfile())
        {
            letThereBeNewLines();
        }
    }

    return main;
})()();
