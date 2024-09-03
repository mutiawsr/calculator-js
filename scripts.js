monitor = document.getElementById("monitor");

function number(num) {
    monitor.textContent += num;
}

function operator(op) {
    monitor.textContent += op;
}

function solve() {
    monitor.textContent = eval(monitor.textContent);
}

function backSpace() {
    monitor.textContent = monitor.textContent.substring(0, monitor.textContent.length - 1);
}

function clearMonitor() {
    monitor.textContent = "";
}