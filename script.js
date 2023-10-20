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

const button = document.querySelector("#button");

let promptValue = 16; // Default amount of squares is 16

button.addEventListener("click", () => {
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
})