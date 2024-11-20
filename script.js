document.getElementById('meuBotao').addEventListener('click', function(){
    var div = document.querySelector('.ceu');
    div.style.backgroundColor = '#013750';
    div.style.transition = '2s';
  
    var div2 = document.querySelector('.canva');
    div2.style.backgroundColor = '#013750';
    div2.style.transition = '2s';

    var sol = document.querySelector('.lua');
    sol.style.backgroundColor = '#dfe2e1';
    sol.style.transition = '2s';

    var body = document.querySelector('body');
    body.style.backgroundColor = '#013750'
    body.style.transition = '2s';

    var n = document.querySelectorAll('.nuvem');
    n.forEach(function(nuvem) {
      nuvem.style.backgroundColor = '#969998'; 
      nuvem.style.transition = '2s';


    });


    var w = document.querySelectorAll('.window');
    w.forEach(function(window) {
      window.style.backgroundColor = '#f4dd51'; 
      window.style.transition = '2s';


    });
  
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
      item.style.backgroundColor = '#464b42'; 
      item.style.transition = '2s';


    });
    
  });

  document.getElementById('meuBotao2').addEventListener('click', function(){
    var div = document.querySelector('.ceu');
    div.style.backgroundColor = 'lightskyblue';
    div.style.transition = '2s';
  
    var div2 = document.querySelector('.canva');
    div2.style.backgroundColor = 'lightskyblue';
    div2.style.transition = '2s';

    var sol = document.querySelector('.lua');
    sol.style.backgroundColor = 'yellow';
    sol.style.transition = '2s';

    var body = document.querySelector('body');
    body.style.backgroundColor = 'lightskyblue'
    body.style.transition = '2s';

    var n = document.querySelectorAll('.nuvem');
    n.forEach(function(nuvem) {
      nuvem.style.backgroundColor = 'white'; 
      nuvem.style.transition = '2s';


    });

    var w = document.querySelectorAll('.window');
    w.forEach(function(window) {
      window.style.backgroundColor = '#d9ffff'; 
      window.style.transition = '2s';


    });
  
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
      item.style.backgroundColor = '#c9c9c8'; 
      item.style.transition = '2s';
    });
  });
