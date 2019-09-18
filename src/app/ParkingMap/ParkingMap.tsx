import * as React from 'react';
import { PageSection, Title, Switch } from '@patternfly/react-core';
import { GoogleMap } from '@app/GoogleMap/GoogleMap';
import { MeterStatusText } from '@app/ApiInterfaces/api-interfaces';
const MarkerClusterer = require('@google/markerclusterer')

type ParkingMapProps = {}
type ParkingMapState = {
  // TODO define the properties used to track filters
}

class ParkingMap extends React.Component<ParkingMapProps, ParkingMapState> {
  private map: google.maps.Map|undefined

  constructor (props) {
    super(props)
  }

  async handleApiLoaded (map: google.maps.Map) {
    console.log('The map loaded on the ParkingMap page!')

    map.addListener('zoom_changed', () => {
      console.log(`Map is now zoomed to: ${map.getZoom()}`)
    })

    this.map = map
    this.renderMarkers()
  }

  async renderMarkers () {
    if (!this.map) throw new Error('cannot render markers. map is not loaded')
    // TODO:
    // 1. Fetch parking meters from the API
    // 2. Create Google Maps Marker objects
    // 3. Use MarkerClusterer to enable clustering
  }

  handleChange (type: MeterStatusText, checked: boolean) {
    // TODO: Manage a filter property of the component state
    // using this.setState(). Note that calling this.setState
    // will invoke render() automatically to update the UI
  }

  render () {
    const switches = [
      // Here's an example switch. You'll need to create more using
      // the MeterStatusText enums and wire them to some component state
      <Switch
          key={'switch-parking-available'}
          id={'switch-parking-available'}
          label={'Available'}
          labelOff={'Available'}
          isChecked={true}
          onChange={(checked) => this.handleChange(MeterStatusText.Available, checked)}
      />
    ]

    return (
      <PageSection>
        <Title size="lg">Parking Map</Title>
        <hr/>
        <br/>
        <form>
          {switches}
        </form>
        <br/>
        <GoogleMap handleMapApiLoaded={(map) => this.handleApiLoaded(map)}></GoogleMap>
      </PageSection>
    )
  }
}

export { ParkingMap };
