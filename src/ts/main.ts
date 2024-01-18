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

  // get faq element
  const faqEl: HTMLParagraphElement | null = (<HTMLElement>e.target).closest(
    ".card__faq"
  );

  // toggle faq element
  faqEl?.classList.toggle("open");
}
