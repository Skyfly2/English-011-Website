function mouseon(text, head, title) {
    document.getElementById(title).style.display = 'none';
    document.getElementById(text).style.display = 'block';
    document.getElementById(head).style.display = 'block';
}
function mouseoff(text, head, title) {
    document.getElementById(text).style.display = 'none';
    document.getElementById(head).style.display = 'none';
    document.getElementById(title).style.display = 'block';
}