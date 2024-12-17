export class Home {
    constructor(parameters) {
        
    }

    displayHomeSection(homeSection)
    {
        homeSection.classList.remove("d-none");
    }

    hideHomeSection(homeSection)
    {
        homeSection.classList.add("d-none");
    }
}