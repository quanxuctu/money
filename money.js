function tinh() {
let vnd = parseInt(document.getElementById('vnd').value);
let usd = parseInt(document.getElementById('usd').value);
let so = parseInt(document.getElementById('so').value);
let out = (so*vnd)/usd;
document.getElementById('ketqua').value=out;
}