import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  twilight,
  nord,
  okaidia,
  dracula,
  tomorrow,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  IconCheck,
  IconCopy,
  IconChevronCompactDown,
} from "@tabler/icons-react";
import { useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState("oneDark");
  const [activeTab, setActiveTab] = useState("index.html");

  const languageMapping = {
    "index.html": "html",
    "style.css": "css",
  };

  const codeSnippets = {
    "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="empprofile.css">
    <link rel="stylesheet" href="../empdashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>EMPLOYEE PROFILE</title>
</head>
<body>
    <div class="navigation">
        <ul>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="business-outline"></ion-icon></span>
                    <span class="title">Employee DashBoard</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="clipboard-outline"></ion-icon></span>
                    <span class="title">Tasks</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="newspaper-outline"></ion-icon></span>
                    <span class="title">Accomplished Task</span>
                </a>
            </li>
            <li class="active">
                <a href="#">
                    <span class="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                    <span class="title">Profile</span>
                </a>
            </li>
            <!-- <li>
                <a href="#">
                    <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                    <span class="title">Settings</span>
                </a>
            </li> -->
            <li>
                <a href="#">
                    <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                    <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
        <!-- <div class="toggle"></div> -->
    </div>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <div class="card">
        <div class="user">
            <div class="imgBx">
                <img src="../EmpProfile/Images/male.jpg">
            </div>
            <div class="content">
                <h2>Employee <br><span>Associate Professor</span></h2>
            </div>
            <span class="toggle"></span>
        </div>
        <ul class="contact">
            <li style="--clr: #c71610; --i:0;"><a href="#"><div class="iconBx"><i class="fa-solid fa-envelope"></i></div><p>employee@gmail.com</p></a></li>
            <li style="--clr: #171515; --i:1;"><a href="#"><div class="iconBx"><i class="fa-brands fa-github"></i></div><p>employee@gmail.com</p></a></li>
            <li style="--clr: #0a66c2; --i:1;"><a href="#"><div class="iconBx"><i class="fa-brands fa-linkedin"></i></div><p>employee@gmail.com</p></a></li>
        </ul>
    </div>
    <script>
        let toggle = document.querySelector('.toggle');
        let card = document.querySelector('.card');
        toggle.onclick = function(){
            card.classList.toggle('active');
        }
    </script>
</body>
</html>`,
    "style.css": `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}

:root{
    /* --bg: #152533; */
    --bg: #333;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: var(--bg);
}

.card{
    position: relative;
    transition: 0.5s;
    width: 100px;
    /* background: #fff; */
    transition-delay: 0.5s;
}

.card.active{
    height: 450px;
    transition-delay: 0s;
}

.card .user{
    position: relative;
    width: 400px;
    min-height: 150px;
    background: #002c53;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 60px 40px 30px;
    border-radius: 10px;
}

.card .user .imgBx{
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 6px solid #fff;
    overflow: hidden;
    transition: 0.5s;
    z-index: 10;
}

.card .user .imgBx img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .user .content{
    position: relative;
    text-align: center;
}

.card .user .content h2{
    font-size: 1.2em;
    line-height: 1.05em;
    font-weight: 600;
    color: #fff;
}

.card .user .content h2 span{
    font-size: 0.75em;
    font-weight: 400;
}

.card .user .toggle{
    position: absolute;
    bottom: 0;
    width: 120px;
    padding: 5px 15px;
    background: #fff;
    border-radius: 30px;
    transform: translateY(50%);
    border: 6px solid var(--bg);
    text-align: center;
    cursor: pointer;
    font-weight: 500;
    transition: 0.5s;
}

.card.active .user .toggle{
    background: #ff4383;
    color: #fff;
}

.card .user .toggle::before{
    content: 'View';
}

.card.active .user .toggle::before{
    content: 'close';
}

.card .contact{
    position: relative;
    top: 30px;
    width: 100%;
    height: 0;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: 0.5s;
}

.card.active .contact{
    height: 325px;
    transition-delay: 0.5s;
}

.card .contact li{
    list-style: none;
    width: 400px;
    min-height: 100px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    transition: 0.5s;
    opacity: 0;
    transform: scale(0);
    padding: 10px 30px;
}

.card.active .contact li{
    opacity: 1;
    transform: scale(1);
    transition-delay: calc(0.25s * var(--i));
}

.card .contact li a{
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 10px;
}

.card .contact li a .iconBx{
    position: relative;
    width: 60px;
    height: 60px;
    background: var(--clr);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .contact li a .iconBx i{
    color: #fff;
    font-size: 1.5em;

}

.card .contact li a p{
    color: #666;
    font-size: 1.1em;
}

.card .contact li a:hover p{
    color: #111;
}`,
  };

  const themes = {
    oneDark: oneDark,
    twilight: twilight,
    nord: nord,
    okaidia: okaidia,
    dracula: dracula,
    tomorrow: tomorrow,
    atomDark: atomDark,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="grid place-items-center min-h-screen px-4">
        <h1 className="text-3xl font-extrabold font-sora text-white text-center">
          Code Block Component
        </h1>
        <div className="max-w-3xl w-full bg-[#2e3440] rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center px-4 py-3 text-white border-b border-gray-700">
            <div className="flex gap-4">
              {Object.keys(codeSnippets).map((tab) => (
                <button
                  key={tab}
                  className={`text-sm font-medium font-sora transition-colors ease-in-out duration-300 ${
                    activeTab === tab
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md pr-8 focus:outline-none appearance-none cursor-pointer"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  aria-label="Select code theme"
                >
                  {Object.keys(themes).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <IconChevronCompactDown size={16} className="text-gray-400" />
                </div>
              </div>

              <button
                className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  copied
                    ? "text-green-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={handleCopy}
                aria-label="Copy code"
              >
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <SyntaxHighlighter
            language={languageMapping[activeTab]}
            style={themes[theme]}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.875rem",
              maxHeight: "400px",
              maxWidth: "100%",
              overflowX: "auto",
              overflowY: "auto",
            }}
            wrapLines={true}
            wrapLongLines={true}
            showLineNumbers={true}
          >
            {codeSnippets[activeTab]}
          </SyntaxHighlighter>
        </div>
        <p className="text-xs font-sora text-white text-center select-none">
          Designed by Durgajayasai P
        </p>
      </div>
    </>
  );
}

export default App;
