// === HANDLE RADIO BUTTON ===
const radioGroups = {};

document.querySelectorAll('input[type="radio"]').forEach(radio => {
  if (!radioGroups[radio.name]) {
    radioGroups[radio.name] = [];
  }
  radioGroups[radio.name].push(radio);
});

Object.values(radioGroups).forEach(group => {
  if (group.length === 4) {
    group[3].checked = true; // pilih radio ke-4
  } else if (group.length === 2) {
    group[1].checked = true; // pilih radio ke-2
  }
});

// === HANDLE TEXT INPUT ===
document.querySelectorAll('input[type="text"], textarea').forEach(input => {
  input.value = "-";
});
