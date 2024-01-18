import "../css/reset.css";
import "../css/style.css";
import "../css/queries.css";

/////////////////////
// Elements
const faqEls: NodeListOf<HTMLObjectElement> =
  document.querySelectorAll(".card__faq");

console.log(faqEls);

/////////////////////
// Event Listeners
// add click event for each faq element
faqEls.forEach((el) => {
  el.addEventListener("click", handleFAQ);
});

// if key is pressed
document.addEventListener("keydown", (e) => {
  // check if enter is pressed
  if (e.key !== "Enter") return;

  // get focused element
  const focusedEl = document.activeElement;
  console.log(focusedEl);

  // close all faq elements
  faqEls.forEach((el) => el.classList.remove("open"));

  // open focus element
  focusedEl?.classList.add("open");
});

/////////////////////
// Funtions
/**
 * This functions opens or closes the faq answers
 */
function handleFAQ(e: Event) {
  // get question element
  const questionEl: HTMLParagraphElement | null = (<HTMLElement>(
    e.target
  )).closest(".faq__question");

  // check if question was clicked
  if (questionEl === null) return;

  // close all faq elements
  faqEls.forEach((el) => el.classList.remove("open"));

  // get faq element
  const faqEl: HTMLParagraphElement | null = (<HTMLElement>e.target).closest(
    ".card__faq"
  );

  // open faq element
  faqEl?.classList.add("open");
}
