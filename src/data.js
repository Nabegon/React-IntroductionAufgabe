export const exercises = [
    {
      id: 0, //use in JSX as key
      title: "Get started with React",
      subtitle: "",
      source: {
        name: "beta.react.js",
        source: "https://beta.reactjs.org/learn/installation",
      },
      subtasks: [
        {
          id: 0, //use in JSX as key
          title: "Get the project",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content: "Download and install the latest node LTS from",
            },
            {
              id: 1,
              type: "url",
              content: "https://nodejs.org/en/",
              name: "node.js",
            },
            {
              id: 2,
              type: "text",
              content: "Next, please clone the GitLab repo:",
            },
            { id: 3, type: "git-clone", content: "https://gitlab.hsrw.eu/lv-mkg/exercises/app-mkg.git" },
            {
              id: 4,
              type: "text",
              content: "Now, navigate to the project folder typing",
            },
            { id: 5, type: "code", content: "cd app-mkg" },
            {
              id: 6,
              type: "text",
              content: "and install the node-modules",
            },
            { id: 7, type: "code", content: "install npm" },
            {
              id: 8,
              type: "text",
              content: "Next please, start the development build to see the exercises typing",
            },
            { id: 9, type: "code", content: "npm start" }
          ],
        },
      ],
    },
    {
      id: 1, //use in JSX as key
      title: "Introduction to MKG",
      subtitle: "",
      source: {
        name: "",
        source: "",
      },
      subtasks: [
        {
          id: 0, //use in JSX as key
          title: "Design, Konzepte...",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Wir leben in einer Zeit in der es bereits zahlreiche Webseiten, Apps, Konzepte, Logos und Entwürfe gibt. Trotzdem werden immer wieder neue Framewokrs, Apps oder andere mediale Produkte auf den Markt gebracht.",
            },
            {
              id: 1,
              type: "text",
              content:
                "Teilen Sie sich in zwei ungefähr gleich große Gruppen auf. Recherchieren Sie unabhängig voneinander innovative Markteinführungen, die nicht älter als 7 Jahre sind. Entscheiden Sie sich als Gruppe für ein digitales Produkt (App, Software-System), das sich Ihrer meiner Meinung nach von anderen Produkten abhebt.",
            },
            {
              id: 2,
              type: "text",
              content:
                "In der Übung sollen jeweils beide Gruppen Ihr Prdoukt vorstellen und die Einzigartikeit Ihrer Wahl sachlich begründen. Mögliche Argumente können in der Nützlichkeit oder der Verbreitung des Produkts liegen.",
            },
          ],
        },
        {
          id: 1, //use in JSX as key
          title: "WunschApp",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Diskutieren Sie innerhalb Ihrer Gruppe eine Anwendung von der Sie sich vorstellen können, dass Sie diese konzipieren, entwickeln und auch vermarkten wollen würden.",
            },
            {
              id: 1,
              type: "text",
              content:
                "Hierbei sollten Sie eine rudimentäre Bedarfsanalyse - definieren Sie Ihre Zielsetzung und Zielgruppe - durchführen. Welche Gründe sprechen für das Vorhaben und rechtfertigen den Aufwand?",
            },
            {
              id: 2,
              type: "text",
              content:
                "Sie können in derselben Gruppenaufteilung wie für Aufgabe 1a) arbeiten  oder Sie gruppieren sich für diese Aufgabenstellung neu. Beachten Sie, dass Sie langfristig eine feste Gruppenaufteilung benötigen werden. Sie werden die Projektarbeiten in der gleichen Aufteilung durchführen.",
            }
          ],
        },
        {
          id: 2, //use in JSX as key
          title: "Zielgruppenanalyse",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Erstellen Sie einen Fragebogen für die Zielgruppenanalyse aus dem Konzeptionsprozess der vorherigen Aufgabe. Der Fragebogen sollte insgesamt 10 Fragen beinhalten, die Sie jeweils den Teilgruppen der Zielgruppe zuordnen. Begründen Sie auch die Wahl Ihrer Fragestellung.",
            },
          ],
        },
        {
          id: 3, //use in JSX as key
          title: "Bedarfsanalyse",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Verwenden Sie Ihren Fragebogen, um die andere Gruppe als Testgruppe für Ihre Analysephase zu verwenden. Wie schätzen Sie Ihr Vorhaben nach Ihrer Auswertung ein?",
            },
          ],
        }
      ],
    },
    {
      id: 2, //use in JSX as key
      title: "Introduction to the Adobe Creative Cloud",
      subtitle:
        "2-weeks for discussion and preparation (with support in PC-Pool~1)",
      source: {
        name: "X",
        source: "https",
      },
      subtasks: [
        {
          id: 0, //use in JSX as key
          title: "Adobe Illustrator - Learning by Doing*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Erstellen Sie mit AI eine Illustration/Ablaufgrafik zu einem der foglenden Themen:",
            },
            {
              id: 1,
              type: "list",
              content: [
                "http-request",
                "Ablauf einer Turingmaschine",
                "Interpreter vs. Compiler",
                "Freies Thema"
              ],
            },
            {
              id: 2,
              type: "text",
              content:
                "indem Sie den Prozess bzw. Sachverhalt bildlich erklären. Hierbei können Sie sich an dem Beispiel aus der Vorlesung oder den folgenden Illustrationen",
            },
            {
              id: 3,
              type: "code",
              content: "Nebenläufigkeit am Beispiel Browser",
            },
            {
              id: 4,
              type: "img",
              content: "..//assets/browser_overview_02.png",
              alt: "Concurrency-Browser",
            },
            {
              id: 5,
              type: "text",
              content:
                "orientieren. Arbeiten Sie dabei mit den in der Übung vorgestellten Werkzeugen und Tutorialmaterial.",
            },
            {
              id: 6,
              type: "text",
              content:
                "Beachten Sie bei der Umsetzung der Grafik und der einzelnen Bestandteile folgende grundlegende Gestaltgesetze:",
            },
            {
              id: 7,
              type: "list",
              content: [
                "Ähnlichkeit: Ähnlichkeiten deuten Zusammengehörigkeit an (z.B. die Farbe Blau repräsentiert das WWW.)",
                "Nähe: Objekte, die in Verbindung stehen, werden nah zueinander platziert (z.B. Tabs sind unter dem Symbol für das WWW abgebildet.)",
                "Prägnanz: Abhebung eines einzelnen Objekts; kann Aufmerksamkeit implizieren.",
                "Geschlossenheit: Mehrere Elemente werden als Einheit wahrgenommen (z.B. Gruppe Tabs).",
                "Kontinuität: Linien oder Kurven werden durch unsere Informationsverarbeitung fortgesetzt.",
                "Gemeinsame Region/Ausrichtung: Elemente in einer Region werden als Gruppe klassifiziert bzw. mehrere unterschiedliche Elemente, welche die gleiche"+
                " Richtung annehmen, werden ebenfalls als zusammengehörig wahrgenommen (z.B. Gruppe Tabs Richtung Browser-Symbol.).",
                "Verbundene Elemente: Verbundene Elemente werden als Einheit aufgefasst (z.B. Icon aus Mauszeiger und Hand).",
              ],
            },
            {
              id: 8,
              type: "code",
              content: "Beispiel Gestaltgesetz: Nähe schafft Informationskontext",
            },
            { id: 9, type: "img", content: "../assets/gg_example.png", alt: "" },
          ],
        },
        {
          id: 1, //use in JSX as key
          title: "Typografie",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Wählen Sie geeignete Schriften für Ihre Illustration oder Ihr Logo aus. Wie begründen Sie die Verwendung Ihrer Auswahl? Orientieren Sie sich hier z.B. an",
            },
            { id: 1, type: "code", content: "Buch: Schrifttypen – Verstehen Kombinieren: Schriftmischung als Reiz in der Typografie, Philipp Stamm, Berlin, Boston: Birkhäuser, 2020. https://doi-org.ezproxy2.hsrw.eu/10.1515/9783035609011" },
            {
              id: 2,
              type: "text",
              content:
                'Wir betrachten einen Mix aus verschiedenen Schriften an der aktuellen Darstellung in "Exercise 0". Welche Unterschiede, die Ihnen nun aus der Vorlesung bekannt sind, fallen Ihnen auf?',
            }
          
          ],
        },
        {
          id: 2, //use in JSX as key
          title: "Adobe Illustrator - Logo Entwicklung*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Orientieren Sie sich an der Logo-Entwicklung aus der Vorlesung bzw. Übung, um ein Logo (Farbe, Form) für Ihre WunschApp anzufertigen.",
            },
            { id: 1, type: "img-small", content: "../assets/logo.svg", alt: "" },
          ],
        },
        {
          id: 3, //use in JSX as key
          title: "Adobe Illustrator (or alternatives) - Infinity sign* (Deadline: 5th June)",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Create an infinity sign, such that one part is in the background. See example below:",
            },
            { id: 1, type: "img", content: "../assets/infinity.png", alt: "" },
            {
              id: 2,
              type: "text",
              content:
                "Please submit the vector-file.",
            },
          ],
        },
      ],
    },
    {
      id: 3, //use in JSX as key
      title: "Design via Prototyping",
      subtitle:
        "Deadline 21th May (with support in PC-Pool~1)",
      source: {
        name: "X",
        source: "https",
      },
      subtasks: [
        {
          id: 0, //use in JSX as key
          title: "Get started I",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                'Choose one Design-Tool (Adobe Xd, Figma) and walk throught the "Get started".',
            },
            {
              id: 1,
              type: "text",
              content:
                "In case you are working on a game, work with a corresponding engine or tool.",
            }
          ],
        },
        {
          id: 1, //use in JSX as key
          title: "Get started II*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content: 'Workout a "first" Design-Version of your project and take care of:',
            },
            {
              id: 1,
              type: "list",
              content: [
                "Aim",
                "User-Stories",
                "Information-Design",
                "Navigation",
                "Characters/Game-Story",
              ],
            },     
            {
              id: 2,
              type: "text",
              content:
                'To get the "*" you need to investigate some effort into your chosen tool. Please send me the link (via Moodle-Submission) of your rudimentary design-version until 21th May.',
            }
          ],
        },
        {
          id: 2, //use in JSX as key
          title: "Prototyping Transfer*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content: 'How to import an Adobe Xd Prototype into Figma? Create a simple example of a design including prototyping in Adobe Xd and transfer it to Figma incl. all your prototype links. You can demonstrate this in the exercises to get the (*).',
            }
          ],
        }
      ],
    },
    {
      id: 4, //use in JSX as key
      title: "Introduction to React",
      subtitle:
        "Deadline is 5th June: discussion and preparation (with support in PC-Pool~1)",
      source: {
        name: "X",
        source: "https",
      },
      subtasks: [
        {
          id: 0, //use in JSX as key
          title: "Add a component (recommended)*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Add a Checkbox to visualize if you have already done an exercise. This boxes should be placed next to each subtask and as a user you should be able to use them: once checked, this should be visibile if you restart your page. In addition, if all subtasks of an exercise are checked as solved, a checkmark should appear next to the exercise-header:",
            },
            { id: 1, type: "img", content: "../assets/addCheckbox.png", alt: "" },
            {
              id: 2,
              type: "text",
              content:
                "Since all new pull-request will update the data.js file (you will pull for new exercises each week): How does these git-requests will effect your local version?",
            },
            {
              id: 3,
              type: "text",
              content:
                "At the beginning, work with",
            },
            {
              id: 4,
              type: "code",
              content:
                "localStorage",
            },
            {
              id: 5,
              type: "text",
              content:
                'to let your ExerciseApp remember the Checkbox states. What about writing the changes directly to the "data.js" with JavaScript?',
            }
          ],
        },
        {
          id: 1, //use in JSX as key
          title: "Add Usabilty - solving this task may take some time**",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Inserting a new task directly from the source code can be cumbersome. Add a button to the interface",
            },
            { id: 1, type: "code", content: "Add new Task" },
            {
              id: 2,
              type: "text",
              content:
                'which offers the user the interface that provides the following functions: "Enter and save a new task in the data set". A click on this button links to a form that enables the creation of new tasks.',
            },
            {
              id: 3,
              type: "text",
              content:
                'HINT: to export content into files you should consider: https://www.npmjs.com/package/fs-browsers or consider the first option of the next subtask.',
            },
            {
              id: 4,
              type: "text",
              content:
                "Note, the form-elements should fit to the data structure of the ExerciseApp. Therefore, you have to consider the data-structure in file",
            },
            {
              id: 5,
              type: "code",
              content:
                "data.js",
            },
            {
              id: 6,
              type: "code",
              content:
                "which is readable by this small App and given by the following picture:",
            },
            {
              id: 7,
              type: "img",
              content: "../assets/datastructure.png",
              alt: "",
            },
            {
              id: 8,
              type: "text",
              content: "For the subtasks, your formular needs to differentiate between the following content-types:",
            },
            {
              id: 9,
              type: "list",
              content: ['text','url','img','code'],
            },
            {
              id: 10,
              type: "text",
              content: "Recommended: First, you should create the requirements (user stories) for the Add New Exercise page. Then develope a prototype (user guidance and layout). After these steps you should start developing the site including its functionalities.",
            }
          ],
        },
        {
          id: 2, //use in JSX as key
          title:
            "Mock Data, API Mocking*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "In early stage of your project, you need to define and structure your data.",
            },
            {
              id: 1,
              type: "text",
              content:
                "In case you do not have a real-data set, you need to work with so called Mock Data and there exist several ways to set up your data.",
            },
            {
              id: 2,
              type: "text",
              content:
                "Provide your data in one of the following ways or start a research on your own:",
            },
            {
              id: 3,
              type: "list",
              content:["Create a server which simulates some API (usually a placeholder for backend database)","Fake-Api such as the REST Mock-Data Demo","json-server"],
            }
          ],
        },
        {
          id: 3, //use in JSX as key
          title:
            "next.js**",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Get started with next.js. You can create your own inital app or rework the ExerciseApp.",
            },
            {
              id: 1,
              type: "url",
              content: "https://nextjs.org/",
              name: "next.js",
            },
            {
              id: 2,
              type: "text",
              content:
                'Hint: try to understand the terminology and file conventions; explained here:',
            },
            {
              id: 3,
              type: "url",
              content: "https://nextjs.org/docs/app/building-your-application/routing",
              name: "important stuff to know",
            },
          ],
        },
        {
          id: 4, //use in JSX as key
          title:
            "Restyle your ExerciseApp*",
          done: false, // flag: did I solve it already?
          content: [
            {
              id: 0,
              type: "text",
              content:
                "Play around with styled-components to change the styles of the different react components.",
            },
            {
              id: 1,
              type: "text",
              content:
                "In case you rework the UI based on some arguments wrt. UX and create a complete new Layout, this subtask counts**",
            }
          ],
        },
      ],
    }
  ];
  
  