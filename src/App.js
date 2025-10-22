import "./styles.css";
import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("sk"); // default Slovak first
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  // --------- QUESTIONS (SK) ----------
  const questionsSK = [
    {
      text: "Akého recruitera by ste naozaj uprednostnili?",
      options: [
        "Niekoho, kto vie pracovať so systémami (ATS), písať pútavé posty na LinkedIne a dohovorí sa po anglicky.",
        "Človeka s vyše dekádou skúseností v komunikácii, akvizíciách a vedení biznisu, s výbornou angličtinou (C1) a IT zázemím z vlastných projektov — ktorý sa rád doučí aj ATS a HR nástroje.",
        "Niekoho s praxou priamo v recruitingu; jazyky, komunikácia a IT sú len milý bonus."
      ],
      correct:
        "Človeka s vyše dekádou skúseností v komunikácii, akvizíciách a vedení biznisu, s výbornou angličtinou (C1) a IT zázemím z vlastných projektov — ktorý sa rád doučí aj ATS a HR nástroje."
    },
    {
      text:
        "Ako vnímate prácu recruitera v online prostredí a mieru samostatnosti – teraz aj do budúcna?",
      options: [
        "Recruiter, ktorý je zvyknutý pracovať samostatne, vie si riadiť čas a priority a má za sebou roky skúseností s online spoluprácou.",
        "Recruiterovi je to v zásade jedno – prispôsobí sa, či už ide o remote, hybrid alebo kanceláriu.",
        "Každý sa to naučí – dôležité sú iné veci než režim práce."
      ],
      correct:
        "Recruiter, ktorý je zvyknutý pracovať samostatne, vie si riadiť čas a priority a má za sebou roky skúseností s online spoluprácou."
    },
    {
      text:
        "Ako vnímate výborné jazykové znalosti u kandidáta na recruitera?",
      options: [
        "Milý bonus, ale rozhodujúca je prax, znalosť recruiterskej terminológie a zabehnuté procesy.",
        "Aj keby bola angličtina slabšia, nevadí – v tejto práci to nie je až také podstatné.",
        "Vášeň pre jazyky a schopnosť plynulo komunikovať – aj ak si niektoré HR pojmy ešte potrebuje doučiť – berieme ako veľké plus."
      ],
      correct:
        "Vášeň pre jazyky a schopnosť plynulo komunikovať – aj ak si niektoré HR pojmy ešte potrebuje doučiť – berieme ako veľké plus."
    },
    {
      text:
        "Čo považujete za dôležitejšie pri hodnotení recruitera v IT oblasti?",
      options: [
        "Schopnosť rozumieť základom technológií a komunikovať s developermi zrozumiteľne, aj keď nie je primárne programátor.",
        "Roky praxe v recruitingu – technické veci sa dajú vždy vysvetliť.",
        "Hlavne, aby vedel spracovať CV a naplánovať pohovory, technické detaily nech rieši tím."
      ],
      correct:
        "Schopnosť rozumieť základom technológií a komunikovať s developermi zrozumiteľne, aj keď nie je primárne programátor."
    },
    {
      text:
        "Čo podľa vás najviac odlišuje dobrého recruitera od priemerného?",
      options: [
        "Úprimný záujem o ľudí, kultúru a kvalitu komunikácie (aj v rôznych jazykoch), dôraz na kvalitné obsadenie pozície – nie len na kvóty a rýchle výsledky.",
        "Vysoké čísla – počet oslovení, rozhovorov a uzavretých nástupov hovoria za všetko.",
        "Dobré vzťahy s hiring manažérmi – kandidáti prídu aj sami, keď je tím spokojný."
      ],
      correct:
        "Úprimný záujem o ľudí, kultúru a kvalitu komunikácie (aj v rôznych jazykoch), dôraz na kvalitné obsadenie pozície – nie len na kvóty a rýchle výsledky."
    }
  ];

  // --------- QUESTIONS (EN) ----------
  const questionsEN = [
    {
      text: "Which recruiter profile would you truly prefer?",
      options: [
        "Someone who can operate ATS, write catchy LinkedIn posts and handle English fine.",
        "A person with 10+ years of people/business communication and client acquisition, excellent English (C1) and IT background from own projects — happy to pick up ATS/HR tools quickly.",
        "Someone with direct recruiting tenure; languages, communication and IT are a nice add-on."
      ],
      correct:
        "A person with 10+ years of people/business communication and client acquisition, excellent English (C1) and IT background from own projects — happy to pick up ATS/HR tools quickly."
    },
    {
      text:
        "How do you view online work and autonomy for a recruiter — now and going forward?",
      options: [
        "Used to working independently, managing time and priorities; years of remote collaboration experience.",
        "Flexible — remote, hybrid or office, whatever the team needs.",
        "Everyone can learn it — other things matter more than the work mode."
      ],
      correct:
        "Used to working independently, managing time and priorities; years of remote collaboration experience."
    },
    {
      text: "How important are strong language skills for a recruiter?",
      options: [
        "A nice bonus, but practice, terminology and established processes decide.",
        "Even if English is relatively weak, it’s not that crucial here.",
        "A passion for languages and fluent communication — even if some HR terms need to be learned — is a big plus."
      ],
      correct:
        "A passion for languages and fluent communication — even if some HR terms need to be learned — is a big plus."
    },
    {
      text:
        "What matters more when evaluating an IT recruiter?",
      options: [
        "Ability to understand tech basics and talk to developers clearly, even if not primarily a programmer.",
        "Years in recruiting — tech can always be explained.",
        "Mainly processing CVs and scheduling interviews; the team handles tech details."
      ],
      correct:
        "Ability to understand tech basics and talk to developers clearly, even if not primarily a programmer."
    },
    {
      text:
        "What most distinguishes a strong recruiter from an average one?",
      options: [
        "Genuine interest in people, culture and communication quality (in multiple languages), with focus on quality hires — not just quotas and speed.",
        "Big numbers — outreach, interviews and hires tell the story.",
        "Good relationships with hiring managers — candidates will come when the team is happy."
      ],
      correct:
        "Genuine interest in people, culture and communication quality (in multiple languages), with focus on quality hires — not just quotas and speed."
    }
  ];

  const active = lang === "sk" ? questionsSK : questionsEN;

  const onSelect = (opt) => {
    const isCorrect = opt === active[current].correct;
    if (isCorrect) setScore((s) => s + 1);
    setSelected(opt);

    // advance after short delay for visual feedback
    setTimeout(() => {
      if (current === active.length - 1) {
        setFinished(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 150);
  };

  if (finished) {
    const perfect = score === active.length;
    const mid = score >= Math.ceil(active.length * 0.6);

    const msgSK = perfect
      ? "✅ Super! Pravdepodobne si rozumieme — poďme sa spojiť."
      : mid
      ? "📅 Vyzerá to nádejne — stačil by online call."
      : "ℹ️ Máme viac možností, rád doplním kontext a detaily.";

    const msgEN = perfect
      ? "✅ Great! Looks like we’re aligned — let’s talk."
      : mid
      ? "📅 Promising — a quick online call could do."
      : "ℹ️ There’s room to align — happy to share more context.";

    return (
      <div className="App">
        <div className="final-screen">
          <h2>{lang === "sk" ? "🎯 Kvíz dokončený!" : "🎯 Quiz complete!"}</h2>
          <p className="score-line">
            {lang === "sk" ? (
              <>
                Zhodli sme sa v <b>{score}</b> z <b>{active.length}</b> otázok.
              </>
            ) : (
              <>
                We aligned on <b>{score}</b> out of <b>{active.length}</b>{" "}
                questions.
              </>
            )}
          </p>
          <p className="final-message">{lang === "sk" ? msgSK : msgEN}</p>
          <button
            onClick={() => {
              setFinished(false);
              setScore(0);
              setCurrent(0);
              setSelected(null);
            }}
          >
            {lang === "sk" ? "🔄 Spustiť znova" : "🔄 Restart quiz"}
          </button>
        </div>

        <p className="thank-you">
          {lang === "sk"
            ? "Ďakujem za váš čas 😊"
            : "Thank you for taking the quiz 😊"}
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* language switch */}
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <button onClick={() => setLang("sk")} disabled={lang === "sk"}>
          🇸🇰 Slovensky
        </button>
        <button onClick={() => setLang("en")} disabled={lang === "en"}>
          English 🇬🇧
        </button>
      </div>

      <h2>{active[current].text}</h2>

      <ul>
        {active[current].options.map((opt, i) => (
          <li
            key={i}
            className={`answer-option ${
              selected === opt
                ? opt === active[current].correct
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => {
            if (current > 0) {
              setCurrent((c) => c - 1);
              setSelected(null);
            }
          }}
          disabled={current === 0}
        >
          ⬅️ {lang === "sk" ? "Predchádzajúca" : "Previous"}
        </button>

        <button
          onClick={() => {
            if (current < active.length - 1) {
              setCurrent((c) => c + 1);
              setSelected(null);
            }
          }}
          disabled={current === active.length - 1}
        >
          {lang === "sk" ? "Ďalšia" : "Next"} ➡️
        </button>
      </div>
    </div>
  );
}
