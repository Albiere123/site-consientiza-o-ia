const body = document.querySelector("body")






class CustomDB {
  constructor(name) {
    this.prefix = `${name}_`;
  }

  async set(key, value) {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  }

  get(key) {
    const val = localStorage.getItem(this.prefix + key);
    return val ? JSON.parse(val) : null;
  }

  async delete(key) {
    localStorage.removeItem(this.prefix + key);
  }

  allKeys() {
    return Object.keys(localStorage).filter(k => k.startsWith(this.prefix));
  }
}


const db = new CustomDB("cor")










function toggleMenu() {
    const menu = document.getElementById('colorMenu');
    const btn = document.getElementById('colorBtn1');

    if (menu.classList.contains('expandir')) {
        menu.classList.remove('expandir');
        btn.classList.remove("active");
        menu.classList.add('fechar')
    } else {
        menu.classList.add('expandir');
        btn.classList.add("active");
        menu.classList.remove('fechar')
    }
}

/**
 * 
 * @param {str} color 
 * @param {str} t
 * @returns {void}
 */
function changeColor(color, t) {
    document.body.style.backgroundColor = color;
    if (color == "black") {
      document.documentElement.style.setProperty('--t', t);
        document.documentElement.style.setProperty('--cor-bg', 'black');
        document.documentElement.style.setProperty('--cor-h', 'white');
        db.set("cor", color)
    }
    if (color == "white") {
      body.style.transition=t
      document.documentElement.style.setProperty('--cor-bg', 'white');
      document.documentElement.style.setProperty('--cor-h', 'black');
      db.set("cor", color)
  }
  if (color == "rgb(252, 252, 120)") {
    body.style.transition=t
    document.documentElement.style.setProperty('--cor-bg', 'rgb(252, 252, 120)');
    document.documentElement.style.setProperty('--cor-h', 'black');
    db.set("cor", color)
}
  if (t!=0) {
    toggleMenu()
  }
  }
/*
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Albiere123/site-consientiza-o-ia.git
git push -u origin main
*/

window.addEventListener("DOMContentLoaded", () => {
    const saved = new CustomDB( "cor").get("cor");
    if (saved) changeColor(saved, 0);

    const menu = document.getElementById("colorMenu");
    menu.classList.remove("inicial");

  });
  
  function toggleMenu2() {
    const menu = document.getElementById('imgMenu');
    const element = document.getElementById('paraE')
    if (!menu.classList.contains('expandir1')) {
        menu.classList.add('expandir1');
        element.classList.remove("p3")
        element.classList.add("p4")
    } else {
        menu.classList.remove('expandir1');
        element.classList.add("p3")
        element.classList.remove("p4")
    }
}