console.log("JavaScript Connected");

var htmlQuestions = [
  {
    num: 1,
    question: "HTML ka full form kya hai?",
    Option: {
      a: "Hyper Text Markup Language",
      b: "High Text Machine Language",
      c: "Hyper Tabular Markup Language",
      d: "None of these"
    },
    answer: "Hyper Text Markup Language"
  },
  {
    num: 2,
    question: "HTML file ka extension kya hota hai?",
    Option: {
      a: ".html",
      b: ".ht",
      c: ".hml",
      d: ".htx"
    },
    answer: ".html"
  },
  {
    num: 3,
    question: "<br> tag kis ke liye use hota hai?",
    Option: {
      a: "Bold text",
      b: "New line",
      c: "Paragraph",
      d: "Break page"
    },
    answer: "New line"
  },
  {
    num: 4,
    question: "HTML mai image show karne ke liye kaunsa tag use hota hai?",
    Option: {
      a: "<image>",
      b: "<img>",
      c: "<pic>",
      d: "<src>"
    },
    answer: "<img>"
  },
  {
    num: 5,
    question: "HTML mai link create karne ke liye kaunsa tag use hota hai?",
    Option: {
      a: "<a>",
      b: "<link>",
      c: "<href>",
      d: "<src>"
    },
    answer: "<a>"
  },
  {
    num: 6,
    question: "HTML mai table row ke liye kaunsa tag use hota hai?",
    Option: {
      a: "<td>",
      b: "<th>",
      c: "<tr>",
      d: "<table>"
    },
    answer: "<tr>"
  },
  {
    num: 7,
    question: "HTML mai unordered list ke liye kaunsa tag use hota hai?",
    Option: {
      a: "<ul>",
      b: "<ol>",
      c: "<li>",
      d: "<list>"
    },
    answer: "<ul>"
  },
  {
    num: 8,
    question: "HTML mai form submit karne ke liye kaunsa tag use hota hai?",
    Option: {
      a: "<button>",
      b: "<submit>",
      c: "<input type='submit'>",
      d: "<form>"
    },
    answer: "<input type='submit'>"
  },
  {
    num: 9,
    question: "HTML mai heading tag ka range kya hai?",
    Option: {
      a: "h1 to h3",
      b: "h1 to h5",
      c: "h1 to h6",
      d: "h1 to h4"
    },
    answer: "h1 to h6"
  },
  {
    num: 10,
    question: "HTML mai comment likhne ka sahi syntax kya hai?",
    Option: {
      a: "// comment",
      b: "/* comment */",
      c: "<!-- comment -->",
      d: "# comment"
    },
    answer: "<!-- comment -->"
  }
];

