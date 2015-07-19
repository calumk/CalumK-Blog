    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }
    var outputDiv = null;
    function outil(text) { 
        var mypre = document.getElementById(outputDiv); 
        mypre.innerHTML = mypre.innerHTML + text; 
    } 
    $(function() {
        var a = document.getElementsByTagName("python");
      for(i = 0; i < a.length; ++i){
        var prog = a[i].innerHTML;
        outputDiv = $(a[i]).data('output');
        Sk.configure({output:outil, read:builtinRead}); 
        try {
          eval(Sk.importMainWithBody("<stdin>",false,prog)); 
        }
        catch(e) {
           alert(e.toString())
        }
      }
    });