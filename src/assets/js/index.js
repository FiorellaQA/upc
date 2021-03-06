'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');


  if(state.page == 0){
    wrapper.append(Login(_=>{ render(root) }));

  } else if(state.page == 1){
    wrapper.append(Sedes(_=>{ render(root) }));

  } else if(state.page == 2){
    wrapper.append(Buscar(_=>{ render(root) }));
    setTimeout(function () {
      initMap("map-buscar", state.origenLat, state.origenLong, '','','');
    }, 500);

  } else if(state.page == 3 ) {
    wrapper.append(BuscarLugar(_=>{ render(root) }));
    setTimeout(function () {
      initMap("map-lugar", state.origenLat, state.origenLong, '','','');
    }, 500);

  } else if(state.page == 4 ) {
    wrapper.append(BuscarClass(_=>{ render(root) }));
    setTimeout(function () {
      initMap("map-clases", state.origenLat, state.origenLong, '','','');
    }, 500);

  }else if(state.page == 5 ) {
    wrapper.append(Resultado(_ => { render(root) }));
    setTimeout(function () {
      initMap("map-result", state.origenLat, state.origenLong, state.destinoLat, state.destinoLong, state.myarray);
    }, 500);
  }

  root.append(wrapper);
};

const state = {
  page: 0,
  usuario: null,
  rutasSede: null,
  upcSede: null,
  origenLat :null,
  origenLong: null,
  destinoLat: null,
  destinoLong: null,
  dataPlaces: null,
  array: [],
  latitudes: [],
  longitudes: [],
  clases: null,
  objetoRuta: {},
  myarray: []
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
      state.rutasMo = json;
  });
  getJSON('/rutasSis', (err, json) => {
      state.rutasSis = json;


  console.log(state.rutasMo.features[0].geometry.coordinates[1]);

  });
  getJSON('/upcMonterrico', (err, json) => {
      state.upcMonterrico = json;
  });
  getJSON('/clases', (err, json) => {
      state.clases = json;
  });

  const root = $('.root');
  render(root);

});