// css question 
var cssQuestions = [
  {
    num: 1,
    question: "CSS ka full form kya hai?",
    Option: {
      a: "Cascading Style Sheets",
      b: "Colorful Style Sheets",
      c: "Computer Style Sheets",
      d: "Creative Style Sheets"
    },
    answer: "Cascading Style Sheets"
  },
  {
    num: 2,
    question: "CSS file ka extension kya hota hai?",
    Option: {
      a: ".css",
      b: ".style",
      c: ".scss",
      d: ".sheet"
    },
    answer: ".css"
  },
  {
    num: 3,
    question: "CSS mai background color set karne ka property kaunsa hai?",
    Option: {
      a: "color",
      b: "background-color",
      c: "bgcolor",
      d: "background"
    },
    answer: "background-color"
  },
  {
    num: 4,
    question: "Text ko center align karne ke liye kaunsi property use hoti hai?",
    Option: {
      a: "text-decoration",
      b: "text-align",
      c: "align-text",
      d: "text-style"
    },
    answer: "text-align"
  },
  {
    num: 5,
    question: "CSS mai id selector likhne ka sahi tareeqa kya hai?",
    Option: {
      a: ".idname",
      b: "#idname",
      c: "idname",
      d: "@idname"
    },
    answer: "#idname"
  },
  {
    num: 6,
    question: "Padding aur Margin mai kya difference hai?",
    Option: {
      a: "No difference",
      b: "Padding andar space deta hai, Margin bahar",
      c: "Margin andar space deta hai, Padding bahar",
      d: "Both same"
    },
    answer: "Padding andar space deta hai, Margin bahar"
  },
  {
    num: 7,
    question: "Border ko round karne ke liye kaunsi property use hoti hai?",
    Option: {
      a: "border-radius",
      b: "border-style",
      c: "border-shape",
      d: "border-round"
    },
    answer: "border-radius"
  },
  {
    num: 8,
    question: "Font-size set karne ke liye property kaunsi hai?",
    Option: {
      a: "font",
      b: "font-size",
      c: "text-size",
      d: "size"
    },
    answer: "font-size"
  },
  {
    num: 9,
    question: "Hover effect kis symbol se likhte hain?",
    Option: {
      a: "::",
      b: ":",
      c: "=>",
      d: ">"
    },
    answer: ":"
  },
  {
    num: 10,
    question: "Display property mai 'block' ka kya matlab hai?",
    Option: {
      a: "Element inline show hota hai",
      b: "Element full width leta hai",
      c: "Element hidden hota hai",
      d: "Element transparent hota hai"
    },
    answer: "Element full width leta hai"
  }
];

// js question 

var jsQuestions = [
  {
    num: 1,
    question: "JavaScript kis type ki language hai?",
    Option: {
      a: "Programming",
      b: "Scripting",
      c: "Markup",
      d: "Style"
    },
    answer: "Scripting"
  },
  {
    num: 2,
    question: "JavaScript file ka extension kya hota hai?",
    Option: {
      a: ".js",
      b: ".javascript",
      c: ".jsc",
      d: ".jsx"
    },
    answer: ".js"
  },
  {
    num: 3,
    question: "Output browser console mai dikhane ke liye function kaunsa hai?",
    Option: {
      a: "print()",
      b: "console.log()",
      c: "display()",
      d: "write()"
    },
    answer: "console.log()"
  },
  {
    num: 4,
    question: "JavaScript mai variable declare karne ke liye kaunsa keyword use hota hai?",
    Option: {
      a: "var",
      b: "int",
      c: "string",
      d: "declare"
    },
    answer: "var"
  },
  {
    num: 5,
    question: "JavaScript mai array banane ka sahi syntax kya hai?",
    Option: {
      a: "var arr = {};",
      b: "var arr = [];",
      c: "var arr = ();",
      d: "var arr = <>;"
    },
    answer: "var arr = [];"
  },
  {
    num: 6,
    question: "JavaScript mai condition check karne ke liye kaunsa statement use hota hai?",
    Option: {
      a: "if",
      b: "check",
      c: "when",
      d: "condition"
    },
    answer: "if"
  },
  {
    num: 7,
    question: "Array ke end mai element add karne ke liye kaunsa method use hota hai?",
    Option: {
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()"
    },
    answer: "push()"
  },
  {
    num: 8,
    question: "JavaScript mai function define karne ka sahi syntax kya hai?",
    Option: {
      a: "function = myFunc()",
      b: "function myFunc() {}",
      c: "create function myFunc()",
      d: "def myFunc()"
    },
    answer: "function myFunc() {}"
  },
  {
    num: 9,
    question: "JavaScript mai === operator kya check karta hai?",
    Option: {
      a: "Only value",
      b: "Only type",
      c: "Value and type dono",
      d: "None"
    },
    answer: "Value and type dono"
  },
  {
    num: 10,
    question: "JavaScript mai DOM ka full form kya hai?",
    Option: {
      a: "Document Object Model",
      b: "Data Object Model",
      c: "Digital Object Model",
      d: "Document Oriented Method"
    },
    answer: "Document Object Model"
  }
];
