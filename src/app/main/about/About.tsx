import React from 'react';
import './About.css';

function About() {

    return (
        <main className="about">
            <div>
                <img alt="Vitor Jordão no Clojure South 2019" className="image image-1" src="/images/eu-clojure-south.jpg" />
                <p>Hey! Como vai?</p>
                <p>Meu nome é Vitor Jordão <span className="emoji" role="img" aria-label="Emoji de joinha">👍</span></p>
            </div>
            <div>
                <p>Comecei a programar em 2016 em uma <a target="_blank" rel="noopener noreferrer" href="https://github.com/vitorjordao/Macros-de-minecraft">linguagem de programação feita para automatizar rotinas no minecraft</a> e desde lá nunca mais parei de estudar e aprender!</p>
                <img alt="Vitor Jordão no Clojure South 2019" className="image image-2" src="/images/minecraft-code.png" />
            </div>
            <div>
                <p>Tenho formação em técnico de informática na ETEC (2017 até 2018) e estou para me formar em Análise e Desenvolvimento de Sistemas na FATEC (2018 até 2020).</p>
            </div>
            <div>
                <p>Tenho trabalhado com front-end desde 2019 passando por algumas tecnologias e linguagens, como JavaScript, ClojureScript, React, Re-Frame, AngulasJS, Svelte, etc.</p>
            </div>
            <div>
                <p>Amo aprender novas linguagens e tecnologias, acumulando algumas com um nível de conhecimento suficiente para trabalhar, como Java, JavaScript, Clojure, ClojureScript, C#, entre outras...</p>
            </div>
            <div>
                <p>Prezo muito pelo crescimento de novas comunidades da área, e estou sempre disposto a participar de eventos relacionados!</p>
                <img alt="Vitor Jordão no evento IA Rio Preto" className="image image-1" src="/images/eu-e-comunidade.jpg" />
            </div>
        </main>
    );
}

export default About;