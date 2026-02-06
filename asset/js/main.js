let sidebar = false;

function toggleSidebar() {
  sidebar = !sidebar;
  if (sidebar){
    document.getElementById("sidebar").style.transform = "translateX(0)";
  } else {
    document.getElementById("sidebar").style.transform = "translateX(-100%)";
  }
}

// This seems like a terrible way to do this, but
// it'll support both server and local so whatever
function getFromRoot() {
  let dir = window.location.href; // Get current URL
  let dir_array = dir.split("/").reverse(); // Split by directory (/)
  let directory_escapes = ""; // Declare variable to hold escape
  // Count url parts till main directory
  for (let i = 0; i < dir_array.length; i++) {
    if (dir_array[i].includes("the-library")) {
      break;
    }
    directory_escapes += ".";
  }
  console.log(directory_escapes)
  return directory_escapes; // Return amount of escape from root
}

function loadUI(){
  root = getFromRoot();
  document.getElementById("header").innerHTML = `
  <div class="header-button" onclick="toggleSidebar()">
    <img src="`+root+`/asset/img/librarian.png">
  </div>
  <a href="`+root+`/settings.html"class="header-button" style="margin-right: 10px; float: right;">
    <img src="`+root+`/asset/img/librarian.png">
  </a>
  <a id="github-logo" href="https://github.com/the-library-team" style="margin-right: 10px; float: right;">
    <img src="`+root+`/asset/img/github_black.svg">
  </a>
  `
  document.getElementById("sidebar").innerHTML = `
  <a href="`+root+`/" class="sidebar-link" style="height:75px; text-align: center;">
    <p><b>Home</b></p>
  </a>
  <a href="`+root+`/guide.html" class="sidebar-link" style="height:75px; text-align: center;">
    <p><b>Guide</b></p>
  </a>
  <a href="`+root+`/dod1/" id="dod-sidebar" class="sidebar-link">
    <img src="`+root+`/asset/img/logo/dod1_en.svg" alt="Drakengard Logo">
  </a>
  <a href="`+root+`/dod2/" id="dod2-sidebar" class="sidebar-link">
    <img src="`+root+`/asset/img/logo/dod2_en.svg" alt="Drakengard 2 Logo">
  </a>
  <a href="`+root+`/nier/" id="nier-sidebar" class="sidebar-link">
    <img src="`+root+`/asset/img/logo/nier_122.png" alt="NieR Replicant ver.1.22474487139 Logo">
  </a>
  <a href="`+root+`/dod3/" id="dod3-sidebar" class="sidebar-link">
    <img src="`+root+`/asset/img/logo/dod3_en.png" alt="Drakengard 3 Logo">
  </a>
  <a href="`+root+`/auto/" class="sidebar-link">
    <img src="`+root+`/asset/img/logo/nier_auto.png" alt="NieR:Automata Logo">
  </a>
  <a href="`+root+`/rein/" class="sidebar-link">
    <img src="`+root+`/asset/img/logo/nier_rein.png" alt="NieR Reincarnation Logo">
  </a>
  <div class="sidebar-link" style="background-color:var(--main-ui)"></div>`
}

