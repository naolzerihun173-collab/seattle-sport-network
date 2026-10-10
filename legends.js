
/* ==================================================
   CHAMPIONS LEAGUE LEGENDS
   PLAYER DATA, SEARCH AND FILTERS
================================================== */


/* ==================================================
   PLAYER INFORMATION

   Note:
   - Goal totals refer to the main Champions League
     competition, excluding qualifying rounds.
   - European Cup history began before the competition
     adopted the Champions League name in 1992.
================================================== */

const legends = [

    /* ==============================================
       01. CRISTIANO RONALDO
    ============================================== */

    {
        id: 1,

        name: "Cristiano Ronaldo",
        initials: "CR7",
        position: "forward",
        positionLabel: "Forward",
        nickname: "The Record Breaker",

        image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano_Ronaldo_2018.jpg",

        alt: "Cristiano Ronaldo",

        achievements: [
            "Won five European Cup/Champions League titles: 2008, 2014, 2016, 2017 and 2018.",
            "Scored twice in Real Madrid's 4–1 victory over Juventus in the 2017 final.",
            "Scored a hat-trick against Wolfsburg in 2016 to overturn a 2–0 first-leg deficit.",
            "Scored a spectacular bicycle kick against Juventus in 2018."
        ],

        records: [
            "All-time leading goalscorer in the main Champions League competition, with 140 goals.",
            "Scored 17 goals in the 2013–14 campaign, a single-season competition record.",
            "Scored in three different Champions League finals."
        ],

        highlightTitle: "140 Champions League goals",

        highlight:
            "Ronaldo's goal total places him first on the all-time scoring list for the main competition.",

        source:
            "https://www.uefa.com/uefachampionsleague/",

        sourceLabel: "UEFA Champions League"
    },


    /* ==============================================
       02. LIONEL MESSI
    ============================================== */

    {
        id: 2,

        name: "Lionel Messi",
        initials: "LM10",
        position: "forward",
        positionLabel: "Forward",
        nickname: "The Magician",

        image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_20180626.jpg",

        alt: "Lionel Messi",

        achievements: [
            "Won four Champions League titles with Barcelona's first team: 2006, 2009, 2011 and 2015.",
            "Scored in the 2009 final against Manchester United.",
            "Scored a memorable header in the 2011 final against Manchester United.",
            "Scored five goals against Bayer Leverkusen in one match in 2012."
        ],

        records: [
            "Second on the all-time goalscoring list for the main Champions League competition, with 129 goals.",
            "One of the few players to score five goals in a single Champions League match.",
            "Scored more than 100 Champions League goals for Barcelona."
        ],

        highlightTitle: "129 Champions League goals",

        highlight:
            "Messi's dribbling, passing and finishing helped define Barcelona's most successful European era.",

        source:
            "https://www.uefa.com/uefachampionsleague/",

        sourceLabel: "UEFA Champions League"
    },


    /* ==============================================
       03. ZINEDINE ZIDANE
    ============================================== */

    {
        id: 3,

        name: "Zinedine Zidane",
        initials: "ZZ",
        position: "midfielder",
        positionLabel: "Midfielder",
        nickname: "The Maestro",

        image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Zinedine_Zidane_by_Tasnim_03.jpg",

        alt: "Zinedine Zidane",

        achievements: [
            "Won the Champions League as a player with Real Madrid in 2002.",
            "Scored the famous left-footed volley against Bayer Leverkusen in the 2002 final.",
            "Managed Real Madrid to Champions League titles in 2016, 2017 and 2018.",
            "Became one of the few people to win the competition as both a player and a manager."
        ],

        records: [
            "First manager to win three consecutive titles in the modern Champions League era.",
            "Won three Champions League titles as Real Madrid manager.",
            "His 2002 final volley remains one of the competition's most memorable goals."
        ],

        highlightTitle: "Three consecutive titles as manager",

        highlight:
            "Zidane led Real Madrid to three straight Champions League triumphs from 2016 through 2018.",

        source:
            "https://www.uefa.com/uefachampionsleague/",

        sourceLabel: "UEFA Champions League"
    },


    /* ==============================================
       04. PAOLO MALDINI
    ============================================== */

    {
        id: 4,

        name: "Paolo Maldini",
        initials: "PM",
        position: "defender",
        positionLabel: "Defender",
        nickname: "The Defensive Icon",

        image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Paolo_Maldini_2008.jpg",

        alt: "Paolo Maldini",

        achievements: [
            "Won five European Cup/Champions League titles as a player with AC Milan.",
            "Captained Milan to European glory in the 2003 and 2007 finals.",
            "Scored in the 2005 final against Liverpool.",
            "Spent his entire senior club career with AC Milan."
        ],

        records: [
            "Scored after approximately 51 seconds in the 2005 final, setting a final-goal milestone at the time.",
            "Won five European Cup/Champions League titles during his playing career.",
            "Became one of the competition's most celebrated defenders and captains."
        ],

        highlightTitle: "Five European titles",

        highlight:
            "Maldini combined leadership, positioning and consistency throughout his long AC Milan career.",

        source:
            "https://www.uefa.com/uefachampionsleague/",

        sourceLabel: "UEFA Champions League"
    },


    /* ==============================================
       05. ANDRÉS INIESTA
    ============================================== */

    {
        id: 5,

        name: "Andrés Iniesta",
        initials: "AI",
        position: "midfielder",
        positionLabel: "Midfielder",
        nickname: "The Playmaker",

        image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Andres_Iniesta_2018.jpg",

        alt: "Andrés Iniesta",

        achievements: [
            "Won four Champions League titles with Barcelona: 2006, 2009, 2011 and 2015.",
            "Played a key role in Barcelona's midfield during the 2009, 2011 and 2015 title-winning campaigns.",
            "Helped Barcelona control matches with precise passing, close control and intelligent movement.",
            "Was part of the Barcelona team that won the 2009 final against Manchester United."
        ],

        records: [
            "Won four Champions League titles with Barcelona's first team.",
            "Became one of the defining midfielders of Barcelona's possession-based era.",
            "Was a key participant in three Barcelona Champions League-winning campaigns between 2009 and 2015."
        ],

        highlightTitle: "Four Champions League titles",

        highlight:
            "Iniesta's influence came through controlling midfield, creating space and helping Barcelona dominate possession.",

        source:
            "https://www.uefa.com/uefachampionsleague/",

        sourceLabel: "UEFA Champions League"
    }

];


