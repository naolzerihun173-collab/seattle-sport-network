
/* ================================================
   CHAMPIONS LEAGUE — GREATEST CLUBS
   Club history and Explore Club History feature
================================================ */

/* ---------- CLUB DATA ---------- */

const clubs = [
    {
        name: "Real Madrid",
        country: "Spain",
        nickname: "Los Blancos",
        titles: 15,
        image: "images/real-madrid.jpg",
        summary:
            "The most successful club in European Cup history, famous for turning big European nights into legendary moments.",
        history: {
            founded: "1902",
            goldenEra: "1956–1960 and 2014–2024",
            story:
                "Real Madrid helped define the European Cup from its beginning. Led by legends such as Alfredo Di Stéfano, Ferenc Puskás and Paco Gento, Madrid won the first five editions from 1956 to 1960. Decades later, the club built another great European dynasty with stars including Cristiano Ronaldo, Sergio Ramos, Luka Modrić and Karim Benzema.",
            moments: [
                "1956 — Won the first European Cup, beating Stade de Reims 4–3.",
                "1960 — Defeated Eintracht Frankfurt 7–3 in one of the competition's most famous finals.",
                "1998 — Returned to the top of Europe after a 32-year wait.",
                "2002 — Zinedine Zidane scored his unforgettable volley against Bayer Leverkusen.",
                "2014 — Won La Décima, their tenth European Cup.",
                "2016–2018 — Won three consecutive Champions League titles.",
                "2022 — Beat Liverpool 1–0 in the final in Paris.",
                "2024 — Defeated Borussia Dortmund 2–0 to claim their 15th title."
            ],
            legends:
                "Alfredo Di Stéfano, Ferenc Puskás, Raúl, Cristiano Ronaldo, Sergio Ramos, Luka Modrić and Karim Benzema."
        }
    },

    {
        name: "AC Milan",
        country: "Italy",
        nickname: "Rossoneri",
        titles: 7,
        image: "images/ac-milan.jpg",
        summary:
            "An Italian giant whose European legacy was built by legendary defenders, creative midfielders and clinical forwards.",
        history: {
            founded: "1899",
            goldenEra: "1989–2007",
            story:
                "AC Milan became one of Europe's greatest teams through tactical intelligence, powerful defending and outstanding attacking football. Their late-1980s side, coached by Arrigo Sacchi, featured the Dutch stars Marco van Basten, Ruud Gullit and Frank Rijkaard. Later generations continued the tradition with Paolo Maldini, Kaká and Andrea Pirlo.",
            moments: [
                "1963 — Won their first European Cup by defeating Benfica 2–1.",
                "1969 — Beat Ajax 4–1 in the final.",
                "1989 — Defeated Steaua București 4–0 in a dominant final.",
                "1990 — Successfully defended the European Cup.",
                "1994 — Beat Barcelona 4–0 in one of the most memorable final performances.",
                "2003 — Defeated Juventus on penalties in an all-Italian final.",
                "2005 — Lost the famous Istanbul final after leading Liverpool 3–0 at half-time.",
                "2007 — Beat Liverpool 2–1 in Athens to win their seventh title."
            ],
            legends:
                "Paolo Maldini, Franco Baresi, Marco van Basten, Ruud Gullit, Kaká, Andrea Pirlo and Andriy Shevchenko."
        }
    },

    {
        name: "Liverpool FC",
        country: "England",
        nickname: "The Reds",
        titles: 6,
        image: "images/liverpool.jpg",
        summary:
            "A club known for unforgettable European comebacks, passionate supporters and famous nights at Anfield.",
        history: {
            founded: "1892",
            goldenEra: "1977–1984 and 2005–2019",
            story:
                "Liverpool rose to European dominance under Bill Shankly and Bob Paisley. Their teams of the late 1970s and early 1980s won four European Cups in eight seasons. The club later produced one of the most extraordinary comebacks in football history in Istanbul, before returning to European glory under Jürgen Klopp.",
            moments: [
                "1977 — Won their first European Cup by beating Borussia Mönchengladbach 3–1.",
                "1978 — Defeated Club Brugge to retain the trophy.",
                "1981 — Beat Real Madrid 1–0 in Paris.",
                "1984 — Defeated Roma on penalties in Rome.",
                "2005 — Came back from 3–0 down to beat AC Milan on penalties in Istanbul.",
                "2007 — Reached another final but lost to AC Milan.",
                "2018 — Lost the final to Real Madrid.",
                "2019 — Beat Tottenham Hotspur 2–0 to win their sixth European Cup."
            ],
            legends:
                "Kenny Dalglish, Graeme Souness, Steven Gerrard, Ian Rush, Mohamed Salah, Jamie Carragher and Virgil van Dijk."
        }
    },

    {
        name: "Bayern Munich",
        country: "Germany",
        nickname: "Die Roten",
        titles: 6,
        image: "images/bayern-munich.jpg",
        summary:
            "Germany's European powerhouse, famous for disciplined teams, powerful attacks and generations of elite players.",
        history: {
            founded: "1900",
            goldenEra: "1974–1976 and 2013–2020",
            story:
                "Bayern Munich established themselves among Europe's elite in the 1970s with Franz Beckenbauer, Gerd Müller and Sepp Maier. The club later built new generations of champions, combining German organisation with world-class attacking talent. Bayern's European story includes dominant runs and dramatic finals.",
            moments: [
                "1974 — Won their first European Cup after a replay against Atlético Madrid.",
                "1975 — Beat Leeds United to retain the trophy.",
                "1976 — Defeated Saint-Étienne to complete three consecutive European Cup wins.",
                "2001 — Beat Valencia on penalties after a tense final.",
                "2010 — Reached the final but lost to Inter Milan.",
                "2012 — Lost the final on penalties at their own stadium against Chelsea.",
                "2013 — Beat Borussia Dortmund 2–1 at Wembley.",
                "2020 — Defeated Paris Saint-Germain 1–0 to complete a perfect Champions League campaign."
            ],
            legends:
                "Franz Beckenbauer, Gerd Müller, Oliver Kahn, Philipp Lahm, Bastian Schweinsteiger, Thomas Müller and Manuel Neuer."
        }
    },

    {
        name: "FC Barcelona",
        country: "Spain",
        nickname: "Blaugrana",
        titles: 5,
        image: "images/barcelona.jpg",
        summary:
            "A club associated with technical football, academy talent and some of the most influential teams in modern football.",
        history: {
            founded: "1899",
            goldenEra: "1992–2015",
            story:
                "Barcelona's European journey changed dramatically under Johan Cruyff, whose Dream Team won the club's first European Cup. The club later developed a distinctive style built around possession and positional play. With Lionel Messi, Xavi Hernández, Andrés Iniesta and other stars, Barcelona became one of the defining teams of the modern Champions League era.",
            moments: [
                "1992 — Ronald Koeman scored the winning free-kick against Sampdoria at Wembley.",
                "2006 — Defeated Arsenal 2–1 in Paris.",
                "2009 — Beat Manchester United 2–0 to complete a historic treble.",
                "2011 — Defeated Manchester United 3–1 in a celebrated final at Wembley.",
                "2015 — Beat Juventus 3–1 to win their fifth European Cup.",
                "2017 — Produced a remarkable comeback against Paris Saint-Germain, winning the tie 6–5 on aggregate.",
                "2019 — Reached the semi-finals after a memorable comeback against Liverpool nearly happened in reverse."
            ],
            legends:
                "Johan Cruyff, Ronald Koeman, Xavi Hernández, Andrés Iniesta, Carles Puyol, Lionel Messi and Ronaldinho."
        }
    },

    {
        name: "Manchester United",
        country: "England",
        nickname: "The Red Devils",
        titles: 3,
        image: "images/manchester-united.jpg",
        summary:
            "A historic English club whose European identity includes the Busby Babes and a famous stoppage-time comeback.",
        history: {
            founded: "1878",
            goldenEra: "1968 and 1999–2008",
            story:
                "Manchester United's European history is marked by tragedy, rebuilding and triumph. After the Munich air disaster in 1958, Sir Matt Busby rebuilt the team and led it to the European Cup a decade later. Under Sir Alex Ferguson, United returned to the summit of Europe with dramatic wins and teams packed with world-class talent.",
            moments: [
                "1958 — The Munich air disaster deeply affected the club and its European ambitions.",
                "1968 — Beat Benfica 4–1 after extra time to win their first European Cup.",
                "1999 — Scored twice in stoppage time to beat Bayern Munich 2–1 in the final.",
                "2008 — Defeated Chelsea on penalties in Moscow to win their third European Cup.",
                "2009 — Reached the final again but lost to Barcelona.",
                "2011 — Lost another final to Barcelona at Wembley."
            ],
            legends:
                "Sir Bobby Charlton, George Best, Denis Law, Eric Cantona, David Beckham, Ryan Giggs, Paul Scholes and Cristiano Ronaldo."
        }
    },

    {
        name: "Inter Milan",
        country: "Italy",
        nickname: "Nerazzurri",
        titles: 3,
        image: "images/inter-milan.jpg",
        summary:
            "An Italian giant with a rich European tradition, famous for tactical strength and the historic 2010 treble.",
        history: {
            founded: "1908",
            goldenEra: "1964–1965 and 2010",
            story:
                "Inter Milan became a European force in the 1960s under Helenio Herrera, whose team was renowned for organisation and counterattacking. The club's greatest modern achievement arrived in 2010, when José Mourinho guided Inter to the Champions League as part of a historic treble-winning season.",
            moments: [
                "1964 — Beat Real Madrid 3–1 to win their first European Cup.",
                "1965 — Defeated Benfica 1–0 to retain the trophy.",
                "1967 — Reached another final but lost to Celtic.",
                "2010 — Beat Bayern Munich 2–0 in Madrid, with Diego Milito scoring both goals.",
                "2023 — Reached the final but lost 1–0 to Manchester City.",
                "2025 — Reached another final but lost to Paris Saint-Germain."
            ],
            legends:
                "Sandro Mazzola, Giacinto Facchetti, Javier Zanetti, Ronaldo Nazário, Diego Milito, Wesley Sneijder and Samuel Eto'o."
        }
    },

    {
        name: "Manchester City",
        country: "England",
        nickname: "The Citizens",
        titles: 1,
        image: "images/manchester-city.jpg",
        summary:
            "A modern European force whose patient rebuild culminated in the club's first Champions League triumph.",
        history: {
            founded: "1880",
            goldenEra: "2010s–2020s",
            story:
                "Manchester City's modern rise transformed the club into a regular contender in European football. Under Pep Guardiola, City developed a possession-based style built on positional movement, technical quality and tactical flexibility. After several difficult European campaigns, the club finally won its first Champions League in 2023.",
            moments: [
                "2016 — Reached the semi-finals for the first time in the Champions League era.",
                "2021 — Reached their first Champions League final but lost to Chelsea.",
                "2022 — Lost a dramatic semi-final to Real Madrid after a late comeback.",
                "2023 — Defeated Inter Milan 1–0 in Istanbul to win their first Champions League title.",
                "2023 — Completed a historic continental treble by also winning the Premier League and FA Cup."
            ],
            legends:
                "Vincent Kompany, David Silva, Sergio Agüero, Kevin De Bruyne, Erling Haaland, Bernardo Silva and İlkay Gündoğan."
        }
    }
];


