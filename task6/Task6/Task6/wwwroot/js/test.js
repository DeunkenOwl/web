var m = [
    {
        text: "Животные",
        childs: [
            {
                text: "Млекопитающие",
                childs: [
                    {
                        text: "Коровы",
                        childs: []
                    },
                    {
                        text: "Ослы",
                        childs: []
                    },
                    {
                        text: "Собаки",
                        childs: []
                    },
                    {
                        text: "Тигры",
                        childs: []
                    }
                ]
            },
            {
                text: "Другие",
                childs: [
                    {
                        text: "Змеи",
                        childs: []
                    },
                    {
                        text: "Птицы",
                        childs: []
                    },
                    {
                        text: "Ящирицы",
                        childs: []
                    }
                ]
            }
        ]
    },
    {
        text: "Рыбы",
        childs: [
            {
                text: "Аквариумные",
                childs: [
                    {
                        text: "Гуппи",
                        childs: []
                    },
                    {
                        text: "Скалярии",
                        childs: []
                    }
                ]
            },
            {
                text: "Морские",
                childs: [
                    {
                        text: "Морская форель",
                        childs: []
                    }
                ]
            }
        ]
    }
];

function addItem(item, par) {
    if (item.length > 0) {
        par.append("<ul></ul>");
        for (var i = 0; i < item.length; i++) {
            par.children("ul").append("<li><div>" + item[i].text + "</div></li>");
            addItem(item[i].childs, par.children("ul").children("li:last-child"))
        }
    }
}

addItem(m, $("div[class='container body-content']"));

$("li > div").on("click", function (event) {
    if ($(this).parent().children("ul").attr("style") == "display: none;") {
        $(this).parent().children("ul").show("slow", "swing");
    }
    else {
        $(this).parent().children("ul").hide("slow", "swing");
    }
});

$("li").each(function () {
    console.log($(this).find("div:first").text(), $(this).find("li").length);
});