(function() {
    var cm = document.getElementById('lava-goo-cm');
    if (cm) {
        var start = null;
        var duration = 4000;
        function animate(ts) {
            if (!start) start = ts;
            var t = Math.min((ts - start) / duration, 1);
            var eased = t * t;
            var contrast = 4 + (28 - 4) * eased;
            var offset = -0.5 + (-12 - (-0.5)) * eased;
            cm.setAttribute('values',
                '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' +
                contrast.toFixed(2) + ' ' + offset.toFixed(2));
            if (t < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }
})();

(function() {
    function updateThemeVars(isLight) {
        var suffix = isLight ? 'light' : 'dark';
        var el = document.documentElement;
        var style = getComputedStyle(el);
        el.style.setProperty('--lava-overlay-color', style.getPropertyValue('--lava-overlay-' + suffix).trim());
        el.style.setProperty('--glass-bg',     'var(--glass-bg-'     + suffix + ')');
        el.style.setProperty('--glass-border', 'var(--glass-border-' + suffix + ')');
        el.style.setProperty('--glass-shadow', 'var(--glass-shadow-' + suffix + ')');
        el.style.setProperty('--bio-text',     'var(--bio-text-'     + suffix + ')');
        el.style.setProperty('--footer-text',  'var(--footer-text-'  + suffix + ')');
        el.style.setProperty('--social-icon',  'var(--social-icon-'  + suffix + ')');
    }

    var toggleBtn = document.getElementById('themeColorButton');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            setTimeout(function() {
                updateThemeVars(localStorage.getItem('isLight') === 'true');
            }, 50);
        });
    }
})();
