
/* ==================================================
   CHAMPIONS LEAGUE MOMENTS
   Stories arranged from the past to the present
================================================== */

const moments = [
    {
        year: "1995",
        title: "Ajax's Young Stars Conquer Europe",
        result: "Final: Ajax 1–0 AC Milan",
        story: "Ajax's young team defeated defending champions AC Milan through an 18-year-old Patrick Kluivert's late goal. Players such as Clarence Seedorf, Edgar Davids and Edwin van der Sar helped make the team memorable. The victory demonstrated how young talent could conquer Europe's biggest competition.",
        players: "KEY PLAYER: Patrick Kluivert"
    },

    {
        year: "1999",
        title: "Manchester United's Stoppage-Time Miracle",
        result: "Final: Manchester United 2–1 Bayern Munich",
        story: "Bayern led for most of the match, but Manchester United scored twice in stoppage time. Teddy Sheringham equalised before Ole Gunnar Solskjær scored the winner. United completed a historic treble, making this one of the most dramatic finals ever played.",
        players: "KEY PLAYERS: Sheringham · Solskjær"
    },

    {
        year: "2002",
        title: "Zinedine Zidane's Legendary Volley",
        result: "Final: Real Madrid 2–1 Bayer Leverkusen",
        story: "Zidane met Roberto Carlos's high cross with a spectacular left-footed volley. The goal gave Madrid the lead and became one of the most famous strikes in a European Cup final. Real Madrid went on to secure their ninth European title.",
        players: "KEY PLAYER: Zinedine Zidane"
    },

    {
        year: "2004",
        title: "Porto Shock Europe",
        result: "Final: Porto 3–0 Monaco",
        story: "José Mourinho's Porto defeated Monaco convincingly in the final after an impressive European campaign. The victory announced Mourinho as one of football's leading young managers and showed that clubs outside Europe's richest leagues could still reach the summit.",
        players: "KEY FIGURES: José Mourinho · Deco"
    },

    {
        year: "2005",
        title: "The Miracle of Istanbul",
        result: "Final: Liverpool 3–3 AC Milan · Liverpool won on penalties",
        story: "Milan led 3–0 at half-time, but Liverpool scored three times after the break. Steven Gerrard inspired the comeback, and goalkeeper Jerzy Dudek made crucial saves in the shootout. Liverpool won their fifth European Cup in an unforgettable night.",
        players: "KEY PLAYERS: Steven Gerrard · Jerzy Dudek · Xabi Alonso"
    },

    {
        year: "2007",
        title: "AC Milan Take Revenge in Athens",
        result: "Final: AC Milan 2–1 Liverpool",
        story: "Two years after the Istanbul defeat, Milan met Liverpool in another final. Filippo Inzaghi scored twice, helping Milan win their seventh European Cup and gain revenge for their earlier loss.",
        players: "KEY PLAYER: Filippo Inzaghi"
    },

    {
        year: "2008",
        title: "Paul Scholes Sends United to Moscow",
        result: "Semi-final: Manchester United 1–0 Barcelona · 1–0 aggregate",
        story: "Scholes scored a powerful long-range goal in the second leg to send United into the final. Manchester United subsequently defeated Chelsea on penalties in Moscow, winning their third European Cup.",
        players: "KEY PLAYER: Paul Scholes"
    },

    {
        year: "2009",
        title: "Messi's Header in Rome",
        result: "Final: Barcelona 2–0 Manchester United",
        story: "Lionel Messi scored a memorable header against Manchester United despite being shorter than many defenders. Barcelona won the final and completed a treble under Pep Guardiola, establishing themselves as one of the great teams of their era.",
        players: "KEY PLAYER: Lionel Messi"
    },

    {
        year: "2010",
        title: "Inter Survive Barcelona's Pressure",
        result: "Semi-final: Barcelona 1–0 Inter · Inter advanced 3–2 on aggregate",
        story: "Inter arrived at the Camp Nou with a 3–1 first-leg advantage. Despite having Thiago Motta sent off, they defended through intense Barcelona pressure and advanced to the final. Inter later defeated Bayern Munich to complete a historic treble.",
        players: "KEY FIGURES: José Mourinho · Wesley Sneijder"
    },

    {
        year: "2011",
        title: "Barcelona's Wembley Masterclass",
        result: "Final: Barcelona 3–1 Manchester United",
        story: "Barcelona controlled the final with precise passing and movement. Pedro, Messi and David Villa scored, giving Guardiola's team another European title and reinforcing its reputation as one of the most influential sides of modern football.",
        players: "KEY PLAYERS: Messi · Xavi · Iniesta"
    },

    {
        year: "2012",
        title: "Drogba Delivers Chelsea's First Title",
        result: "Final: Chelsea 1–1 Bayern Munich · Chelsea won on penalties",
        story: "Bayern scored late, but Drogba equalised with a powerful header. After extra time, he converted the decisive penalty. Chelsea won their first Champions League title in Bayern's home stadium.",
        players: "KEY PLAYERS: Didier Drogba · Petr Čech"
    },

    {
        year: "2014",
        title: "92:48 — La Décima",
        result: "Final: Real Madrid 4–1 Atlético Madrid after extra time",
        story: "Sergio Ramos scored a stoppage-time header to equalise against Atlético Madrid. Madrid dominated extra time, scoring three more goals to win their tenth European Cup, a trophy supporters had waited twelve years to see.",
        players: "KEY PLAYERS: Sergio Ramos · Gareth Bale · Cristiano Ronaldo"
    },

    {
        year: "2017",
        title: "Real Madrid Defeat Juventus 4–1",
        result: "Final: Real Madrid 4–1 Juventus",
        story: "Cristiano Ronaldo scored twice as Madrid took control of the final in Cardiff. Madrid became the first team to win consecutive Champions League titles in the modern era.",
        players: "KEY PLAYER: Cristiano Ronaldo"
    },

    {
        year: "2017",
        title: "Barcelona's Historic Comeback Against PSG",
        result: "Barcelona 6–1 PSG · 6–5 on aggregate",
        story: "After losing the first leg 4–0, Barcelona needed a huge comeback. Neymar scored twice late in the second leg, and Sergi Roberto scored in stoppage time to complete one of the most extraordinary turnarounds in the competition.",
        players: "KEY PLAYERS: Neymar · Lionel Messi · Sergi Roberto"
    },

    {
        year: "2018",
        title: "Ronaldo's Bicycle Kick in Turin",
        result: "Quarter-final first leg: Juventus 0–3 Real Madrid",
        story: "Ronaldo's spectacular overhead kick stunned the Juventus crowd, who applauded the goal. Madrid advanced through the tie and ultimately won their third consecutive Champions League title.",
        players: "KEY PLAYER: Cristiano Ronaldo"
    },

    {
        year: "2019",
        title: "Lucas Moura's Last-Second Hat-Trick",
        result: "Semi-final: Ajax 2–3 Tottenham · 3–3 aggregate",
        story: "Ajax led 3–0 on aggregate at half-time of the second leg. Lucas Moura scored three times, with his last goal arriving in stoppage time. Tottenham advanced on away goals under the rules then in force and reached their first final.",
        players: "KEY PLAYER: Lucas Moura"
    },

    {
        year: "2020",
        title: "Bayern Munich's 8–2 Victory Over Barcelona",
        result: "Quarter-final: Bayern Munich 8–2 Barcelona",
        story: "Bayern produced a devastating attacking performance in a one-leg quarter-final. The result exposed Barcelona's defensive weaknesses and became one of the most shocking scorelines in modern European football. Bayern went on to win the competition.",
        players: "KEY FIGURES: Thomas Müller · Robert Lewandowski"
    },

    {
        year: "2022",
        title: "Real Madrid's Comeback Against Manchester City",
        result: "Semi-final: Real Madrid 3–1 Manchester City after extra time · 6–5 aggregate",
        story: "Madrid looked close to elimination before Rodrygo scored twice in the final minutes. Karim Benzema then converted a penalty in extra time. Madrid reached the final and eventually won their 14th European Cup.",
        players: "KEY PLAYERS: Rodrygo · Karim Benzema · Thibaut Courtois"
    }
];


/* ==================================================
   DISPLAY THE MOMENTS
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
