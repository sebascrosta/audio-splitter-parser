function parse(){
    var texto = document.getElementById('textarea1').value.split('\n');

    var arr = createArray(texto);
    showResult(arr);
}

function createArray(text){
    var arr = [];
    for (var i = 0; i < text.length; i++){
        var tiempo = text[i].split(' - ')[0],
            obj = {};

        obj.secs = tiempo.split(':').length == 3 ? 
        parseInt(tiempo.split(':')[0])*3600 + parseInt(tiempo.split(':')[1]) * 60 + parseInt(tiempo.split(':')[2]) :
        parseInt(tiempo.split(':')[0])*60 + parseInt(tiempo.split(':')[1]);

        obj.name = current.split('-').slice(1);

        arr.push(obj);
    }

    return arr;
}

function showResult (arr){
    for(var i = 0; i<arr.length; i++){
        var current = arr[i];
    }
}
