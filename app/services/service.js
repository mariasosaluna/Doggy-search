export const getData = async (param) => {
  try {
    const data = await fetch(`https://doggy-server.onrender.com/${param}`);
    const dataToJson = await data.json();
    return dataToJson;
  } catch (error) {
    return TemplateError(error);
  }
}

const TemplateError = (error) => `<div>${error}</div>`