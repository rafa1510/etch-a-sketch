/*
    query selector for container

    query selector for prompt
    promptValue

    totalDivs = promptValue * promptValue
    dynamicPx = 1000 / promptValue

    main for loop to create dynamicDivs
    for i = 0, i < (totalDivs), i++
        create dynamicDiv
        set height and width to dynamicPx
        append dynamicDiv to container

    hover effect
    add event listeners to dynamicDivs
        if mouse passes through dynamicDiv, add hovered class

*/

const container = document.querySelector("#container");
const button = document.querySelector("#button");

let promptValue = 16; // Default amount of squares is 16

let hovering = false;

// Initial 16x16 grid creation
createDivs(promptValue)

button.addEventListener("click", () => {
    // Loop deleting the current squares in the container
    for (let i = 0; i < promptValue; i++)
    {
        let currentDivs = document.querySelectorAll(".dynamicDiv");
        currentDivs.forEach((dynamicDiv) => container.removeChild(dynamicDiv));
    }

    // Prompts the user for a number and turns it into an integer
    promptValue = parseInt(prompt("How many squares per row and column would you like?"));

    while (promptValue > 100 || promptValue < 0 || isNaN(promptValue))
    {
        if (promptValue > 100)
        {
            promptValue = parseInt(prompt("Please enter a number less than 100"));
        }
        if (promptValue < 0)
        {
            promptValue = parseInt(prompt("Please enter a positive number"));
        }
        // Checks if promptValue is NaN, as parseInt() will return NaN if the user doesn't input a number
        if (isNaN(promptValue))
        {
            promptValue = parseInt(prompt("Please enter a number"));
        }
    }
    createDivs(promptValue);
})

// Main function taking in the user's desired grid number per row and column
function createDivs(currentPromptValue) {
    let totalDivs = currentPromptValue * currentPromptValue;
    let dynamicPx = 800 / currentPromptValue;
    
    for (let i = 0; i < totalDivs; i++)
    {
        let dynamicDiv = document.createElement("div");
        dynamicDiv.setAttribute("class", "dynamicDiv");
        dynamicDiv.setAttribute("style", `height: ${dynamicPx}px; width: ${dynamicPx}px;`);

        // Adds hover effect on mouse movement over div

        dynamicDiv.addEventListener("mouseup", () => {
            hovering = false;
        }
        )

        dynamicDiv.addEventListener("mousedown", () => {
            hovering = true
            if (hovering)
            {
                dynamicDiv.setAttribute("class", "dynamicDiv hover")
            }
        }
        )

        dynamicDiv.addEventListener("mouseover", () => {
            if (hovering)
            {
                dynamicDiv.setAttribute("class", "dynamicDiv hover")
            }
        }
        )

        container.appendChild(dynamicDiv);
    }
}