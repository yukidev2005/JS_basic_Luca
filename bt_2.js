const validNumberArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) return false;
  }
  return true;
};

const calcTotal = (arr) => {
  if (!validNumberArr(arr)) {
    console.log('Mảng không hợp lệ (có chứa ký tự không phải số)');
    return 0;
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const yukiFindIndex = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
};

const coreArr = (arr) => {
  if (!validNumberArr(arr)) {
    console.log('Mảng không hợp lệ (có chứa ký tự không phải số)');
    return 0;
  }

  const total = [];
  for (let i = 0; i < arr.length; i++) {
    total.push(arr[i] * 2);
  }
  return total;
};

const averageArr = (arr) => {
  if (!validNumberArr(arr) || arr.length === 0) {
    console.log('Mảng không hợp lệ (có chứa ký tự không phải số)');
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
