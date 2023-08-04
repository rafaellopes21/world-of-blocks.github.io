function translateTextContent(searchWord, replacementWord) {
    const unwantedTags = ['script', 'link', 'title', 'meta', 'style', 'i'];
    const element = document.querySelector(':not(' + unwantedTags.join(', ') + ')');
    traverseAndReplaceTextNodes(element, searchWord, replacementWord);
}

function traverseAndReplaceTextNodes(node, searchWord, replacementWord) {
    if (node.nodeType === Node.TEXT_NODE) {
        let updatedText = node.textContent.replace(new RegExp(searchWord, 'gi'), replacementWord);
        node.textContent = updatedText;
    } else {
        for (const childNode of node.childNodes) {
            traverseAndReplaceTextNodes(childNode, searchWord, replacementWord);
        }
    }
}

function translateLang(lang){
    PLAYER.setLanguageGame(lang);
    location.reload();
}