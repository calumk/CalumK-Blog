var resolution = 35;  //7, 14 , 35, 70
var gridArray = ''
var hardcoreMode = true

$(function() {
    //add some blocks
    //now do other stuff
    gridArray = createArray($('#container').width()/resolution , $('#container').height()/resolution)
    buildGrid();
    shift_blocks_down();
    setInterval(function(){ list_crashes() },1000);
    
    var fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', function(e) {
      handleFileSelect(e);
    });
    
});

var selectedBlock = '';
$(document).mouseup(function(event) {
    var clickedElement = event.target;
    if (clickedElement.id.indexOf("blk") >= 0){
        selectedBlock = clickedElement.id;
        $("#selected_textbox").val(selectedBlock);
    }

});



function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}


var jsonIn = {}


function handleFileSelect(evt) {
    jsonIn = {};
  var files = evt.target.files; // FileList object
  for (var i = 0, f; f = files[i]; i++) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var fileXML = reader.result;
        parser=new DOMParser(); xmlDoc=parser.parseFromString(fileXML,"text/xml")
        jsonIn = $.parseJSON(xml2json(xmlDoc,""));
        $.each(jsonIn["blocks"]["block"], function(i, el){
                addBlockSpecific(el.color,el.type,el.x,el.y)
        });
    }
    reader.readAsText(f,"UTF-8");
  }
}



function loadBlocks(){
    $( ".ui-widget-content" ).each(function( index ) {
        var block = this.id;
        $( "#"+block ).remove();
    });
    jsonIn ={}
    $.get('blocks.xml', function(xml){
        console.log(xml)
        jsonIn = $.parseJSON(xml2json(xml,""))
        $.each(jsonIn["blocks"]["block"], function(i, el){
            addBlockSpecific(el.color,el.type,el.x,el.y)
        });
    });
}
var jsonOut = {};
function saveBlocks(){
    jsonOut = {};
    jsonOut.blocks = {};
    jsonOut.blocks.block = []
    $( ".ui-widget-content" ).each(function() {
        var block2 = this.id;
        var classes = $("#"+block2).attr('class').split(" ");
        
        var foundcolor = "";
        var foundtype = "";
        $.each(classes, function(i, el){
            if( el.indexOf("color") >= 0){
                foundcolor = el;
            }
            if( el.indexOf("blockType") >= 0){
                foundtype = el;
            }
        });
        jsonOut.blocks.block.push({
            id:    block2,
            color: foundcolor,
            type:  foundtype,
            x:     $('#'+block2).offset().left/resolution,
            y:     $('#'+block2).offset().top/resolution
        })
    });
    console.log(json2xml(jsonOut,""))
    download('blocks.xml', json2xml(jsonOut,""));
}


function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
}

function collision($div1, $div2) {
      var x1 = $('#'+$div1).offset().left +1;
      var y1 = $('#'+$div1).offset().top + 1;
      var h1 = $('#'+$div1).outerHeight(true) -2;
      var w1 = $('#'+$div1).outerWidth(true) -2;
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $('#'+$div2).offset().left + 1;
      var y2 = $('#'+$div2).offset().top + 1;
      var h2 = $('#'+$div2).outerHeight(true) -2;
      var w2 = $('#'+$div2).outerWidth(true) -2;
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
}

function occupy($div1, gridX,gridY) {
      var x1 = $('#'+$div1).offset().left +1;
      var y1 = $('#'+$div1).offset().top + 1;
      var h1 = $('#'+$div1).outerHeight(true) -2;
      var w1 = $('#'+$div1).outerWidth(true) -2;
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = gridX*resolution;
      var y2 = gridY*resolution;
      var h2 = resolution;
      var w2 = resolution
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
}


















function buildGrid(){
    //console.log(":Starting 0's:");
    for (var i=0;i<($('#container').width()/resolution);i++){
        for (var j=0;j<($('#container').height()/resolution);j++){
             gridArray[i][j] = "0";
        }
    }
    //console.log(":Starting X's:");
    $( ".ui-widget-content" ).each(function() {
        
        var block = this.id;
        for (var i=0;i<($('#container').width()/resolution);i++){
            for (var j=0;j<($('#container').height()/resolution);j++){
                if(occupy(block,i,j)){
                   gridArray[i][j] = "X";
                }
            }
        }
    });
    //console.log(":Finished Playing 0's & X's:");
}



