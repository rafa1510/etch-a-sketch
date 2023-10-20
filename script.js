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