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

function addItem(item, parent) {
 var ul = document.createElement("ul");
 for(var i = 0; i < item.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = item[i].text;
  if (item[i].childs.length > 0) {
    addItem(item[i].childs, li);
  }
  ul.append(li);
 }
 parent.append(ul);
}

addItem(m, document.body);
