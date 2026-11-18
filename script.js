const loginButton=document.getElementById("loginButton");
const logoutButton=document.getElementById("logoutButton");
const accountStatus=document.getElementById("accountStatus");
async function refreshAccount(){try{const r=await fetch("/.netlify/functions/auth?action=me",{credentials:"same-origin"});const d=await r.json();if(d.authenticated){accountStatus.textContent="Conectado como "+(d.user.global_name||d.user.username);loginButton.classList.add("hidden");logoutButton.classList.remove("hidden")}else{accountStatus.textContent="No has iniciado sesión";loginButton.classList.remove("hidden");logoutButton.classList.add("hidden")}}catch{accountStatus.textContent="No se pudo comprobar la sesión"}}
loginButton.addEventListener("click",()=>location.href="/.netlify/functions/auth?action=login");
logoutButton.addEventListener("click",async()=>{await fetch("/.netlify/functions/auth?action=logout",{method:"POST",credentials:"same-origin"});await refreshAccount()});
refreshAccount();