/* ---------- ELEMENTS ---------- */

const clubGrid = document.getElementById("clubGrid");
const clubSearch = document.getElementById("clubSearch");
const clubCount = document.getElementById("clubCount");
const noResults = document.getElementById("noResults");

const filterButtons = document.querySelectorAll(".filter-btn");


/* ---------- HISTORY HTML ---------- */

function createHistoryHTML(club) {
    const history = club.history;

    return `
        <div class="history-heading">
            <span class="history-label">EUROPEAN LEGACY</span>
            <h3>${club.name}: The Full Story</h3>
            <p class="history-subtitle">
                From the early years to unforgettable European nights
            </p>
        </div>

        <div class="history-facts">
            <div class="history-fact">
                <span class="fact-label">Founded</span>
                <strong>${history.founded}</strong>
            </div>

            <div class="history-fact">
                <span class="fact-label">European Cups</span>
                <strong>${club.titles}</strong>
            </div>

            <div class="history-fact">
                <span class="fact-label">Golden Era</span>
                <strong>${history.goldenEra}</strong>
            </div>
        </div>

        <h3>The Story</h3>
        <p>${history.story}</p>

        <h3>Greatest European Moments</h3>
        <ol class="history-timeline">
            ${history.moments.map(moment => `
                <li>${moment}</li>
            `).join("")}
        </ol>

        <h3>Legends Who Shaped the Club</h3>
        <p>${history.legends}</p>

        <p class="history-footnote">
            European Cup totals include the competition's history from 1955.
            The Champions League name was introduced in 1992.
        </p>
    `;
}


