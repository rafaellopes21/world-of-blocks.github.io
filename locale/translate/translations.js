function translateTextContent(searchWord, replacementWord) {
    const unwantedTags = ['script', 'link', 'title', 'meta', 'style'];
    Array.from(document.querySelectorAll('*')).forEach(element => {
        if(element.tagName && !unwantedTags.includes(element.tagName.toLowerCase())){
            traverseAndReplaceTextNodes(element, searchWord, replacementWord);
        }
    });
}

function traverseAndReplaceTextNodes(node, searchWord, replacementWord) {
    if (node.nodeType === Node.TEXT_NODE) {
        let updatedText = node.textContent.replace(new RegExp(searchWord, 'gi'), replacementWord);
        node.textContent = updatedText;
    } else {
        node.childNodes.forEach(childNode => {
            traverseAndReplaceTextNodes(childNode, searchWord, replacementWord);
        });
    }
}

function translateLang(lang){
    PLAYER.setLanguageGame(lang);
    location.reload();
}