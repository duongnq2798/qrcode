import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';

export default class App extends React.Component {
  render() {
    let url =
      'https://api.sheety.co/2eac1528c5b1172a30163e5921bc9c0f/demosheety/trangTính1';
    let body = {
      trangTính1: {
        name: 'test',
        id: '3',
      },
    };

    const sendPostRequest = async () => {
      try {
        const resp = await axios({
          method: 'post',
          url: url,
          body: JSON.stringify(body),
        });
        console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    sendPostRequest();
    return (
      <QRCodeScanner
        containerStyle={{backgroundColor: '#fff'}}
        onRead={this.ifScaned}
        reactivate={true}
        permissionDialogMessage="Need Permission To Acces Camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor: '#fff', borderRadius: 10}}
        bottomContent={
          <TouchableOpacity>
            <Text style={{fontSize: 21}}>Scan QR</Text>
          </TouchableOpacity>
        }></QRCodeScanner>
    );
  }
}
