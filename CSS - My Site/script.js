<<<<<<< HEAD
$("#website-projects-grid").addClass("fade");
$("#ws-hr").addClass("fade");
$("#website-projects-grid").css("display","none");

$("#video-games").click(function()
{
    showVideoGames();
    
})

$("#websites").click(function()
{
    showWebsite();

    
    
    
})


async function showVideoGames() {
    $("#video-games").addClass("selected-button");
    $("#websites").removeClass("selected-button");

    $("#website-projects-grid").addClass("fade");
    $("#ws-hr").addClass("fade");
    
    await delay(300);
    $("#website-projects-grid").css("display","none");
    $("#video-game-projects-grid").css("display", "block");

    await delay(300);  
    $("#video-game-projects-grid").removeClass("fade");
    $("#vg-hr").removeClass("fade");
    
}

async function showWebsite() {
    $("#video-games").removeClass("selected-button");
    $("#websites").addClass("selected-button");

    $("#video-game-projects-grid").addClass("fade");
    $("#vg-hr").addClass("fade");

    await delay(300);
    $("#video-game-projects-grid").css("display","none");
    $("#website-projects-grid").css("display","block");

    await delay(300);    
    $("#website-projects-grid").removeClass("fade");
    $("#ws-hr").removeClass("fade");
    
}



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
=======
$("#website-projects-grid").addClass("fade");
$("#ws-hr").addClass("fade");
$("#website-projects-grid").css("display","none");

$("#video-games").click(function()
{
    showVideoGames();
    
})

$("#websites").click(function()
{
    showWebsite();

    
    
    
})


async function showVideoGames() {
    $("#video-games").addClass("selected-button");
    $("#websites").removeClass("selected-button");

    $("#website-projects-grid").addClass("fade");
    $("#ws-hr").addClass("fade");
    
    await delay(300);
    $("#website-projects-grid").css("display","none");
    $("#video-game-projects-grid").css("display", "block");

    await delay(300);  
    $("#video-game-projects-grid").removeClass("fade");
    $("#vg-hr").removeClass("fade");
    
}

async function showWebsite() {
    $("#video-games").removeClass("selected-button");
    $("#websites").addClass("selected-button");

    $("#video-game-projects-grid").addClass("fade");
    $("#vg-hr").addClass("fade");

    await delay(300);
    $("#video-game-projects-grid").css("display","none");
    $("#website-projects-grid").css("display","block");

    await delay(300);    
    $("#website-projects-grid").removeClass("fade");
    $("#ws-hr").removeClass("fade");
    
}



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
>>>>>>> f357e251ce3bbb1c31289385af42fe6d992db45c
}