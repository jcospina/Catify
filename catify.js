
function catify() {
    var container = document.body;
    var cat = document.createElement('img');
    cat.classList.add('draggable');
    cat.src = 'https://im-01.gifer.com/2ull.gif';
    cat.alt = 'dancing cat';
    cat.style.position = 'absolute';
    cat.style.zIndex = '99';
    var availW = container.offsetWidth;
    var availH = container.offsetHeight;
    cat.style.left = Math.round(Math.random() * availW) + 'px';;
    cat.style.top = Math.round(Math.random() * availH) + 'px';
    cat.addEventListener('dblclick', () => {
        document.body.removeChild(cat);
    });
    document.body.appendChild(cat);
}



// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,
        // call this function on every dragmove event
        onmove: dragMoveListener,
    });

function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

catify();
