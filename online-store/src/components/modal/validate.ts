export function createValidator (id: string, regExp: string, labelText: string, numberParent = 1) {
  return function (): void {
    const tel = document.getElementById(id);
    if (tel instanceof HTMLInputElement) {
      if (tel.value.match(regExp) !== null) {
        tel.setCustomValidity('');
        const lab = document.getElementById(id + 'Error');
        if (lab !== null) {
          lab.remove();
        }
      } else {
        tel.setCustomValidity('error');
        if (document.getElementById(id + 'Error') === null) {
          let parent: HTMLElement | null = null;
          for (let i = 0; i < numberParent; i++) {
            if (parent === null) {
              parent = tel.parentElement;
            } else {
              parent = parent.parentElement;
            }
          }
          parent?.append(createLabelError(id, labelText));
        }
        if (tel.oninput === null) {
          tel.oninput = createValidator(id, regExp, labelText, numberParent);
        }
      }
    }
  };
}

function createLabelError (idFor: string, labelText: string): HTMLElement {
  const lab = document.createElement('label');
  lab.id = idFor + 'Error';
  lab.htmlFor = idFor;
  lab.innerHTML = labelText;
  return lab;
}
