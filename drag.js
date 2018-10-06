function ready(callback) {
    // in case the document is already rendered
    if (document.readyState !== 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') callback();
        });
}

ready(function () {
    var dragobject = {
        z: 0, x: 0, y: 0, offsetx: null, offsety: null, targetobj: null, dragapproved: 0,
        initialize: function (e) {
            document.onmousedown = this.drag;
            document.onmouseup = function () {
                this.dragapproved = 0
            };

            var elements = document.getElementsByClassName('drag'),
                arr = Array.prototype.slice.call(elements);

            arr.forEach(function (value) {
                var parent = value.parentNode;

                value.style.left = getRandomArbitrary(0, parent.clientWidth - 200) + "px";
                value.style.top = getRandomArbitrary(0, parent.clientHeight - 250) + "px";
            })
        },
        drag: function (e) {
            var evtobj = window.event ? window.event : e;
            this.targetobj = window.event ? event.srcElement : e.target;
            if (this.targetobj.className === "drag") {
                this.dragapproved = 1;
                if (isNaN(parseInt(this.targetobj.style.left))) {
                    this.targetobj.style.left = 0
                }
                if (isNaN(parseInt(this.targetobj.style.top))) {
                    this.targetobj.style.top = 0
                }
                this.offsetx = parseInt(this.targetobj.style.left);
                this.offsety = parseInt(this.targetobj.style.top);
                this.x = evtobj.clientX;
                this.y = evtobj.clientY;
                if (evtobj.preventDefault)
                    evtobj.preventDefault();
                document.onmousemove = dragobject.moveit
            }
        },
        moveit: function (e) {
            var evtobj = window.event ? window.event : e;
            if (!!this.dragapproved) {
                this.targetobj.style.left = this.offsetx + evtobj.clientX - this.x + "px";
                this.targetobj.style.top = this.offsety + evtobj.clientY - this.y + "px";
                return false
            }
        }
    };
    dragobject.initialize();

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
});
