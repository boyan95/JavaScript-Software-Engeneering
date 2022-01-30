export function renderTemplate(templateAsSting, data) {
  const pattern = /{{(.+?)}}/gm;

  return templateAsSting.replace(pattern, (match, propName) => {
    return data[propName];
  });
}
