<html>
    <head>
        <script src="assets/js/jquery-2.1.0.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
        <link rel="stylesheet/less" type="text/css" href="assets/css/style.less">
        <script src="assets/js/less.js" type="text/javascript"></script>
        <script src="assets/js/script.js" type="text/javascript"></script>
        
        <script src="assets/js/xml2json.js" type="text/javascript"></script>
        <script src="assets/js/json2xml.js" type="text/javascript"></script>
        
    </head>
    <body>
        <div id="menu">
            <input id="gravity" type="button" onclick="shift_blocks_down()" value="click for gravity!">
                <br><br>
                <select id="select_blockColor">
                    <option value="yellow">yellow</option>
                    <option value="orange">orange</option>
                    <option value="red">red</option>
                    <option value="purple">purple</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
                <select id="select_blockType">
                    <option value="cube">cube</option>
                    <option value="cuboid">cuboid</option>
                    <option value="pillar">pillar</option>
                    <option value="bridge">bridge</option>
                    <option value="arch">arch</option>
                    <option value="window">window</option>
                </select>
                <select id="select_blockOrientation">
                    <option value="h">h</option>
                    <option value="v">v</option>
                </select>
                <input type="button" onclick="addBlock()" value="addBlock()">
                <br><br>
                <input type="text" disabled="disabled" id="selected_textbox">
                <input type="button" onclick="deleteBlock()" value="deleteBlock()">
                <br><br>
                <input type="button" onclick="buildGrid()" value="RebuildGrid()">
                <br><br>
                <input id="hmb" type="button" onclick="toggleHCM();" value="Turn Hardcore Mode Off">
                <br><Br>
              
                <input type="file" id="fileInput" name="files[]" /><br>
                <input type="button" onclick="saveBlocks()" value="Save">

        </div>

      <div id="container">
      </div>
    </body>
</html>