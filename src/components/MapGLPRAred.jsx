import * as React from 'react';
import {Component} from 'react';
import MapGL, {Source, Layer} from 'react-map-gl';
import ControlPanel from './control-panel';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';
import "mapbox-gl/dist/mapbox-gl.css";



const MAPBOX_TOKEN = 'pk.eyJ1Ijoia3A0bXNyIiwiYSI6ImNraDloZGE5azBwZ2Mycm11cXkxbmR3ZmUifQ.HdZfYYNI6sd2GHRrlp7tkQ'; // Set your mapbox token here

class MapGLPRAred extends Component {

  state = {
    viewport: {
      latitude: 18.67,
      longitude: -66.59,
      zoom: 3,
      bearing: 0,
      pitch: 0
    }
  };

  _sourceRef = React.createRef();

  _onViewportChange = viewport => this.setState({viewport});

  _onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = this._sourceRef.current.getSource();

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      this._onViewportChange({
        ...this.state.viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };

  render() {
    const {viewport} = this.state;
    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={this._onClick}
      >
        <Source
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          ref={this._sourceRef}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
        <ControlPanel containerComponent={this.props.containerComponent} />
      </MapGL>
    );
  }
}

export default MapGLPRAred;