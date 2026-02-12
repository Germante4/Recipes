const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

// Atidaryti / uždaryti meniu
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Uždarome meniu paspaudus ant bet kurios nuorodos
document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});

// Uždarome meniu paspaudus už jo ribų
document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove("show");
    }
});

const recipes = {
    kiausiniene: {
        title: "Purios kiaušinienės dubenėlis su feta ir špinatais",
        img: "images/kiausiniene.jpg",
        protein: 28 + " g",
        ingredients: [
            "4 kiaušiniai (L dydžio)",
            "40 g fetos sūrio",
            "1 sauja špinatų",
            "1 v.š. graikiško jogurto",
            "1 v.š. sviesto",
            "½ avokado",
            "Druska, juodieji pipirai",
            "Smulkintos česnako granulės"
        ],
        steps: [
            "Įkaitink keptuvę ant vidutinės ugnies ir sudėk sviestą.",
            "Kiaušinius suplak su jogurtu — tai suteikia purumo.",
            "Įberk šiek tiek druskos, pipirų ir česnako granulių.",
            "Į keptuvę įdėk špinatus ir juos trumpai pašildyk (10 sek.).",
            "Supilk kiaušinių masę ir NEMAIŠYK viso paviršiaus — tik stumdyk.",
            "Kai kiaušiniai dar šiek tiek drėgni, nuimk nuo ugnies.",
            "Uždėk fetos gabalėlius ir leisk jai šiek tiek ištirpti.",
            "Patiek su avokado griežinėliais ir papildomais pipirais."
        ],
        tips: [
            "Jogurtas suteikia purumo ir padidina baltymų kiekį.",
            "Neperkepti — kitaip kiaušinienė taps sausa."
        ]
    },

    omletas: {
        title: "Orkaitėje keptas omletas su burrata ir džiovintais pomidorais",
        img: "images/omletas.jpg",
        protein: 32 + " g",
        ingredients: [
            "3 kiaušiniai",
            "70 ml pieno",
            "1 burrata kamuoliukas",
            "3 džiovinti pomidorai aliejuje",
            "Sauja baby špinatų",
            "1 skiltelė česnako (smulkinta)",
            "Druska, pipirai, žiupsnelis raudonėlio"
        ],
        steps: [
            "Įkaitink orkaitę iki 180 °C.",
            "Į dubenį įmušk kiaušinius, supilk pieną, pagardink druska ir pipirais.",
            "Įmaišyk špinatus ir smulkintus džiovintus pomidorus.",
            "Supilk masę į mažą kepimo formą.",
            "Kepk 18–20 min., kol omletas pakils.",
            "Išėmus uždėk burratą ir pabarstyk raudonėliu.",
            "Leisk burratai šiek tiek ištirpti nuo šilumos.",
            "Patiek su alyvuogių aliejumi nuo pomidorų."
        ],
        tips: [
            "Burrata tirpsta nuo šilumos — nedėk jos į orkaitę.",
            "Puikiai tinka su rukolos salotomis."
        ]
    },

    kesadilija: {
        title: "Kukurūzų tortilijų kesadilija su vištiena ir chimichurri",
        img: "images/kesadilija.jpg",
        protein: 38 + " g",
        ingredients: [
            "2 tortilijos",
            "120 g keptos vištienos",
            "40 g mocarelos",
            "40 g čederio",
            "Chimichurri padažas (parduotuvinis arba naminis)",
            "½ raudonojo svogūno",
            "Citrinos skiltelė"
        ],
        steps: [
            "Vištieną supjaustyk gabaliukais.",
            "Tortiliją patepk plonu sluoksniu chimichurri.",
            "Uždėk vištieną, svogūną, abu sūrius.",
            "Uždėk antrą tortiliją ant viršaus.",
            "Kepk sausoje keptuvėje po 2 min. iš kiekvienos pusės.",
            "Išimk ir supjaustyk trikampiais.",
            "Apšlakstyk citrina — tai pakelia skonį.",
            "Patiek su graikišku jogurtu arba salsa."
        ],
        tips: [
            "Sūrio miksas suteikia stretchy efektą.",
            "Svarbiausia — nekepk ant didelės ugnies, nes sudegs ir neištirps sūris."
        ]
    },

    salotos: {
        title: "Vištienos salotos su mango, kedro riešutais ir jogurto–citrinos padažu",
        img: "images/salotos.jpg",
        protein: 35 + " g",
        ingredients: [
            "150 g keptos vištienos",
            "½ mango",
            "Kedro riešutai (1 v.š.)",
            "Rukola + špinatai",
            "Padažas: graikiškas jogurtas + citrina + medus + garstyčios"
        ],
        steps: [
            "Ant sausos keptuvės paskrudink kedro riešutus.",
            "Vištieną supjaustyk juostelėmis.",
            "Sumaišyk jogurtą, citrinos sultis, medų ir garstyčias.",
            "Į dubenį dėk salotas, mango kubelius, vištieną.",
            "Užpilk padažą ir pabarstyk riešutais.",
            "Lengvai išmaišyk prieš pat patiekiant."
        ],
        tips: [
            "Kedro riešutai suteikia prabangos.",
            "Jei mango kietas — palaikyk kambario temperatūroje 1 dieną."
        ]
    },

    makaronai: {
        title: "Makaronai su krevetėmis, citrina ir česnakiniu sviestu",
        img: "images/makaronai.jpg",
        protein: 34 + " g",
        ingredients: [
            "120 g makaronų (linguine)",
            "150 g krevečių",
            "1 v.š. sviesto + 1 v.š. alyvuogių aliejaus",
            "1 skiltelė česnako",
            "Citrinos žievelė",
            "Parmesanas"
        ],
        steps: [
            "Išvirk makaronus (išsaugok 4 v.š. vandens).",
            "Ant sviesto apkepk česnaką ir krevetes 1 min.",
            "Įpilk makaronų vandens, kad susidarytų padažas.",
            "Įmaišyk makaronus ir citrinos žievelę.",
            "Uždėk parmesano.",
            "Patiek iškart — kitaip krevetės sukietės."
        ],
        tips: [
            "Neperkepk krevečių — 1 min per pusę.",
            "Citrinos žievelė suteikia gaivumo."
        ]
    },

    jautiena: {
        title: "Jautienos steikas su trumų bulvių piure",
        img: "images/jautiena.jpg",
        protein: 42 + " g",
        ingredients: [
            "180 g jautienos nugarinės",
            "2 bulvės",
            "Trumų aliejus (kelis lašai)",
            "Sviestas",
            "Druska, pipirai",
            "Rozmarinas"
        ],
        steps: [
            "Steiką išimk iš šaldytuvo 30 min. prieš kepimą.",
            "Įkaitink keptuvę iki maximum.",
            "Steiką pagardink druska ir pipirais.",
            "Kepk 2–3 min. iš abiejų pusių + sviestas + rozmarinas.",
            "Bulves sutrink su sviestu ir trumų aliejumi.",
            "Patiek su piure ir padažu nuo steiko."
        ],
        tips: [
            "Leisk steikui pailsėti 5 minutes prieš pjaustant.",
            "Nekapkiaušk — maitink sviestu."
        ]
    },

    lazanija: {
        title: "Baltos lazanijos sluoksniai su lašiša ir mascarpone",
        img: "images/lasagna.jpg",
        protein: 39 + " g",
        ingredients: [
            "Lazanijos lakštai",
            "200 g lašišos",
            "Mascarpone",
            "Citrina",
            "Parmesanas"
        ],
        steps: [
            "Sumaišyk mascarpone su citrina ir druska.",
            "Dėk sluoksnius: lakštai, mascarpone, lašiša.",
            "Kepk 190 °C 28–35 min.",
            "Viršų apibarstyk parmesanu ir dar 5 min kepk.",
            "Prieš pjaustant — 10 min palikti."
        ],
        tips: [
            "Citrina subalansuoja riebumą.",
            "Puikiai tinka su rukola + alyvuogių aliejumi."
        ]
    },

    sushi: {
        title: "Sushiai su lašiša, agurku ir kreminiu sūriu",
        img: "images/sushi.jpg",
        protein: 37 + " g",
        ingredients: [
            "200 g virto sushi ryžių",
            "Lašiša (Sushi-grade)",
            "Kremine varškės sūris",
            "Agurkas",
            "Nori"
        ],
        steps: [
            "Paruošk ryžius (plauk + virk + atšaldyk).",
            "Ant nori lakšto dėk ryžius.",
            "Dėk lašišą, agurką ir sūrį.",
            "Susuk ir supjaustyk 2 cm ritinėliais."
        ],
        tips: [
            "Peilį drėkink vandeniu — neplyš.",
            "Nepilk per daug ryžių — sunku susukti."
        ]
    },

    pyragas: {
        title: "Sultingas obuolių pyragas su cinamonu ir migdolais",
        img: "images/pyragas.jpg",
        protein: 8 + " g",
        ingredients: [
            "2 obuoliai",
            "Cinamonas",
            "Migdolų drožlės",
            "Cukrus arba eritritolis",
            "Sviestas"
        ],
        steps: [
            "Išlydyk sviestą.",
            "Sumaišyk obuolius su cinamonu.",
            "Dėk į formą, apibarstyk migdolais.",
            "Kepk 180 °C 22–28 min."
        ],
        tips: [
            "Obuolius galima pakeisti kriaušėmis.",
            "Tinka su ledais."
        ]
    },

    ledai: {
        title: "Jogurtiniai ledai su braškėmis ir pistacijomis",
        img: "images/ledai.jpg",
        protein: 20 + " g",
        ingredients: [
            "Graikiškas jogurtas",
            "Medus",
            "Braškių tyrė",
            "Smulkintos pistacijos"
        ],
        steps: [
            "Sumaišyk jogurtą ir medų.",
            "Įmaišyk braškes.",
            "Uždėk pistacijas.",
            "Užšaldyk 2 valandom."
        ],
        tips: [
            "Jogurtas suteikia daugiau baltymų nei ledai.",
            "Galima berti šokoladą."
        ]
    },
    varske: {
        title: "Grūdėtos varškės kremas su braškėmis",
        img: "images/varske.jpg",
        protein: 28, // g

        ingredients: [
            "200 g grūdėtos varškės",
            "Sauja braškių",
            "1 laimo žievelė ir sultys",
            "Žiupsnelis vanilės",
            "1 v.š. klevų sirupo arba saldiklio"
        ],

        steps: [
            "Į maisto smulkintuvą sudėk grūdėtą varškę ir braškes.",
            "Įtarkuok laimo žievelę ir išspausk laimo sulčių.",
            "Įdėk vanilės, saldiklį ir sutrink iki vientisos, kreminės masės.",
            "Laikant šaldytuve masė bus tiršta kremo konsistencijos, šaldiklyje – ledų tekstūros.",
            "Patiek su mėgstamais priedais: riešutais, džiovintais vaisiais ar šviežiomis uogomis."
        ],

        tips: [
            "Jei nori baltymingesnio varianto – įdėk šaukštą graikiško jogurto.",
            "Tinka ir mėlynės, avietės ar mango gabaliukai."
        ]
    },

    vafliai: {
        title: "Tobuli moliūgų ir rikotos vafliai",
        img: "images/VAfliai.jpg",
        protein: 24,

        ingredients: [
            "200 g moliūgų tyrės (arba trinto banano)",
            "200 g rikotos",
            "2 kiaušiniai",
            "50 g lydyto sviesto",
            "3 v.š. stevijos pagrindo saldiklio",
            "3 v.š. migdolų miltų",
            "3 v.š. avižinių miltų",
            "1 a.š. gysločio luobelių",
            "Žiupsnelis cinamono",
            "Žiupsnelis druskos"
        ],

        steps: [
            "Dubenyje išplak moliūgų tyrę, rikotą, kiaušinius, ištirpintą sviestą ir saldiklį.",
            "Suberk avižinius ir migdolų miltus, gysločio luobelę, cinamoną ir druską.",
            "Išmaišyk iki vientisos masės. Jei tešla per skysta – įberk dar avižinių miltų.",
            "Kepk įkaitintoje vaflinėje, kol apskrus ir taps traškūs.",
            "Patiek su jogurtu, uogomis ar riešutų kremu."
        ],

        tips: [
            "Gali įtarkuoti truputį muskato riešuto – suteiks gylio.",
            "Jei mėgsti saldžiau, įdėk šaukštą klevų sirupo į tešlą."
        ]
    },

    beigelis: {
        title: "Grūdėtos varškės beigeliai",
        img: "images/beigelis.jpg",
        protein: 30,

        ingredients: [
            "250 ml kvietinių miltų (arba GF avižiniai + kukurūzų + migdolų)",
            "2 a.š. kepimo miltelių",
            "3/4 a.š. druskos",
            "300 g grūdėtos varškės",
            "2 a.š. baltų sezamų",
            "1 a.š. juodų sezamų",
            "1/4 a.š. česnako granulių",
            "1/4 a.š. svogūno granulių",
            "1 kiaušinis aptepimui"
        ],

        steps: [
            "Dubenyje sumaišyk miltus, kepimo miltelius ir druską.",
            "Grūdėtą varškę nuspausk per sietelį, kad pasišalintų skystis.",
            "Sumaišyk varškę su miltais ir trumpai paminkyk iki vientisos masės.",
            "Padalink tešlą į 2 dalis, suformuok rutuliukus, paplok ir pirštu padaryk skylutę.",
            "Apmalk su kiaušinio plakiniu ir pabarstyk sezamais bei prieskoniais.",
            "Kepk 180°C orkaitėje ~30 min., kol gražiai apskrus."
        ],

        tips: [
            "Skylutė kepant gali užsidaryti – tiesiog padaryk ją iš naujo.",
            "Tinka valgyti su lašiša, kreminiu sūriu ar avokadu."
        ]
    },

    toast: {
        title: "Plakti kiaušiniai su čili aliejumi",
        img: "images/toast.jpg",
        protein: 18,

        ingredients: [
            "2 kiaušiniai",
            "Druska, pipirai",
            "1 v.š. čili aliejaus (Peanut Rāyu)",
            "1 v.š. sviesto",
            "1 riekė raugo duonos",
            "1/2 avokado",
            "Citrinos sulčių"
        ],

        steps: [
            "Išplak kiaušinius su druska ir pipirais.",
            "Keptuvėje įkaitink čili aliejų ir sviestą ant minimalios kaitros.",
            "Supilk kiaušinius ir lėtai maišyk, kol pradės tirštėti.",
            "Labai svarbu neperkepti – nukelk nuo kaitros, kai kiaušiniai dar kreminiai.",
            "Duoną apskrudink, avokadą sutrink su citrina, druska ir pipirais.",
            "Uždėk avokadą, plaktus kiaušinius, šlakelį čili aliejaus ir žalumynų."
        ],

        tips: [
            "Kremiškesni kiaušiniai gaunasi naudojant labai žemą kaitrą.",
            "Jei mėgsti aštriau – įdėk papildomai čili dribsnių."
        ]
    },

    dribsniai: {
        title: "Naminiai pūstų ryžių pusryčių dribsniai",
        img: "images/dribsniai.jpg",
        protein: 6,

        ingredients: [
            "150 g pūstų rudųjų ryžių",
            "4 v.š. kokosų aliejaus",
            "4 v.š. medaus",
            "1 a.š. cinamono",
            "2 v.š. kakavos miltelių"
        ],

        steps: [
            "Kokosų aliejų sumaišyk su medumi ir išlydyk.",
            "Supilk į dubenį su ryžiais ir įberk cinamono.",
            "Pusę masės paskleisk skardoje, į kitą pusę įmaišyk kakavą ir taip pat paskleisk.",
            "Kepk 160°C temperatūroje apie 12 min., kartais pamaišant.",
            "Leisk visiškai atvėsti ir laikyk sandariame inde iki 2 savaičių."
        ],

        tips: [
            "Jei neturi pūstų ryžių – sutrink rudųjų ryžių trapučius.",
            "Skonis tobulas su mėlynuoju M pienu."
        ]
    },

    sumustiniai: {
        title: "Karšti sumuštiniai su pievagrybiais",
        img: "images/sumustiniai.jpg",
        protein: 20,

        ingredients: [
            "5 pievagrybiai",
            "200 g virtos daktariškos dešros",
            "Alyvuogių aliejus",
            "120 g sūrio",
            "Sauja krapų",
            "Druska, pipirai",
            "1/4 a.š. česnako miltelių",
            "1 v.š. majonezo",
            "1 v.š. pomidorų padažo",
            "1/2 a.š. dižono garstyčių",
            "6 riekės skrudinimo duonos"
        ],

        steps: [
            "Pievagrybius ir dešrą supjaustyk kubeliais.",
            "Įkaitink keptuvę su aliejumi ir apkepk pievagrybius ~5 min.",
            "Sudėk dešrą ir kepk dar kelias minutes, kol apskrus.",
            "Sumaišyk su sūriu, majonezu, pomidorų padažu, garstyčiomis ir prieskoniais.",
            "Užtepk ant duonos ir kepk 180°C ~10 min., kol sūris išsilydys."
        ],

        tips: [
            "Dar skaniau su rūkyta paprika.",
            "Gali dėti ir keptų svogūnų arba jalapeno."
        ]
    },
    kose: {
        title: "Citrininė „naktinė“ avižinė košė su šaldytomis uogomis",
        img: "images/kose.jpg",

        ingredients: [
            "100 g avižinių dribsnių (paprastų)",
            "100 ml migdolinio augalinio gėrimo",
            "100 ml kokosų pieno (18–20%)",
            "3 šaukštai citrinų sulčių",
            "2 šaukštai klevų sirupo",
            "1 arbatinis šaukštelis citrinos žievelės",
            "1 arbatinis šaukštelis vanilės ekstrakto",
            "Žiupsnelis druskos",

            "Įdarui:",
            "200 g šaldytų uogų",
            "1 šaukštas chia sėklų",
            "1 šaukštas klevų sirupo",

            "Patiekiant:",
            "Augalinė jogurto alternatyva (mangų skonio)"
        ],

        steps: [
            "Dubenyje sumaišykite avižas, migdolinį gėrimą, kokosų pieną, citrinų sultis, žievelę, klevų sirupą, vanilę ir druską.",
            "Uždenkite ir palikite bent 2 val. kambario temperatūroje arba per naktį šaldytuve.",
            "Uogoms: šaldytas uogas su klevų sirupu kaitinkite iki užvirimo, pavirkite 5–7 min.",
            "Nukėlus nuo ugnies įmaišykite chia sėklas ir atvėsinkite.",
            "Patiekdami sluoksniuokite košę ir uogų pagardą, papuoškite jogurtu."
        ],

        tips: [
            "Avižas galima mirkyti ir 24 val. – taps dar kremiškesnės.",
            "Uogų pagardą galima laikyti šaldytuve iki savaitės.",
            "Jei norisi saldžiau – įdėkite papildomo klevų sirupo."
        ]
    },
    tunas: {
        title: "Tuno salotos su avokado padažu – be majonezo",
        img: "images/tunas.jpg",

        ingredients: [
            "1 didelis sunokęs avokadas",
            "60 g kreminio sūrio",
            "0.5 arbatinio šaukštelio saldžiosios paprikos",
            "0.5 arbatinio šaukštelio itališkų žolelių",
            "Juodieji pipirai pagal skonį",

            "Salotoms:",
            "200 g tuno savo sultyse",
            "150 g vyšninių pomidorų",
            "1 mažas raudonasis svogūnas",
            "3 mažyčiai marinuoti agurkai"
        ],

        steps: [
            "Avokadą perpjaukite, išimkite kaulą ir išskobkite minkštimą.",
            "Sutrinkite jį su kreminiu sūriu, paprika, itališkomis žolelėmis ir pipirais.",
            "Agurkus ir svogūną supjaustykite kubeliais, pomidorus – puselėmis.",
            "Sumaišykite daržoves su tunu ir avokado padažu.",
            "Patiekite su duona arba kaip pagrindines salotas."
        ],

        tips: [
            "Padažą galite naudoti ir kaip užtepėlę skrebučiams.",
            "Tinka papildyti šviežiais žalumynais arba kukurūzais.",
            "Jei norisi skystesnio padažo – įpilkite truputį citrinos sulčių."
        ]
    },
    varskeciai: {
        title: "Tobulai purūs ir minkšti varškėčiai",
        img: "images/varskeciai.jpg",

        ingredients: [
            "360 g varškės (9%)",
            "2 kiaušiniai",
            "3 šaukštai miltų",
            "2 kupini šaukštai kreminio sūrio",
            "1.5 šaukšto cukraus",
            "1 arbatinis šaukštelis vanilės esencijos",

            "Kepimui:",
            "2 šaukštai rapsų aliejaus"
        ],

        steps: [
            "Varškę pertrinkite per sietelį.",
            "Įmuškite kiaušinius, dėkite kreminį sūrį, vanilę, cukrų ir miltus. Išmaišykite.",
            "Įkaitinkite keptuvę su aliejumi.",
            "Drėgnomis rankomis formuokite storus varškėčius.",
            "Kepkite 12–14 min., apversdami kas ~3 minutes.",
            "Patiekite su mėgstamais priedais."
        ],

        tips: [
            "Kuo mažiau miltų – tuo purūs varškėčiai.",
            "Masė turi būti lipni – taip jie iškepa minkšti.",
            "Skanu su uogomis, graikišku jogurtu ar medumi."
        ]
    }

};



