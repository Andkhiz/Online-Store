export function createValidator (id: string, regExp: string) {
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
          tel.parentElement?.append(createLabelError(id));
        }
        if (tel.oninput === null) {
          tel.oninput = createValidator(id, regExp);
        }
      }
    }
  };
}

function createLabelError (idFor: string): HTMLElement {
  const lab = document.createElement('label');
  lab.id = idFor + 'Error';
  lab.htmlFor = idFor;
  lab.innerHTML = 'Error';
  return lab;
}
