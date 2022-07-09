let borderTopLeft = document.getElementById('inputTopLeft');
let borderTopRight = document.getElementById('inputTopRight');
let borderBottomLeft = document.getElementById('inputBottomLeft');
let borderBottomRight = document.getElementById('inputBottomRight');
let inputAll = document.getElementById('inputAll');
let box = document.getElementById('box');

borderTopLeft.addEventListener('keyup', () => {
  let topleft = borderTopLeft.value.toString(10) + 'px';
  box.style.borderTopLeftRadius = topleft;
  inputAll.value = '';
});

borderTopRight.addEventListener('keyup', () => {
  let topRight = borderTopRight.value.toString(10) + 'px';
  box.style.borderTopRightRadius = topRight;
  inputAll.value = '';
});

borderBottomLeft.addEventListener('keyup', () => {
  let botleft = borderBottomLeft.value.toString(10) + 'px';
  box.style.borderBottomLeftRadius = botleft;
  inputAll.value = '';
});

borderBottomRight.addEventListener('keyup', () => {
  let botright = borderBottomRight.value.toString(10) + 'px';
  box.style.borderBottomRightRadius = botright;
  inputAll.value = '';
});

inputAll.addEventListener('keyup', () => {
  let borderAll = inputAll.value.toString(10) + 'px';
  box.style.borderRadius = borderAll;
  borderTopLeft.value = inputAll.value.toString(10);
  borderTopRight.value = inputAll.value.toString(10);
  borderBottomLeft.value = inputAll.value.toString(10);
  borderBottomRight.value = inputAll.value.toString(10);
});