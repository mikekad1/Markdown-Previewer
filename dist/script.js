function updatePreview() {
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;     let markedUpHTML = marked(editorValue);
  previewElement.innerHTML = markedUpHTML;
}
function setDefault() {
  let defaultText = `\
# ogpgan Markdown Previewr
## a markdown previewer
[learn more about programming](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
  function exampleOf() {
    return multilineCodeBlock;
  }
\`\`\`

- This
- Is
- An
- Example
- Of
- List
- Items

> This is an example of block items

[![with the help of usefulProgrammer](https://yt3.ggpht.com/ytc/AAUvwnjOFXCG4pCc0D6gOkuaQ3MDohNTQcENwBd_9PdT6w=s900-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/watch?v=SMwgbtCDrLw)

**Bolded text**

  `;
  let editorField = document.getElementById("editor");
  let previewElement = document.getElementById("preview");
  editorField.value = defaultText;
  previewElement.innerHTML = marked(defaultText);
  
}