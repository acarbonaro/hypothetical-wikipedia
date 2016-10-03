/***
 * Content script for Hypothetical Wikipedia
 */
;(function() {
  console.log("You're hypothetically visiting " + document.title);

  // Get all the content on the page
  var pageContent = document.getElementById("mw-content-text");

  // Debug
  var shortVerbs = [""]
  console.log(shortVerbs);

  // Get the individual paragraph tags that make up the content
  var paragraphs = [];
  pageContent.childNodes.forEach(function (node) {
    switch (node.nodeName) {
      case "P":
        paragraphs.push(node);
        break;
    }
  });

  console.log(paragraphs);

  paragraphs.forEach(function (paragraph, index, paragraphs) {
    // console.log(paragraph.innerHTML);
    var individualWords = paragraph.innerHTML.split(" ");

    // List of words to append "hypothetically" after instead of before
    var after = ["is"];

    // Loop through the individual words checking lazily for verbs
    individualWords.forEach(function (word, index, words) {
      if (verbs.indexOf(word) >= 0) {
        if (after.indexOf(word) >= 0) {
          words[index] = word + " hypothetically";
        } else {
          words[index] = "hypothetically " + word;
        }
      }
    });

    paragraph.innerHTML = individualWords.join(" ");
    pageContent.replaceChild(paragraphs[index], paragraph);
  });
})();
