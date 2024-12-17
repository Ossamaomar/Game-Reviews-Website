export class Details {
    constructor(parameters) {
        
    }

    displayDetailsSection(detailsSection)
    {
        detailsSection.classList.remove("d-none");
    }

    hideDetailsSection(detailsSection)
    {
        detailsSection.classList.add("d-none");
    }
}