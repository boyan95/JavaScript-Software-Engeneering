function edit(element, match, replacer){

    const text = element.textContent;
    const matcher = RegExp(match, "g")
    element.textContent = text.replace(matcher, replacer);        
}
