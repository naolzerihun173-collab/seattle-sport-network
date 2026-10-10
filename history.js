
// =====================================================
// CHAMPIONS LEAGUE HISTORY
// Season-by-season historical records and era filters
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const seasonGrid = document.getElementById("seasonGrid");
    const filterButtons = document.querySelectorAll(".filter");

    // Each entry represents one completed season.
    // Score format: winner's score - runner-up's score.

    const seasons = [

        {
            year: "1955–56",
            era: "1950",
            winner: "Real Madrid",
            runner: "Stade de Reims",
            score: "4–3",
            story: "The first European Cup final was an open, attacking contest in Paris. Real Madrid came from behind and won the inaugural trophy, beginning a European story that would define the club and the competition."
        },
        {
            year: "1956–57",
            era: "1950",
            winner: "Real Madrid",
            runner: "Fiorentina",
            score: "2–0",
            story: "Madrid defended their crown at the Santiago Bernabéu. Alfredo Di Stéfano and Francisco Gento helped the Spanish champions become the first team to retain the European Cup."
        },
        {
            year: "1957–58",
            era: "1950",
            winner: "Real Madrid",
            runner: "AC Milan",
            score: "3–2 after extra time",
            story: "Milan pushed Madrid into extra time in Brussels. Gento scored the decisive goal, securing a third consecutive title and showing the champions' ability to survive the toughest challenges."
        },
        {
            year: "1958–59",
            era: "1950",
            winner: "Real Madrid",
            runner: "Stade de Reims",
            score: "2–0",
            story: "Reims reached another final, but Madrid controlled the decisive moments in Stuttgart. The victory delivered a fourth consecutive European Cup and strengthened their reputation as Europe's leading club."
        },
        {
            year: "1959–60",
            era: "1950",
            winner: "Real Madrid",
            runner: "Eintracht Frankfurt",
            score: "7–3",
            story: "The Hampden Park final became one of football's great attacking performances. Ferenc Puskás scored four goals and Di Stéfano added a hat-trick as Madrid won their fifth straight title in a spectacular match."
        },
        {
            year: "1960–61",
            era: "1950",
            winner: "Benfica",
            runner: "Barcelona",
            score: "3–2",
            story: "Benfica ended Madrid's run and brought the trophy to Portugal. Barcelona fought hard, but Béla Guttmann's side used its pace and direct attacking play to win a final that signalled a change in European power."
        },
        {
            year: "1961–62",
            era: "1950",
            winner: "Benfica",
            runner: "Real Madrid",
            score: "5–3",
            story: "Madrid returned to the final, but Eusébio's Benfica prevailed in Amsterdam. The Portuguese champions defended their crown in a high-scoring match and confirmed that their first triumph was no accident."
        },
        {
            year: "1962–63",
            era: "1950",
            winner: "AC Milan",
            runner: "Benfica",
            score: "2–1",
            story: "Benfica were chasing a third consecutive title, but Milan found a way past them at Wembley. José Altafini scored twice, giving Italy its first European Cup winner."
        },
        {
            year: "1963–64",
            era: "1950",
            winner: "Inter Milan",
            runner: "Real Madrid",
            score: "3–1",
            story: "Helenio Herrera's disciplined Inter defeated the competition's most decorated side in Vienna. Sandro Mazzola scored twice, and Inter's tactical organisation announced a new European force."
        },
        {
            year: "1964–65",
            era: "1950",
            winner: "Inter Milan",
            runner: "Benfica",
            score: "1–0",
            story: "Inter defended the trophy at San Siro. Jair's goal settled a tight final, while the Italian side's defensive control helped them become champions for a second consecutive season."
        },
        {
            year: "1965–66",
            era: "1950",
            winner: "Real Madrid",
            runner: "Partizan",
            score: "2–1",
            story: "Partizan took the lead in Brussels, but Madrid recovered through Amancio and Fernando Serena. The win gave Madrid a sixth European Cup and showed that a new generation could carry the club's European identity."
        },
        {
            year: "1966–67",
            era: "1950",
            winner: "Celtic",
            runner: "Inter Milan",
            score: "2–1",
            story: "Celtic overturned an early Inter penalty in Lisbon and won with a brave, attacking display. Jock Stein's team became the first British club to lift the European Cup."
        },
        {
            year: "1967–68",
            era: "1950",
            winner: "Manchester United",
            runner: "Benfica",
            score: "4–1 after extra time",
            story: "Ten years after the Munich air disaster, United reached the summit under Matt Busby. Bobby Charlton scored twice and George Best helped break Benfica after normal time, giving the club an emotional first European crown."
        },
        {
            year: "1968–69",
            era: "1950",
            winner: "AC Milan",
            runner: "Ajax",
            score: "4–1",
            story: "Milan dominated the final in Madrid, with Pierino Prati scoring a hat-trick. Ajax were beginning to build their own great side, but Milan were too clinical on the night."
        },

        {
            year: "1969–70",
            era: "1970",
            winner: "Feyenoord",
            runner: "Celtic",
            score: "2–1 after extra time",
            story: "Celtic took an early lead, but Feyenoord fought back and won in extra time through Ove Kindvall. The Rotterdam club became the first Dutch winner, opening the door for the Netherlands' rise in European football."
        },
        {
            year: "1970–71",
            era: "1970",
            winner: "Ajax",
            runner: "Panathinaikos",
            score: "2–0",
            story: "Ajax won their first European Cup at Wembley. Rinus Michels' team combined pressing, movement and positional interchange, bringing a new footballing idea to the top of Europe."
        },
        {
            year: "1971–72",
            era: "1970",
            winner: "Ajax",
            runner: "Inter Milan",
            score: "2–0",
            story: "Johan Cruyff scored both goals as Ajax beat Inter in Rotterdam. Their intelligent movement and aggressive pressing overcame the Italian defence and marked the beginning of Ajax's three-year reign."
        },
        {
            year: "1972–73",
            era: "1970",
            winner: "Ajax",
            runner: "Juventus",
            score: "1–0",
            story: "Ajax completed a third consecutive title in Belgrade. Johnny Rep scored early, and the Dutch side protected the lead with composure, cementing one of the defining dynasties of the European Cup era."
        },
        {
            year: "1973–74",
            era: "1970",
            winner: "Bayern Munich",
            runner: "Atlético Madrid",
            score: "1–1; replay 4–0",
            story: "Atlético looked close to glory after Luis Aragonés scored late in extra time, but Georg Schwarzenbeck equalised from distance. In the replay two days later, Bayern won 4–0 and began their run of three straight titles."
        },
        {
            year: "1974–75",
            era: "1970",
            winner: "Bayern Munich",
            runner: "Leeds United",
            score: "2–0",
            story: "Bayern retained the cup in a tense Paris final. Franz Roth and Gerd Müller scored late, while Leeds were left frustrated by controversial decisions. Bayern's experience proved decisive."
        },
        {
            year: "1975–76",
            era: "1970",
            winner: "Bayern Munich",
            runner: "Saint-Étienne",
            score: "1–0",
            story: "Franz Roth's second-half goal gave Bayern a third consecutive European Cup. Saint-Étienne hit the posts and came close, but Bayern's resilience secured their place among the competition's great dynasties."
        },
        {
            year: "1976–77",
            era: "1970",
            winner: "Liverpool",
            runner: "Borussia Mönchengladbach",
            score: "3–1",
            story: "Liverpool won their first European Cup in Rome. Terry McDermott, Tommy Smith and Phil Neal scored, and Bob Paisley's team showed the organisation and confidence that would make the club a European powerhouse."
        },
        {
            year: "1977–78",
            era: "1970",
            winner: "Liverpool",
            runner: "Club Brugge",
            score: "1–0",
            story: "Kenny Dalglish scored the only goal at Wembley after coming off the bench. Liverpool defended their title with a controlled performance and became the first British club to win back-to-back European Cups."
        },
        {
            year: "1978–79",
            era: "1970",
            winner: "Nottingham Forest",
            runner: "Malmö FF",
            score: "1–0",
            story: "Brian Clough's Forest, newly risen through English football, stunned Europe by winning the trophy in Munich. Trevor Francis scored the winner in a remarkable rise to the summit."
        },
        {
            year: "1979–80",
            era: "1970",
            winner: "Nottingham Forest",
            runner: "Hamburg",
            score: "1–0",
            story: "Forest defended their crown in Madrid through John Robertson's goal. Clough's compact, disciplined team proved that their first triumph was no fluke."
        },
        {
            year: "1980–81",
            era: "1970",
            winner: "Liverpool",
            runner: "Real Madrid",
            score: "1–0",
            story: "Alan Kennedy scored late in Paris to give Liverpool their third European Cup. Madrid had chances, but Liverpool's collective strength and defensive concentration decided a close final."
        },
        {
            year: "1981–82",
            era: "1970",
            winner: "Aston Villa",
            runner: "Bayern Munich",
            score: "1–0",
            story: "Aston Villa completed an extraordinary European run in Rotterdam. Peter Withe scored the winner, while goalkeeper Nigel Spink made key saves against Bayern."
        },
        {
            year: "1982–83",
            era: "1970",
            winner: "Hamburg",
            runner: "Juventus",
            score: "1–0",
            story: "Felix Magath's early goal was enough for Hamburg in Athens. Juventus could not find an equaliser, and Hamburg's disciplined performance delivered the club's first European Cup."
        },
        {
            year: "1983–84",
            era: "1970",
            winner: "Liverpool",
            runner: "Roma",
            score: "1–1; Liverpool won 4–2 on penalties",
            story: "Liverpool lifted the trophy in Rome, Roma's home city. Bruce Grobbelaar's famous penalty routine helped unsettle the opposition, and Alan Kennedy scored the decisive kick."
        },
        {
            year: "1984–85",
            era: "1970",
            winner: "Juventus",
            runner: "Liverpool",
            score: "1–0",
            story: "Michel Platini's penalty decided a final overshadowed by the Heysel Stadium disaster, where 39 people died before kick-off. The result can never be separated from the tragedy and the need for safer football grounds."
        },
        {
            year: "1985–86",
            era: "1970",
            winner: "Steaua București",
            runner: "Barcelona",
            score: "0–0; Steaua won 2–0 on penalties",
            story: "Steaua goalkeeper Helmuth Duckadam saved all four Barcelona penalties in Seville. The Romanian champions won their first European Cup in one of the most remarkable goalkeeping performances in a final."
        },
        {
            year: "1986–87",
            era: "1970",
            winner: "Porto",
            runner: "Bayern Munich",
            score: "2–1",
            story: "Bayern led in Vienna, but Porto turned the match around late. Rabah Madjer's backheel equaliser became an iconic moment, and Juary scored soon after to give Porto their first European Cup."
        },
        {
            year: "1987–88",
            era: "1970",
            winner: "PSV Eindhoven",
            runner: "Benfica",
            score: "0–0; PSV won 6–5 on penalties",
            story: "The final in Stuttgart produced no goals, and PSV prevailed in a long penalty shoot-out. Guus Hiddink's team completed a European Cup and domestic cup double."
        },
        {
            year: "1988–89",
            era: "1970",
            winner: "AC Milan",
            runner: "Steaua București",
            score: "4–0",
            story: "Milan overwhelmed Steaua in Barcelona, with two goals each from Ruud Gullit and Marco van Basten. Arrigo Sacchi's pressing and coordinated defence produced one of the era's most admired teams."
        },

        {
            year: "1989–90",
            era: "1990",
            winner: "AC Milan",
            runner: "Benfica",
            score: "1–0",
            story: "Frank Rijkaard scored the only goal in Vienna as Milan retained the cup. Their Dutch stars and Sacchi's tactical system made Milan the dominant side of the late 1980s."
        },
        {
            year: "1990–91",
            era: "1990",
            winner: "Red Star Belgrade",
            runner: "Marseille",
            score: "0–0; Red Star won 5–3 on penalties",
            story: "Red Star defended with discipline in Bari and won on penalties. The Yugoslav champions' achievement became one of the great European stories shortly before conflict transformed the region around the club."
        },
        {
            year: "1991–92",
            era: "1990",
            winner: "Barcelona",
            runner: "Sampdoria",
            score: "1–0 after extra time",
            story: "Ronald Koeman's free-kick in extra time delivered Barcelona's first European Cup at Wembley. Johan Cruyff's Dream Team finally brought the trophy to the club after years of near misses."
        },
        {
            year: "1992–93",
            era: "1990",
            winner: "Marseille",
            runner: "AC Milan",
            score: "1–0",
            story: "The first season under the Champions League name ended with Marseille beating Milan in Munich. Basile Boli's header secured France's first European Cup, although Marseille's domestic success was later clouded by a match-fixing scandal."
        },
        {
            year: "1993–94",
            era: "1990",
            winner: "AC Milan",
            runner: "Barcelona",
            score: "4–0",
            story: "Milan entered the final as underdogs because of suspensions and injuries, yet defeated Barcelona 4–0 in Athens. Daniele Massaro scored twice, while Dejan Savićević's memorable lob highlighted a stunning performance."
        },
        {
            year: "1994–95",
            era: "1990",
            winner: "Ajax",
            runner: "AC Milan",
            score: "1–0",
            story: "Patrick Kluivert, only 18, scored late to beat Milan in Vienna. Louis van Gaal's young Ajax side combined academy talent with tactical discipline and completed an unbeaten European campaign."
        },
        {
            year: "1995–96",
            era: "1990",
            winner: "Juventus",
            runner: "Ajax",
            score: "1–1; Juventus won 4–2 on penalties",
            story: "Juventus ended Ajax's reign in Rome after a draw and penalty shoot-out. Fabrizio Ravanelli and Jari Litmanen scored in normal time, but Juventus held their nerve from the spot."
        },
        {
            year: "1996–97",
            era: "1990",
            winner: "Borussia Dortmund",
            runner: "Juventus",
            score: "3–1",
            story: "Dortmund defeated defending champions Juventus in Munich. Karl-Heinz Riedle scored twice, and substitute Lars Ricken scored almost immediately after entering the match, sealing the German club's first European Cup."
        },
        {
            year: "1997–98",
            era: "1990",
            winner: "Real Madrid",
            runner: "Juventus",
            score: "1–0",
            story: "Predrag Mijatović scored the decisive goal in Amsterdam, ending Madrid's 32-year wait for the European Cup. The victory marked the club's return to the top of Europe."
        },
        {
            year: "1998–99",
            era: "1990",
            winner: "Manchester United",
            runner: "Bayern Munich",
            score: "2–1",
            story: "Bayern led for almost the entire final, but United scored twice in stoppage time through Teddy Sheringham and Ole Gunnar Solskjær. The extraordinary comeback completed United's treble and became one of football's most famous endings."
        },

        {
            year: "1999–2000",
            era: "2000",
            winner: "Real Madrid",
            runner: "Valencia",
            score: "3–0",
            story: "The first all-Spanish final saw Madrid defeat Valencia in Paris. Raúl, Steve McManaman and Fernando Morientes scored, and Madrid's blend of technical quality and experience won the first Champions League final of the new millennium."
        },
        {
            year: "2000–01",
            era: "2000",
            winner: "Bayern Munich",
            runner: "Valencia",
            score: "1–1; Bayern won 5–4 on penalties",
            story: "Valencia reached a second straight final, but Bayern won a tense shoot-out in Milan. Oliver Kahn became the defining figure of the night, helping Bayern claim their first European title since 1976."
        },
        {
            year: "2001–02",
            era: "2000",
            winner: "Real Madrid",
            runner: "Bayer Leverkusen",
            score: "2–1",
            story: "Zinedine Zidane's left-footed volley in Glasgow remains one of the most celebrated final goals. Raúl had opened the scoring, but Zidane's strike gave Madrid another title after a season full of attacking quality."
        },
        {
            year: "2002–03",
            era: "2000",
            winner: "AC Milan",
            runner: "Juventus",
            score: "0–0; Milan won 3–2 on penalties",
            story: "The first all-Italian final was a cautious contest at Old Trafford. Milan goalkeeper Dida saved crucial penalties, and Andriy Shevchenko scored the winning kick to give Milan their sixth European Cup."
        },
        {
            year: "2003–04",
            era: "2000",
            winner: "Porto",
            runner: "Monaco",
            score: "3–0",
            story: "José Mourinho's Porto swept aside Monaco in Gelsenkirchen. Deco led the side creatively, and goals from Carlos Alberto, Deco and Dmitri Alenichev completed a campaign that announced Mourinho as a major coaching figure."
        },
        {
            year: "2004–05",
            era: "2000",
            winner: "Liverpool",
            runner: "AC Milan",
            score: "3–3; Liverpool won 3–2 on penalties",
            story: "Milan led 3–0 at half-time in Istanbul, but Liverpool scored three times in six second-half minutes. Jerzy Dudek's saves in extra time and the shoot-out helped Liverpool win one of the most dramatic finals ever played."
        },
        {
            year: "2005–06",
            era: "2000",
            winner: "Barcelona",
            runner: "Arsenal",
            score: "2–1",
            story: "Arsenal took the lead despite playing with ten men after Jens Lehmann's dismissal, but Barcelona changed the game with late goals from Samuel Eto'o and Juliano Belletti. The victory launched a remarkable period for Barcelona."
        },
        {
            year: "2006–07",
            era: "2000",
            winner: "AC Milan",
            runner: "Liverpool",
            score: "2–1",
            story: "Milan gained revenge for Istanbul in Athens. Filippo Inzaghi scored twice, and Liverpool's late goal from Dirk Kuyt came too late to force another comeback."
        },
        {
            year: "2007–08",
            era: "2000",
            winner: "Manchester United",
            runner: "Chelsea",
            score: "1–1; United won 6–5 on penalties",
            story: "The all-English final in Moscow was decided by penalties after Cristiano Ronaldo and Frank Lampard scored in normal time. John Terry slipped while taking Chelsea's potential winning penalty, and Edwin van der Sar saved from Nicolas Anelka."
        },
        {
            year: "2008–09",
            era: "2000",
            winner: "Barcelona",
            runner: "Manchester United",
            score: "2–0",
            story: "Barcelona defeated the holders in Rome with goals from Samuel Eto'o and Lionel Messi. Pep Guardiola's first season as coach ended with a treble, and the team's possession-based football became a benchmark for the sport."
        },

        {
            year: "2009–10",
            era: "2010",
            winner: "Inter Milan",
            runner: "Bayern Munich",
            score: "2–0",
            story: "José Mourinho's Inter shut down Bayern in Madrid and won through two Diego Milito goals. Inter completed a historic treble, combining tactical discipline with devastating counterattacks."
        },
        {
            year: "2010–11",
            era: "2010",
            winner: "Barcelona",
            runner: "Manchester United",
            score: "3–1",
            story: "Barcelona dominated much of the Wembley final, with Pedro, Messi and David Villa scoring. United struggled to contain the movement and passing of Guardiola's side, whose performance is remembered among the finest of the modern era."
        },
        {
            year: "2011–12",
            era: "2010",
            winner: "Chelsea",
            runner: "Bayern Munich",
            score: "1–1; Chelsea won 4–3 on penalties",
            story: "Bayern played the final at their own stadium and led late, but Didier Drogba equalised with a powerful header. Drogba later scored the decisive penalty after Petr Čech made key saves, giving Chelsea their first European Cup."
        },
        {
            year: "2012–13",
            era: "2010",
            winner: "Bayern Munich",
            runner: "Borussia Dortmund",
            score: "2–1",
            story: "The first all-German final was settled late by Arjen Robben at Wembley. Bayern's win followed a series of near misses and began a season in which the club completed a treble."
        },
        {
            year: "2013–14",
            era: "2010",
            winner: "Real Madrid",
            runner: "Atlético Madrid",
            score: "4–1 after extra time",
            story: "Atlético were seconds from their first European Cup before Sergio Ramos headed in an injury-time equaliser. Madrid then scored three times in extra time, completing La Décima—the club's tenth title."
        },
        {
            year: "2014–15",
            era: "2010",
            winner: "Barcelona",
            runner: "Juventus",
            score: "3–1",
            story: "Barcelona won their second treble under Luis Enrique, defeating Juventus in Berlin. Ivan Rakitić scored early, Luis Suárez restored the lead after Álvaro Morata's equaliser, and Neymar sealed the win late on."
        },
        {
            year: "2015–16",
            era: "2010",
            winner: "Real Madrid",
            runner: "Atlético Madrid",
            score: "1–1; Madrid won 5–3 on penalties",
            story: "Madrid and Atlético met in another tense final, this time in Milan. Sergio Ramos scored, Yannick Carrasco equalised, and Cristiano Ronaldo converted the decisive penalty to give Madrid their eleventh title."
        },
        {
            year: "2016–17",
            era: "2010",
            winner: "Real Madrid",
            runner: "Juventus",
            score: "4–1",
            story: "Madrid became the first team in the Champions League era to retain the title. Cristiano Ronaldo scored twice in Cardiff, while Casemiro and Marco Asensio added goals after Juventus briefly equalised."
        },
        {
            year: "2017–18",
            era: "2010",
            winner: "Real Madrid",
            runner: "Liverpool",
            score: "3–1",
            story: "Gareth Bale's spectacular overhead kick and long-range strike helped Madrid win a third consecutive Champions League. Liverpool were hurt by goalkeeper errors and an early injury to Mohamed Salah."
        },
        {
            year: "2018–19",
            era: "2010",
            winner: "Liverpool",
            runner: "Tottenham Hotspur",
            score: "2–0",
            story: "A penalty inside two minutes gave Liverpool an early lead in Madrid, and Divock Origi scored late to settle the final. Jürgen Klopp's side recovered from a first-leg semi-final defeat to Barcelona and claimed the club's sixth European Cup."
        },

        {
            year: "2019–20",
            era: "2020",
            winner: "Bayern Munich",
            runner: "Paris Saint-Germain",
            score: "1–0",
            story: "The pandemic delayed and reshaped the tournament into a compact knockout event in Lisbon. Kingsley Coman, a former PSG youth player, scored the only goal in the final, and Bayern won every match in the competition that season."
        },
        {
            year: "2020–21",
            era: "2020",
            winner: "Chelsea",
            runner: "Manchester City",
            score: "1–0",
            story: "Kai Havertz scored the winner in Porto after Mason Mount's pass split City's defence. Thomas Tuchel's Chelsea pressed intelligently and defended strongly, denying Pep Guardiola's side its first Champions League title."
        },
        {
            year: "2021–22",
            era: "2020",
            winner: "Real Madrid",
            runner: "Liverpool",
            score: "1–0",
            story: "Vinícius Júnior scored in Paris, while Thibaut Courtois made a series of outstanding saves. Madrid survived sustained Liverpool pressure and won a record-extending fourteenth European Cup."
        },
        {
            year: "2022–23",
            era: "2020",
            winner: "Manchester City",
            runner: "Inter Milan",
            score: "1–0",
            story: "Rodri's second-half strike in Istanbul gave City their first Champions League title. Inter created dangerous chances, but City held on to complete a treble and fulfil a long-standing ambition under Pep Guardiola."
        },
        {
            year: "2023–24",
            era: "2020",
            winner: "Real Madrid",
            runner: "Borussia Dortmund",
            score: "2–0",
            story: "Dortmund started strongly and missed chances, but Madrid remained calm. Dani Carvajal scored from a corner and Vinícius Júnior added a second, giving Madrid their fifteenth European Cup."
        },
        {
            year: "2024–25",
            era: "2020",
            winner: "Paris Saint-Germain",
            runner: "Inter Milan",
            score: "5–0",
            story: "PSG produced a dominant performance in Munich, becoming European champions for the first time. Their pressing, speed and collective movement overwhelmed Inter, and the five-goal margin became the largest winning margin in a European Cup or Champions League final."
        },
        {
            year: "2025–26",
            era: "2020",
            winner: "Paris Saint-Germain",
            runner: "Arsenal",
            score: "1–1; PSG won 4–3 on penalties",
            story: "Arsenal took an early lead through Kai Havertz, but Ousmane Dembélé equalised from the penalty spot. Neither side found a winner in extra time, and PSG held their nerve in the shoot-out in Budapest to become back-to-back Champions League winners."
        }
    ];


    // Build the season cards using safe DOM elements.

    function createSeasonCard(season, index) {

        const card = document.createElement("article");
        card.className = "season-card";
        card.dataset.era = season.era;

        const topline = document.createElement("div");
        topline.className = "season-topline";

        const number = document.createElement("span");
        number.className = "season-number";
        number.textContent = `SEASON ${String(index + 1).padStart(2, "0")}`;

        const year = document.createElement("span");
        year.className = "season-year";
        year.textContent = season.year;

        topline.append(number, year);

        const heading = document.createElement("h3");
        heading.textContent = `${season.winner} lift the trophy`;

        const result = document.createElement("p");
        result.className = "final-result";

        const resultLabel = document.createElement("strong");
        resultLabel.textContent = "Final: ";

        result.append(
            resultLabel,
            document.createTextNode(
                `${season.winner} ${season.score} ${season.runner}`
            )
        );

        const story = document.createElement("p");
        story.className = "season-story";
        story.textContent = season.story;

        const champion = document.createElement("p");
        champion.className = "season-champion";

        const championLabel = document.createElement("span");
        championLabel.textContent = "CHAMPIONS";

        champion.append(
            championLabel,
            document.createTextNode(season.winner)
        );

        card.append(
            topline,
            heading,
            result,
            story,
            champion
        );

        return card;
    }


    // Display all seasons.

    seasons.forEach((season, index) => {
        seasonGrid.appendChild(createSeasonCard(season, index));
    });


    // Filter seasons by era.

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedEra = button.dataset.era;

            filterButtons.forEach((item) => {
                item.classList.toggle("active", item === button);
            });

            document.querySelectorAll(".season-card").forEach((card) => {

                const shouldShow =
                    selectedEra === "all" ||
                    card.dataset.era === selectedEra;

                card.classList.toggle("hidden", !shouldShow);
            });

        });

    });

});
