"use strict";
{
  const ans = [
    "それな！",
    "何を言ってるんだろう",
    "照れる",
    "まじで？！",
    "・・・・いいんじゃない？",
    "ワタシウサギ　ワカリマセン",
    "でしょうね〜",
    "察し・・・",
    "とりあえず、笑っとこ",
    "首もげるほどうなずいた",
    "流れが、、キテる！",
    "そうきたかぁ",
    "２億くれ、２億",
    "ただいまメンテナンス中です。",
    "幸せハイカロリー",
    "めんどくさいなぁ",
  ];
  const btn = document.getElementById("btn");
  const ul = document.getElementById("ul");
  const main = document.getElementById("main");

  // ----------ロードした1秒後にHelloと表示---------------
  addEventListener("load", () => {
    function answer() {
      const div = document.createElement("div");
      const li = document.createElement("li");
      div.textContent = "どしたん？";
      div.classList.add("AI");
      ul.appendChild(li);
      li.appendChild(div);
    }
    // 1秒
    setTimeout(answer, 2000);
  });
  // -----------------ボタンを押したら1秒後に返答する関数-----------------

  btn.addEventListener("click", () => {
    // 返答
    function answer() {
      const userText = document.getElementById("text").value;
      const div = document.createElement("div");
      const li = document.createElement("li");
      const random = Math.floor(Math.random() * ans.length);
      if (userText.length > 0) {
        div.textContent = ans[random];
        div.classList.add("AI");
        ul.appendChild(li);
        li.appendChild(div);
      }
      function scrollEnd() {
        main.scrollTop = main.scrollHeight;
      }
      scrollEnd();
    }

    // 1秒
    setTimeout(answer, 1000);
  });

  // -------------------ボタンを押したら入力テキストを表示--------------------------

  btn.addEventListener("click", () => {
    const userText = document.getElementById("text").value;
    const div = document.createElement("div");
    const li = document.createElement("li");
    if (userText.length > 0) {
      div.textContent = userText;
      div.classList.add("ME");
      div.id = "target";
      ul.appendChild(li);
      li.appendChild(div);
    }
    function scrollEnd() {
      main.scrollTop = main.scrollHeight;
      scrollEnd();
    }
    scrollEnd();
  });
}
