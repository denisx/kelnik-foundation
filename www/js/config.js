require.config({urlArgs:"v=1",paths:{jquery:"vendor/jquery/dist/jquery.min",foundation:"vendor/foundation/js/foundation.min","jquery.cookie":"vendor/jquery.cookie",fastclick:"vendor/fastclick/lib/fastclick",modernizr:"vendor/modernizr/modernizr",placeholder:"vendor/jquery-placeholder/jquery.placeholder",fotorama:"vendor/fotorama/fotorama",ymaps:"//api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU"},shim:{foundation:{deps:["jquery","modernizr"],exports:"Foundation"},"jquery.cookie":{deps:["jquery"]},fastclick:{exports:"FastClick"},modernizr:{exports:"Modernizr"},placeholder:{exports:"Placeholders"},fotorama:{deps:["jquery"],exports:"jQuery.fn.fotorama"},ymaps:{exports:"ymaps"}},deps:["app"]});