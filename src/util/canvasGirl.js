export default function () {
    var head = document.getElementsByTagName('HEAD')[0];
    var style = document.createElement('link');
    style.href = 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    head.appendChild(style);
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js'
    document.body.appendChild(s)
}