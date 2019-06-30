AFRAME.registerComponent('markerhandler', {
    init: function () {
        var marker = this.el;
        var panel_group = document.querySelector("#panel-group");
        panel_group.object3D.position.z += 0.45;
        console.log('Initialising');
        marker.addEventListener('markerFound', function () {
            console.log('Marker Found');
            panel_group.emit('beginAnimation');
            document.querySelector("#medicine-video").play();
        });
        marker.addEventListener('markerLost', function () {
            console.log('Marker Lost');
            document.querySelector("#medicine-video").pause();
        });
    }
});

/*
AFRAME.registerComponent('group-opacity', {
    tick: function (t) {
        var opacity = (1 - Math.sin(t / 1000)) * 0.5;
        this.el.object3D.traverse(function (o) {
            if (o.material) {
                o.material.opacity = opacity;
            }
        });
    }
});  */
/*
AFRAME.registerComponent('buttonhandler', {
    init: function () {
        var test_button = this.el;
        test_button.addEventListener('click', function (ev, target) {
            console.log("clicked GUI");
        });
    }
}); */
/*
window.buttonActionFunction = function () {
    console.log("clicked GUI");
} */
