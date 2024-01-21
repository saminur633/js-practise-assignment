// check whether the given file name is a javascript file or not
function isJavaScriptFile(fileName) {
    return fileName.toLowerCase().endsWith('.js');
}


const fileName = 'javascript.js'; 
if (isJavaScriptFile(fileName)) {
    console.log('The file is a JavaScript file.');
} else {
    console.log('The file is not a JavaScript file.');
}
