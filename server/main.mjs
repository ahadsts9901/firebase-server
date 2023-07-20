import express from 'express';
const router = express.Router()

router.get('/home', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
        * {
        font-family: "Space Mono", monospace;
        /* font-weight: normal; */
        font-weight: bold;
    }

    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }

    body {
        background-color: #212121;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 1px solid #fff;
        height: 500px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0em;
    }

    .center {
        width: 100%;
        text-align: center;
    }

    .icon {
        font-size: 400%;
    }

    a {
        color: #fff;
        text-decoration: none !important;
    }

    row {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }

    @media only screen and (max-width: 350px){
        body{
            height: 600px;
        }
    }
        </style>
    </head>
    
    <body>
        <h1 class="center bi bi-house-fill icon"></h1>
        <h1 class="center">Hello World...</h1>
        <h3 class="center">This Is Home Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Ahad&copy;</p>
        <row>
            <a target="_blank" href="https://ahadsts9901.github.io/first-server/">Main Page | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/">Homepage | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/profile">Profile | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/about">About | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/contact">Contact | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/gallery">Gallery</a>
        </row>
        <script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    
    </html>`)
})

router.get('/profile', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
        * {
        font-family: "Space Mono", monospace;
        /* font-weight: normal; */
        font-weight: bold;
    }

    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }

    body {
        background-color: #212121;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 1px solid #fff;
        height: 500px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0em;
    }

    .center {
        width: 100%;
        text-align: center;
    }

    .icon {
        font-size: 400%;
    }

    a {
        color: #fff;
        text-decoration: none !important;
    }

    row {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }

    @media only screen and (max-width: 350px){
        body{
            height: 600px;
        }
    }
        </style>
    </head>
    
    <body>
        <h1 class="center bi bi-person-fill icon"></h1>
        <h1 class="center">Hello World...</h1>
        <h3 class="center">This Is Profile Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Ahad&copy;</p>
        <row>
            <a target="_blank" href="https://ahadsts9901.github.io/first-server/">Main Page | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/">Homepage | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/profile">Profile | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/about">About | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/contact">Contact | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/gallery">Gallery</a>
        </row>
        <script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    
    </html>`)
})

router.get('/about', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
        * {
        font-family: "Space Mono", monospace;
        /* font-weight: normal; */
        font-weight: bold;
    }

    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }

    body {
        background-color: #212121;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 1px solid #fff;
        height: 500px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0em;
    }

    .center {
        width: 100%;
        text-align: center;
    }

    .icon {
        font-size: 400%;
    }

    a {
        color: #fff;
        text-decoration: none !important;
    }

    row {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }

    @media only screen and (max-width: 350px){
        body{
            height: 600px;
        }
    }
        </style>
    </head>
    
    <body>
        <h1 class="center bi bi-file-earmark-person-fill icon"></h1>
        <h1 class="center">Hello World...</h1>
        <h3 class="center">This Is About Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Ahad&copy;</p>
        <row>
            <a target="_blank" href="https://ahadsts9901.github.io/first-server/">Main Page | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/">Homepage | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/profile">Profile | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/about">About | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/contact">Contact | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/gallery">Gallery</a>
        </row>
        <script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    
    </html>`)
})

router.get('/contact', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
        * {
        font-family: "Space Mono", monospace;
        /* font-weight: normal; */
        font-weight: bold;
    }

    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }

    body {
        background-color: #212121;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 1px solid #fff;
        height: 500px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0em;
    }

    .center {
        width: 100%;
        text-align: center;
    }

    .icon {
        font-size: 400%;
    }

    a {
        color: #fff;
        text-decoration: none !important;
    }

    row {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }

    @media only screen and (max-width: 350px){
        body{
            height: 600px;
        }
    }
        </style>
    </head>
    
    <body>
        <h1 class="center bi bi-telephone-fill icon"></h1>
        <h1 class="center">Hello World...</h1>
        <h3 class="center">This Is Contact Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Ahad&copy;</p>
        <row>
            <a target="_blank" href="https://ahadsts9901.github.io/first-server/">Main Page | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/">Homepage | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/profile">Profile | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/about">About | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/contact">Contact | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/gallery">Gallery</a>
        </row>
        <script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    
    </html>`)
})

router.get('/gallery', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
        * {
        font-family: "Space Mono", monospace;
        /* font-weight: normal; */
        font-weight: bold;
    }

    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }

    body {
        background-color: #212121;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 1px solid #fff;
        height: 500px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0em;
    }

    .center {
        width: 100%;
        text-align: center;
    }

    .icon {
        font-size: 400%;
    }

    a {
        color: #fff;
        text-decoration: none !important;
    }

    row {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }

    @media only screen and (max-width: 350px){
        body{
            height: 600px;
        }
    }
        </style>
    </head>
    
    <body>
        <h1 class="center bi bi-image-fill icon"></h1>
        <h1 class="center">Hello World...</h1>
        <h3 class="center">This Is Gallery Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Ahad&copy;</p>
        <row>
            <a target="_blank" href="https://ahadsts9901.github.io/first-server/">Main Page | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/">Homepage | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/profile">Profile | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/about">About | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/contact">Contact | </a>
            <a target="_blank" href="https://calm-puce-cheetah-fez.cyclic.app/gallery">Gallery</a>
        </row>
        <script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    
    </html>`)
})


export default router