var singleLineArray = []
function shift_blocks_down() {
    var shiftedAnything = false
    $( ".ui-widget-content" ).each(function( index ) {
        var block = this.id;
        var x1 = $('#'+block).offset().left/resolution;
        var y1 = $('#'+block).offset().top/resolution;
        var h1 = $('#'+block).outerHeight(true)/resolution;
        var w1 = $('#'+block).outerWidth(true)/resolution;
        var zeroBelow = true;
        var edgesMode = true;
        
        singleLineArray = []
        for (var i=x1;i<x1+w1;i++){
            if ((typeof gridArray[i][y1+h1] == 'undefined') || (gridArray[i][y1+h1] == 'X')){
                zeroBelow = false;
                singleLineArray.push("X")
            }else{
                singleLineArray.push("0")
            }
        }
        if (hardcoreMode) {
            if ($('#'+block).hasClass("arch_h")) {
                var first = singleLineArray.slice(0, 2);
                var second = singleLineArray.slice(6);
            }else if($('#'+block).hasClass("bridge_h")){
                var first = singleLineArray.slice(0, 1);
                var second = singleLineArray.slice(3);
            }else{
                var indexToSplit = singleLineArray.length/2;
                var first = singleLineArray.slice(0, indexToSplit);
                var second = singleLineArray.slice(indexToSplit);
            }
            var firstX = 0;
            $.each(first, function(i, el){
                if (el == "X") { firstX++ }
            });
            var secondX = 0;
            $.each(second, function(i, el){
                if (el == "X") { secondX++ }
            });
            var fall = false
            if (secondX == 0) {fall = true}
            if (firstX == 0) {fall = true}
            if ((fall == true) && (typeof gridArray[i][y1+h1] != 'undefined')) {zeroBelow = true}
        }

        if (zeroBelow == true) {
            shiftedAnything = true
            $('#'+block).css({
                    top: $('#'+block).offset().top + resolution + "px"
            });
            for (var i=x1;i<x1+w1;i++){
                    gridArray[i][y1] = "0";
                    gridArray[i][y1+h1] = "X";
            }
        }else{
        }
    });
    if (shiftedAnything) {
        setTimeout(function(){ shift_blocks_down() },50);
    }
}

function list_crashes() {
    var collides = [];
    $( ".ui-widget-content" ).each(function() {
        var block = this.id;
        $( ".ui-widget-content" ).each(function() {
            var block2 = this.id;
            if (block != block2) {
                if (collision(block,block2) ) {
                    collides.push(block);
                    collides.push(block2);
                }
            }
        });
    });
    var uniqueCollides = [];
    $.each(collides, function(i, el){
        if($.inArray(el, uniqueCollides) === -1) uniqueCollides.push(el);
    });
    $( ".ui-widget-content" ).each(function() {
        var block = this.id;
        if($.inArray(block, uniqueCollides) >= 0){
            $('#'+block).fadeTo("fast",0.5);
        }else{
            $('#'+block).fadeTo("fast",1);
        }
    });
}












//                _     _       __  _____                                 ____  _            _        
//       /\      | |   | |     / / |  __ \                               |  _ \| |          | |       
//      /  \   __| | __| |    / /  | |__) |___ _ __ ___   _____   _____  | |_) | | ___   ___| | _____ 
//     / /\ \ / _` |/ _` |   / /   |  _  // _ \ '_ ` _ \ / _ \ \ / / _ \ |  _ <| |/ _ \ / __| |/ / __|
//    / ____ \ (_| | (_| |  / /    | | \ \  __/ | | | | | (_) \ V /  __/ | |_) | | (_) | (__|   <\__ \
//   /_/    \_\__,_|\__,_| /_/     |_|  \_\___|_| |_| |_|\___/ \_/ \___| |____/|_|\___/ \___|_|\_\___/
//                                                                                                    
// 


var new_id = 1;
function addBlock(){
    $( "#container" ).append( '<div id="blk_'+new_id+'" class="color_'+ $( "#select_blockColor" ).val() +' blockType_'+ $( "#select_blockType" ).val() +'_'+ $( "#select_blockOrientation" ).val() +' border ui-widget-content"></div>' );
    $( "#blk_"+new_id).draggable({
        grid: [ resolution, resolution ],
        stop:function(){
            if (resolution >= 35) {
                buildGrid();
            }
        } 
    });
new_id++
}
function addBlockSpecific(colour,blktype,x,y){
    $( "#container" ).append( '<div id="blk_'+new_id+'" class="'+ colour +' '+ blktype +' border ui-widget-content"></div>' );
    $("#blk_"+new_id).css({
                    top: y*resolution + "px",
                    left: x*resolution + "px"
    });
    $( "#blk_"+new_id).draggable({
        grid: [ resolution, resolution ],
        stop:function(){
            if (resolution >= 35) {
                buildGrid();
            }
        } 
    });
    if (resolution >= 35) {
        buildGrid();
    }
new_id++
}


function deleteBlock(){
    var id = Math.floor((Math.random()*100)+7)
    $( "#"+selectedBlock ).remove();
    $( "#selected_textbox").val("");
    buildGrid();
}

function toggleHCM(){
    if (!hardcoreMode) {
        hardcoreMode = true;
        $('#hmb').val("Turn Hardcore Mode Off");
    }else{
        hardcoreMode = false;
        $('#hmb').val("Turn Hardcore Mode On");
    }
    
}


function addAFew(){
    addBlockCustom("red","cube_h")
    addBlockCustom("orange","cube_h")
    addBlockCustom("purple","window_h")
    addBlockCustom("blue","cuboid_v")
    addBlockCustom("yellow","arch_h")
    addBlockCustom("green","bridge_h")
}
