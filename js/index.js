const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

const child1 = document.createElement("a");
const child1Text = document.createTextNode("End");
child1.appendChild(child1Text);
document.querySelector("nav").appendChild(child1).style.color = "green";

const nav1 = document.querySelectorAll('a');
nav1[0].textContent = siteContent["nav"]["nav-item-1"];
nav1[1].textContent = siteContent["nav"]["nav-item-2"];
nav1[2].textContent = siteContent["nav"]["nav-item-3"];
nav1[3].textContent = siteContent["nav"]["nav-item-4"];
nav1[4].textContent = siteContent["nav"]["nav-item-5"];
nav1[5].textContent = siteContent["nav"]["nav-item-6"];
nav1[0].style.color = "green";
nav1[1].style.color = "green";
nav1[2].style.color = "green";
nav1[3].style.color = "green";
nav1[4].style.color = "green";
nav1[5].style.color = "green";

//h1
const headline = document.querySelector(".cta .cta-text h1");
headline.textContent = siteContent["cta"]["h1"];

//button
const button = document.querySelector(".cta .cta-text button");
button.textContent = siteContent["cta"]["button"];

//top pic
const topPic = document.getElementById("cta-img");
topPic.setAttribute('src', siteContent["cta"]["img-src"]);

//top content
const features = document.querySelectorAll(".top-content .text-content h4");
features[0].textContent = siteContent["main-content"]["features-h4"];
features[1].textContent = siteContent["main-content"]["about-h4"];

const featuresText = document.querySelectorAll(".top-content .text-content p");
featuresText[0].textContent = siteContent["main-content"]["features-content"];
featuresText[1].textContent = siteContent["main-content"]["about-content"];

const midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content
const bottom = document.querySelectorAll(".bottom-content .text-content h4");
bottom[0].textContent = siteContent["main-content"]["services-h4"];
bottom[1].textContent = siteContent["main-content"]["product-h4"];
bottom[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomText = document.querySelectorAll(".bottom-content .text-content p");
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];

//contact
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

const contact2 = document.querySelectorAll(".contact p");
contact2[0].textContent = siteContent["contact"]["address"];
contact2[1].textContent = siteContent["contact"]["phone"];
contact2[2].textContent = siteContent["contact"]["email"];

//footer
const foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];