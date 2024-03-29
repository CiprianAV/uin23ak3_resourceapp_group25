document.addEventListener('DOMContentLoaded', function () {
    var tabsContainer = document.getElementById('tabsContainer');
    var contentContainer = document.getElementById('contentContainer');

    var resources = [
        {
            category: "HTML",
            text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
            sources: [
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/html/"
                },
                {
                    title: "HTML Living standard",
                    url: "https://html.spec.whatwg.org/multipage/"
                },
                {
                    title: "HTML.com Tutorials",
                    url: "https://html.com/"
                },
            ]
        },
        {
            category: "CSS",
            text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
            sources: [
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/css/"
                },
                {
                    title: "W3C HTML & CSS Standards",
                    url: "https://www.w3.org/standards/webdesign/htmlcss.html"
                },
                {
                    title: "W3C CSS Validator",
                    url: "https://jigsaw.w3.org/css-validator/"
                },
                {
                    title: "CSS Tricks",
                    url: "https://css-tricks.com/"
                },
            ]
        },
        {
            category: "JavaScript",
            text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
            sources: [
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/js/"
                },
                {
                    title: "MDN Web Docs",
                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                },
                {
                    title: "How to read JavaScript Documentation",
                    url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
                },
            ]
        },
        {
            category: "React",
            text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
            sources: [
                {
                    title: "React documentation",
                    url: "https://reactjs.org/docs/getting-started.html"
                },
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
                },
                {
                    title: "How to read JavaScript Documentation",
                    url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
                },
            ]
        },
        {
            category: "Sanity and headless CMS",
            text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
            sources: [
                {
                    title: "Sanity documentation",
                    url: "https://www.sanity.io/docs"
                },
                {
                    title: "OnCrawl: a beginners guide to headless CMS",
                    url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
                },
                {
                    title: "Section.io: Getting started with Sanity CMS",
                    url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
                },
            ]
        },
    ];

    resources.forEach(function (resource, index) {
        var tab = document.createElement('div');
        tab.className = 'tab';
        tab.innerText = resource.category;

        var content = document.createElement('div');
        content.className = 'tab-content';
        content.innerHTML = `<h2 style="color: #2A324B;">${resource.category}</h2><p class="tab-text">${resource.text}</p><ul>${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}</ul>`;

        tabsContainer.appendChild(tab);
        contentContainer.appendChild(content);

        tab.addEventListener('click', function () {
            document.querySelectorAll('.tab').forEach(function (tab) {
                tab.classList.remove('active');
            });

            this.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(function (content) {
                content.classList.remove('show');
            });

            contentContainer.children[index].classList.add('show');
        });
    });

    tabsContainer.children[0].classList.add('active');
    contentContainer.children[0].classList.add('show');
});

import React from 'react';
import resourcesData from './Resources';
import App from './React-app';

ReactDOM.render(<App />, document.getElementById('root'));

function Resources({ category }) {
  const filteredResources = resourcesData.filter(resource => resource.category === category);

  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
