const task3Element = document.getElementById('task-3');

function showNothing() {
    alert('Hello there!!!');
}

function outputName(name) {
    alert(name);
}

function print3Strings(s1, s2, s3) {
    alert(`${s1} ${s2} ${s3}`);
}

print3Strings('Hello,', 'my name is', 'Sambaly KOTE');

showNothing();
outputName('Jenkidama');

task3Element.addEventListener('click', showNothing);