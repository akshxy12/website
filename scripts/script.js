let serif_content = "\"Newsreader, Noto Serif SC, Times New Roman\", serif",
    sans_serif_heading = "\"Lato\", sans-serif",
    sans_serif_content = "\"KoHo\", sans-serif",
    dark_900 = "rgb(0, 0, 0)",
    dark_800 = "rgb(30, 30, 30)",
    dark_700 = "rgb(60, 60, 60)",
    dark_600 = "rgb(90, 90, 90)",
    light_500 = "rgb(120, 120, 120)",
    light_400 = "rgb(150, 150, 150)",
    light_300 = "rgb(180, 180, 180)",
    light_200 = "rgb(210, 210, 210)",
    light_100 = "rgb(255, 255, 255)",
    red_800 = "rgb(116, 0, 0)",
    red_600 = "rgb(207, 0, 0)",
    red_400 = "rgb(255, 0, 0)",
    red_200 = "rgb(255, 62, 62)",
    red_100 = "rgb(255, 142, 142)",
    orange_600 = "rgb(199, 63, 0)",
    orange_400 = "rgb(248, 79, 0)",
    orange_200 = "rgb(255, 135, 79)",
    blue_600 = "rgb(0, 3, 192)",
    blue_400 = "rgb(0, 4, 255)",
    blue_200 = "rgb(93, 96, 255)",
    transition_time = "300ms";

document.querySelector("#theme_button").innerHTML = "Dark";
document.querySelector("#theme_button").style.color = dark_900;
document.querySelector("#theme_button").style.backgroundColor = light_100;
document.querySelector("#slider").style.backgroundColor = dark_700;
document.querySelector("#theme_button").style.transform = "translateX(80%)";

document.querySelector("header").style.backgroundColor = dark_900;
document.querySelector("header").style.color = light_100;

document.querySelector("body").style.color = light_100;
document.querySelector("body").style.backgroundColor = dark_800;

document.querySelector("#theme_button").style.transitionProperty = "background-color transform";
document.querySelector("#theme_button").style.transitionDuration = transition_time;
document.querySelector("#theme_button").style.transitionTimingFunction = "ease-in-out";

document.querySelector("#slider").addEventListener("click", function () {
    if (document.querySelector("#theme_button").innerHTML == "Light")     // Dark theme
    {
        document.querySelector("#theme_button").innerHTML = "Dark";
        document.querySelector("#theme_button").style.color = dark_900;
        document.querySelector("#theme_button").style.backgroundColor = light_100;
        document.querySelector("#slider").style.backgroundColor = dark_700;
        document.querySelector("#theme_button").style.transform = "translateX(80%)";

        document.querySelector("header").style.backgroundColor = dark_900;
        document.querySelector("header").style.color = light_100;

        document.querySelector("body").style.color = light_100;
        document.querySelector("body").style.backgroundColor = dark_800;
    }
    else if (theme_button.innerHTML == "Dark")                           // Light theme
    {
        document.querySelector("#theme_button").innerHTML = "Light";
        document.querySelector("#theme_button").style.color = light_100;
        document.querySelector("#theme_button").style.backgroundColor = dark_900;
        document.querySelector("#slider").style.backgroundColor = light_300;
        document.querySelector("#theme_button").style.transform = "translateX(0)";

        document.querySelector("header").style.backgroundColor = light_200;
        document.querySelector("header").style.color = dark_900;

        document.querySelector("body").style.color = dark_900;
        document.querySelector("body").style.backgroundColor = light_100;

        document.querySelector("body, #theme_button, header").style.transitionProperty = "background-color color";
        document.querySelector("body, #theme_button, header").style.transitionDuration = transition_time;
        document.querySelector("body, #theme_button, header").style.transitionTimingFunction = "ease-in-out";
    }
})