/* ---------- CREATE CLUB CARD ---------- */

function createClubCard(club) {
    const card = document.createElement("article");

    card.className = "club-card";

    card.innerHTML = `
        <div class="club-crest">
            <span class="crest-fallback">${club.name}</span>
        </div>

        <div class="club-info">
            <p class="club-country">${club.country}</p>

            <h2>${club.name}</h2>

            <p class="club-nickname">${club.nickname}</p>

            <div class="club-stat">
                <span>European Cups</span>
                <strong>${club.titles}</strong>
            </div>

            <p class="club-summary">${club.summary}</p>

            <button
                class="club-details-btn"
                type="button"
                aria-expanded="false"
            >
                Explore Club History
            </button>

            <section class="club-history" hidden>
                ${createHistoryHTML(club)}
            </section>
        </div>
    `;

    const historyButton = card.querySelector(".club-details-btn");
    const historySection = card.querySelector(".club-history");

    historyButton.addEventListener("click", () => {
        const isHidden = historySection.hidden;

        historySection.hidden = !isHidden;

        historyButton.textContent = isHidden
            ? "Close Club History"
            : "Explore Club History";

        historyButton.setAttribute(
            "aria-expanded",
            String(isHidden)
        );
    });

    return card;
}


/* ---------- DISPLAY CLUBS ---------- */

