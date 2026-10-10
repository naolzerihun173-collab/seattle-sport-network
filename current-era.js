
/* ==================================================
   CHAMPIONS LEAGUE — CURRENT ERA
   Stories arranged chronologically, 2023–2026
================================================== */

const moments = [

    /* ----------------------------------------------
       2023 — MANCHESTER CITY'S FIRST EUROPEAN TITLE
    ---------------------------------------------- */

    {
        year: "2023",
        title: "Manchester City Finally Conquer Europe",

        result: "Final: Manchester City 1–0 Inter Milan",

        story: "Manchester City had spent years trying to win the Champions League. In Istanbul, the breakthrough finally arrived when Rodri scored in the 68th minute. Inter fought hard and nearly equalised, but City's defence held on. The victory gave City their first European Cup and completed a historic treble after winning the Premier League and FA Cup.",

        players: "KEY PLAYERS: Rodri · Erling Haaland · Kevin De Bruyne · Ederson"
    },


    /* ----------------------------------------------
       2023 — HAALAND'S FIVE-GOAL PERFORMANCE
    ---------------------------------------------- */

    {
        year: "2023",
        title: "Erling Haaland Scores Five Goals in One Match",

        result: "Round of 16: Manchester City 7–0 RB Leipzig",

        story: "Haaland produced a remarkable performance by scoring five goals against RB Leipzig. He scored a first-half hat-trick and continued finding the net after the break. Manchester City won 8–1 on aggregate and advanced to the quarter-finals. The performance underlined Haaland's extraordinary ability to turn chances into goals.",

        players: "KEY PLAYER: Erling Haaland"
    },


    /* ----------------------------------------------
       2024 — REAL MADRID WIN THEIR 15TH TITLE
    ---------------------------------------------- */

    {
        year: "2024",
        title: "Real Madrid Win La Decimoquinta",

        result: "Final: Real Madrid 2–0 Borussia Dortmund",

        story: "Borussia Dortmund created dangerous chances in the first half at Wembley, but Real Madrid survived the pressure. Dani Carvajal headed Madrid ahead in the 74th minute, and Vinícius Júnior added the second. Madrid secured their 15th European Cup, extending their record as the competition's most successful club.",

        players: "KEY PLAYERS: Dani Carvajal · Vinícius Júnior · Thibaut Courtois"
    },


    /* ----------------------------------------------
       2024 — DORTMUND'S SURPRISE JOURNEY
    ---------------------------------------------- */

    {
        year: "2024",
        title: "Borussia Dortmund Reach the Final",

        result: "Semi-final: Dortmund defeated Paris Saint-Germain 2–0 on aggregate",

        story: "Dortmund were not widely expected to reach the final, but they overcame Paris Saint-Germain in both legs of their semi-final. Mats Hummels scored the decisive goal in the second leg, while Dortmund's organised defending frustrated PSG's attack. Their journey reminded supporters that teamwork and discipline can carry a club a long way in Europe.",

        players: "KEY PLAYERS: Mats Hummels · Gregor Kobel · Jadon Sancho"
    },


    /* ----------------------------------------------
       2024 — THE NEW LEAGUE-PHASE FORMAT
    ---------------------------------------------- */

    {
        year: "2024",
        title: "A New Format Changes the Competition",

        result: "The 2024–25 season introduced the league phase",

        story: "The Champions League moved away from its traditional four-team groups. The 36 participating clubs entered one league table, with each club playing eight matches against different opponents. The format introduced new matchups and a more complicated route to the knockout rounds, beginning a new chapter in the competition's structure.",

        players: "A NEW ERA: 36 CLUBS · ONE LEAGUE TABLE"
    },


    /* ----------------------------------------------
       2025 — PARIS SAINT-GERMAIN MAKE HISTORY
    ---------------------------------------------- */

    {
        year: "2025",
        title: "PSG Win Their First Champions League",

        result: "Final: Paris Saint-Germain 5–0 Inter Milan",

        story: "After years of trying to win Europe's biggest club prize, Paris Saint-Germain finally became champions. Achraf Hakimi opened the scoring, and Désiré Doué struck twice. Khvicha Kvaratskhelia and Senny Mayulu added further goals as PSG recorded a historic 5–0 victory. It was the club's first Champions League title and the biggest winning margin in a final in the competition's modern era.",

        players: "KEY PLAYERS: Désiré Doué · Achraf Hakimi · Ousmane Dembélé · Vitinha"
    },


    /* ----------------------------------------------
       2025 — DÉSIRÉ DOUÉ'S BREAKTHROUGH FINAL
    ---------------------------------------------- */

    {
        year: "2025",
        title: "Désiré Doué Announces Himself on the Biggest Stage",

        result: "Champions League final: Two goals and an assist",

        story: "The young French attacker played a decisive role in PSG's victory over Inter. He scored twice and helped set up another goal, delivering one of the standout individual performances of the final. His display became a symbol of PSG's energetic young team and its historic European achievement.",

        players: "KEY PLAYER: Désiré Doué"
    },


    /* ----------------------------------------------
       2026 — PSG RETAIN THE TROPHY
    ---------------------------------------------- */

    {
        year: "2026",
        title: "Paris Saint-Germain Become Back-to-Back Champions",

        result: "Final: PSG 1–1 Arsenal · PSG won 4–3 on penalties",

        story: "Paris Saint-Germain returned to the final as defending champions and faced Arsenal in Budapest. The match finished 1–1 after extra time, so the title was decided by a penalty shootout. PSG won 4–3 on penalties, retaining the trophy and becoming the first club since Real Madrid's 2016–2018 run to win consecutive Champions League titles in the modern era.",

        players: "KEY STORY: PSG RETAIN THE TROPHY · ARSENAL REACH THEIR FIRST FINAL SINCE 2006"
    }

];


/* ==================================================
   DISPLAY THE STORIES
================================================== */

const timeline = document.getElementById("timeline");

moments.forEach((moment, index) => {

    const article = document.createElement("article");

    article.className = "moment";

    article.innerHTML = `
        <span class="moment-number">
            STEP ${(index + 1).toString().padStart(2, "0")}
        </span>

        <span class="moment-year">
            ${moment.year}
        </span>

        <h3>${moment.title}</h3>

        <p class="moment-result">
            ${moment.result}
        </p>

        <p class="moment-story">
            ${moment.story}
        </p>

        <p class="moment-players">
            ${moment.players}
        </p>
    `;

    timeline.appendChild(article);

});