function setColor(color) {
  root = getFromRoot();
  if (color == "towr") {
    document.documentElement.style.setProperty('--main-ui', '#d4d4d4ff');
    document.documentElement.style.setProperty('--secondary-ui', '#aeadadff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#818181ff');
    document.documentElement.style.setProperty('--ui-text', '#424242ff');
    document.documentElement.style.setProperty('--background', '#ffffffff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_black.svg'>";
  } else if (color == "yorh") {
    document.documentElement.style.setProperty('--main-ui', '#121212ff');
    document.documentElement.style.setProperty('--secondary-ui', '#353535ff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#282828ff');
    document.documentElement.style.setProperty('--ui-text', '#ffffffff');
    document.documentElement.style.setProperty('--background', '#1d1d1dff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_white.svg'>";
  } else if (color == "repl") {
    document.documentElement.style.setProperty('--main-ui', '#3f220cff');
    document.documentElement.style.setProperty('--secondary-ui', '#975e2bff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#5a3311ff');
    document.documentElement.style.setProperty('--ui-text', '#000000ff');
    document.documentElement.style.setProperty('--background', '#c7c7c7ff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_black.svg'>";
  } else if (color == "shde") {
    document.documentElement.style.setProperty('--main-ui', '#232323ff');
    document.documentElement.style.setProperty('--secondary-ui', '#bb9611ff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#946a00ff');
    document.documentElement.style.setProperty('--ui-text', '#ffffffff');
    document.documentElement.style.setProperty('--background', '#131313ff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_white.svg'>";
  } else if (color == "dod1") {
    document.documentElement.style.setProperty('--main-ui', '#751d02ff');
    document.documentElement.style.setProperty('--secondary-ui', '#ba2b29ff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#942517ff');
    document.documentElement.style.setProperty('--ui-text', '#ffffffff');
    document.documentElement.style.setProperty('--background', '#32180dff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_white.svg'>";
  } else if (color == "dod2") {
    document.documentElement.style.setProperty('--main-ui', '#363473ff');
    document.documentElement.style.setProperty('--secondary-ui', '#e74c29ff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#a82409ff');
    document.documentElement.style.setProperty('--ui-text', '#ffffffff');
    document.documentElement.style.setProperty('--background', '#030032ff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_white.svg'>";
  } else if (color == "dod3") {
    document.documentElement.style.setProperty('--main-ui', '#7b3133ff');
    document.documentElement.style.setProperty('--secondary-ui', '#b52c33ff');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#8c2025ff');
    document.documentElement.style.setProperty('--ui-text', '#000000ff');
    document.documentElement.style.setProperty('--background', '#d0cfcfff');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_black.svg'>";
  } else if (color == "acrd") {
    document.documentElement.style.setProperty('--main-ui', '#2C2825');
    document.documentElement.style.setProperty('--secondary-ui', '#AF7956');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#2C2825');
    document.documentElement.style.setProperty('--ui-text', '#EBEAE7');
    document.documentElement.style.setProperty('--background', '#25211E');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_white.svg'>";
  } else if (color == "rein") {
    document.documentElement.style.setProperty('--main-ui', '#635D5A');
    document.documentElement.style.setProperty('--secondary-ui', '#908881');
    document.documentElement.style.setProperty('--secondary-ui-hover', '#79716bff');
    document.documentElement.style.setProperty('--ui-text', '#000000ff');
    document.documentElement.style.setProperty('--background', '#CAC1B6');
    document.getElementById("github-logo").innerHTML = "<img id='github-logo' src='"+root+"/asset/img/github_black.svg'>";
  }
}

function setSetting(setting, value) {
  if (setting == 'color') {
    localStorage.setItem(setting, value);
    setColor(value);
  } else if (setting == "dodver") {
    localStorage.setItem(setting, value);
    setVersion(value);
  } else if (setting == "nierver") {
    localStorage.setItem(setting, value);
    setVersion(value);
  }
}

function setVersion(ver) {
  root = getFromRoot();
  if (ver == "drak") {
    document.getElementById("dod-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/dod1_en.svg' alt='Drakengard Logo'>";
    if (document.getElementById("dod1-hero") != null) {
      document.getElementById("dod1-hero").innerHTML = "<img src='"+root+"/asset/img/logo/dod1_en.svg' alt='Drakengard Logo'>";
    }
    document.getElementById("dod2-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/dod2_en.svg' alt='Drakengard 2 Logo'>";
    document.getElementById("dod3-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/dod3_en.png' alt='Drakengard 3 Logo'>";
  } else if (ver == "dod") {
    document.getElementById("dod-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/dod1_jp.svg' alt='Drag-On Dragoon Logo'>";
    if (document.getElementById("dod1-hero") != null) {
      document.getElementById("dod1-hero").innerHTML = "<img src='"+root+"/asset/img/logo/dod1_jp.svg' alt='Drag-On Dragoon Logo'>";
    }
    document.getElementById("dod2-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/dod2_jp.svg' alt='Drag-On Dragoon 2 Logo'>";
    document.getElementById("dod3-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/dod3_jp.png' alt='Drag-On Dragoon 3 Logo'>";
  }
  if (ver == "repl") {
    document.getElementById("nier-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/nier_replicant.png' alt='NieR Replicant Logo'>";
  } else if (ver == "gest") {
    document.getElementById("nier-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/nier_gestalt.png' alt='NieR Gestalt Logo'>";
  } else if (ver == "west") {
    document.getElementById("nier-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/nier_us.png' alt='NieR Western Logo'>";
  } else if (ver == "122") {
    document.getElementById("nier-sidebar").innerHTML = "<img src='"+root+"/asset/img/logo/nier_122.png' alt='NieR Replicant 1.22 Logo'>";
  }
}

function OnLoad() {
  loadUI();
  if (localStorage.getItem('color')) {
    setColor(localStorage.getItem('color'));
  } else {
    setSetting('color', 'towr');
  }

  if (localStorage.getItem('dodver')) {
    setVersion(localStorage.getItem('dodver'));
  } else {
    setSetting('dodver', 'drak');
  }

  if (localStorage.getItem('nierver')) {
    setVersion(localStorage.getItem('nierver'));
  } else {
    setSetting('nierver', '122');
  }
}

window.onload = OnLoad();