function displayClubs(clubList) {
    if (!clubGrid) return;

    clubGrid.innerHTML = "";

    clubList.forEach(club => {
        clubGrid.appendChild(createClubCard(club));
    });

    if (clubCount) {
        clubCount.textContent =
            `${clubList.length} ${clubList.length === 1 ? "club" : "clubs"}`;
    }

    if (noResults) {
        noResults.hidden = clubList.length !== 0;
    }
}


/* ---------- SEARCH AND FILTER ---------- */

let activeFilter = "all";

function filterClubs() {
    const searchTerm = clubSearch
        ? clubSearch.value.trim().toLowerCase()
        : "";

    const filteredClubs = clubs.filter(club => {
        const matchesSearch = [
            club.name,
            club.country,
            club.nickname,
            club.summary,
            club.history.story,
            club.history.legends
        ].join(" ").toLowerCase().includes(searchTerm);

        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "england" && club.country === "England") ||
            (activeFilter === "spain" && club.country === "Spain") ||
            (activeFilter === "italy" && club.country === "Italy") ||
            (activeFilter === "germany" && club.country === "Germany");

        return matchesSearch && matchesFilter;
    });

    displayClubs(filteredClubs);
}


/* ---------- EVENT LISTENERS ---------- */

if (clubSearch) {
    clubSearch.addEventListener("input", filterClubs);
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        activeFilter = button.dataset.filter || "all";

        filterClubs();
    });
});


/* ---------- INITIALIZE PAGE ---------- */

displayClubs(clubs);
