function focusAtEnd(inputElement: HTMLInputElement, e: Event) {
  if (inputElement === document.activeElement) {
    // Don't focus if already focused
    return;
  }
  e.preventDefault();
  inputElement.focus();

  // Set the selection start and end positions to the length of the text,
  // placing the cursor at the end of the text
  const length = inputElement.value.length;
  inputElement.selectionStart = length;
  inputElement.selectionEnd = length;
}

function removeFocus(inputElement: HTMLInputElement) {
  if (inputElement === document.activeElement) {
    inputElement.blur();
  }
}

function getSearchBarEl(hostname: String): HTMLInputElement | null {
  if (hostname.includes("google.com")) {
    let el =
      document.querySelector("#REsRA") || document.querySelector("#APjFqb");
    return el as HTMLInputElement | null;
  }

  return null;
}

let searchEl: HTMLInputElement | null = getSearchBarEl(
  window.location.hostname
);

/* Needed because google's event listener stops propogation */
if (searchEl) {
  console.log("Success");
  searchEl.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Escape":
        /* Ensures that it runs after all event listeners */
        setTimeout(() => {
          removeFocus(searchEl as HTMLInputElement);
        }, 0);
        break;
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (!searchEl) return;

  switch (e.key) {
    case "/":
      focusAtEnd(searchEl, e);
      break;
  }
});

// TODO: google's event listener stops the propogation, you gotta add it manually for each