/* ==================================================
   SELECT PAGE ELEMENTS
================================================== */

const legendGrid = document.getElementById("legendGrid");
const legendSearch = document.getElementById("legendSearch");
const legendCount = document.getElementById("legendCount");
const noResults = document.getElementById("noResults");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";


/* ==================================================
   SAFE HTML TEXT
   Prevents player text from being treated as HTML.
================================================== */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


/* ==================================================
   BUILD FACT LISTS
================================================== */

function createFactList(items) {

    return `
        <ul class="fact-list">
            ${items.map(item => `
                <li>${escapeHTML(item)}</li>
            `).join("")}
        </ul>
    `;
}


/* ==================================================
   BUILD ONE PLAYER CARD
================================================== */

function createLegendCard(player) {

    return `
        <article class="legend-card">

            <div
                class="player-photo"
                data-initials="${escapeHTML(player.initials)}"
            >

                <img
                    src="${escapeHTML(player.image)}"
                    alt="${escapeHTML(player.alt)}"
                    loading="lazy"
                >

                <span class="player-number">
                    ${String(player.id).padStart(2, "0")}
                </span>

            </div>


            <div class="card-content">

                <span class="player-position">
                    ${escapeHTML(player.positionLabel)}
                </span>

                <h3 class="player-name">
                    ${escapeHTML(player.name)}
                </h3>

                <p class="player-nickname">
                    "${escapeHTML(player.nickname)}"
                </p>


                <div class="player-facts">

                    <!-- ACHIEVEMENTS -->

                    <section class="fact-section">

                        <h4>
                            <span aria-hidden="true">★</span>
                            What He Achieved
                        </h4>

                        ${createFactList(player.achievements)}

                    </section>


                    <!-- RECORDS -->

                    <section class="fact-section">

                        <h4>
                            <span aria-hidden="true">◆</span>
                            Records & Milestones
                        </h4>

                        ${createFactList(player.records)}

                        <div class="record-highlight">

                            <strong>
                                ${escapeHTML(player.highlightTitle)}
                            </strong>

                            <p>
                                ${escapeHTML(player.highlight)}
                            </p>

                        </div>

                    </section>

                </div>


                <!-- SOURCE -->

                <p class="player-source">
                    Historical reference:
                    <a
                        href="${escapeHTML(player.source)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${escapeHTML(player.sourceLabel)}
                    </a>
                </p>

            </div>

        </article>
    `;
}


/* ==================================================
   RENDER PLAYER CARDS
================================================== */

function renderLegends() {

    const searchTerm = legendSearch.value
        .trim()
        .toLowerCase();

    const filteredLegends = legends.filter(player => {

        const matchesPosition =
            activeFilter === "all" ||
            player.position === activeFilter;

        const searchableContent = [
            player.name,
            player.nickname,
            player.positionLabel,
            ...player.achievements,
            ...player.records,
            player.highlightTitle,
            player.highlight
        ].join(" ").toLowerCase();

        const matchesSearch =
            searchableContent.includes(searchTerm);

        return matchesPosition && matchesSearch;
    });


    legendGrid.innerHTML = filteredLegends
        .map(createLegendCard)
        .join("");


    legendCount.textContent =
        String(filteredLegends.length).padStart(2, "0");


    noResults.hidden = filteredLegends.length !== 0;


    /* Attach image fallback behavior to each card. */

    legendGrid.querySelectorAll(".player-photo img")
        .forEach(img => {

            function showFallback() {

                img.style.display = "none";

                img.parentElement.classList.add("image-fallback");
            }

            img.addEventListener("error", showFallback, {
                once: true
            });

            /* Handle an image that failed before the listener. */

            if (img.complete && img.naturalWidth === 0) {
                showFallback();
            }
        });

}


/* ==================================================
   SEARCH
================================================== */

legendSearch.addEventListener("input", renderLegends);


/* ==================================================
   FILTER BY POSITION
================================================== */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        activeFilter = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderLegends();

    });

});


/* ==================================================
   INITIALIZE THE PAGE
================================================== */

renderLegends();
