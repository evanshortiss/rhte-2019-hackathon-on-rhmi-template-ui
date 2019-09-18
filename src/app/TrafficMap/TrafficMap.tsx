import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { GoogleMap } from '@app/GoogleMap/GoogleMap';

type TrafficMapProps = {}
type TrafficMapState = {}

class TrafficMap extends React.Component<TrafficMapProps, TrafficMapState> {
  constructor (props) {
    super(props)
  }

  async handleApiLoaded (map: google.maps.Map) {
    console.log('The map loaded on the TrafficMap page!')
  }

  render () {
    return (
      <PageSection>
        <Title size="lg">Traffic Map</Title>
        <hr/>
        <br/>
        <GoogleMap handleMapApiLoaded={(map) => this.handleApiLoaded(map)}></GoogleMap>
      </PageSection>
    )
  }
}

export { TrafficMap };
