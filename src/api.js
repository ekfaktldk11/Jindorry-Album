import { baseURL } from './static.js';

export const getImg = async (yearMonth) => {
  try {
    const response = await fetch(baseURL + `img?yy=${yearMonth.yy}&&mm=${yearMonth.mm}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('GET request failed');
  } catch (err) {
    alert(err);
  }
};

export const deleteImg = async (yy, mm, fileName) => {
  try {
    const response = await fetch(baseURL + 'img', {
      method: 'DELETE',
      headers: {
        yy: yy,
        mm: mm,
        file: fileName,
      },
    });
    if (response.ok) {
      return true;
    }
    throw new Error('DELETE request failed');
  } catch (err) {
    alert(err);
  }
  return false;
};