// Funkcija modal atidarymui
function openModal(recipeId) {
    const recipe = recipes[recipeId];

    document.getElementById("modalTitle").innerText = recipe.title;
    document.getElementById("modalImage").src = recipe.img;
    document.getElementById("modalIngredients").innerHTML =
        recipe.ingredients.map(i => `<li>${i}</li>`).join("");
    document.getElementById("modalSteps").innerHTML =
        recipe.steps.map(s => `<li>${s}</li>`).join("");
    document.getElementById("modalTips").innerHTML =
        recipe.tips.map(t => `<li>${t}</li>`).join("");

    document.getElementById("recipeModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
}

// uždaryti paspaudus ant fono
window.onclick = function (event) {
    const modal = document.getElementById("recipeModal");
    if (event.target === modal) {
        closeModal();
    }
};
/* =========================================
   SETTINGS (theme + headings) + FORM VALIDATION
========================================= */

// --- Helpers ---
function isValidEmail(email) {
  // paprastas ir saugus el. pašto tikrinimas
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
}

function setHeadingColor(color) {
  document.documentElement.style.setProperty("--heading-color", color);
}

function applySettings(settings) {
  // tema
  document.body.classList.toggle("theme-dark", settings.theme === "dark");

  // h2 dydis (klasės)
  document.body.classList.remove("hsize-sm", "hsize-md", "hsize-lg");
  document.body.classList.add(`hsize-${settings.headingSize}`);

  // spalva
  setHeadingColor(settings.headingColor);
}

function loadSettings() {
  const raw = localStorage.getItem("site_settings");
  if (!raw) {
    return { theme: "light", headingColor: "#d81cbf", headingSize: "md" };
  }
  try {
    const s = JSON.parse(raw);
    return {
      theme: s.theme || "light",
      headingColor: s.headingColor || "#d81cbf",
      headingSize: s.headingSize || "md",
    };
  } catch {
    return { theme: "light", headingColor: "#d81cbf", headingSize: "md" };
  }
}

function saveSettings(settings) {
  localStorage.setItem("site_settings", JSON.stringify(settings));
}

// --- Apply settings on every page load ---
const currentSettings = loadSettings();
applySettings(currentSettings);

// --- Settings page controls (only if exists on page) ---
const settingsForm = document.getElementById("settingsForm");
if (settingsForm) {
  const themeSelect = document.getElementById("themeSelect");
  const headingColor = document.getElementById("headingColor");
  const headingSize = document.getElementById("headingSize");
  const saveBtn = document.getElementById("saveSettingsBtn");
  const resetBtn = document.getElementById("resetSettingsBtn");

  // užpildom esamas reikšmes
  themeSelect.value = currentSettings.theme;
  headingColor.value = currentSettings.headingColor;
  headingSize.value = currentSettings.headingSize;

  // live preview
  [themeSelect, headingColor, headingSize].forEach(el => {
    el.addEventListener("input", () => {
      applySettings({
        theme: themeSelect.value,
        headingColor: headingColor.value,
        headingSize: headingSize.value,
      });
    });
  });

  saveBtn.addEventListener("click", () => {
    const newSettings = {
      theme: themeSelect.value,
      headingColor: headingColor.value,
      headingSize: headingSize.value,
    };
    saveSettings(newSettings);
    alert("Nustatymai išsaugoti ✅");
  });

  resetBtn.addEventListener("click", () => {
    const defaults = { theme: "light", headingColor: "#d81cbf", headingSize: "md" };
    saveSettings(defaults);
    applySettings(defaults);

    themeSelect.value = defaults.theme;
    headingColor.value = defaults.headingColor;
    headingSize.value = defaults.headingSize;

    alert("Nustatymai atstatyti į numatytuosius ✅");
  });
}

// --- CONTACT FORM validation + alert (kontaktai.html) ---
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  const nameInput = document.getElementById("vardas");
  const emailInput = document.getElementById("email");
  const temaSelect = document.getElementById("tema");
  const msgTextarea = document.getElementById("zinute");

  contactForm.addEventListener("submit", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const tema = temaSelect.value;
    const msg = msgTextarea.value.trim();
    const wantsNews = contactForm.querySelector('input[name="naujienos"]').checked;

    // Validavimas
    if (name.length < 2) {
      alert("Įveskite vardą (bent 2 simboliai).");
      nameInput.focus();
      return;
    }

    if (!isValidEmail(email)) {
      alert("Įveskite teisingą el. pašto adresą.");
      emailInput.focus();
      return;
    }

    if (msg.length < 10) {
      alert("Žinutė per trumpa (bent 10 simbolių).");
      msgTextarea.focus();
      return;
    }

    // Sėkmė: išvedam duomenis
    alert(
      "Forma užpildyta sėkmingai ✅\n\n" +
      `Vardas: ${name}\n` +
      `El. paštas: ${email}\n` +
      `Tema: ${tema}\n` +
      `Naujienlaiškis: ${wantsNews ? "Taip" : "Ne"}\n\n` +
      `Žinutė:\n${msg}`
    );

    // išvalom formą
    contactForm.reset();
  });
}

// --- NEWSLETTER validation + alert (sidebar) ---
// veikia visuose puslapiuose, kur yra .newsletter
document.querySelectorAll(".newsletter").forEach((box, idx) => {
  const input = box.querySelector('input[type="email"]');
  const btn = box.querySelector("button");

  if (!input || !btn) return;

  btn.addEventListener("click", () => {
    const email = input.value.trim();

    if (!isValidEmail(email)) {
      alert("Įveskite teisingą el. pašto adresą (naujienlaiškiui).");
      input.focus();
      return;
    }

    alert(`Sėkmingai užsiprenumeravote naujienlaiškį ✅\nEl. paštas: ${email}`);
    input.value = "";
  });
});
