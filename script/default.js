const UI = {
    setFontsize: function(size) {
        document.getElementById('result-sizes').innerHTML = ''
            + '<span>' + size + 'px</span><strong>'
            + parseInt(size/16*1000)/1000 + 'rem</strong><span>'
            + size*0.75 + ' points</span>';
    }
};