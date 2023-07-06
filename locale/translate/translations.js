function translateTextContent(searchWord, replacementWord) {
    Array.from(document.querySelectorAll('*')).forEach(element => {
        traverseAndReplaceTextNodes(element, searchWord, replacementWord);
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