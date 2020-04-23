import React from 'react';
import Svg, {Circle, Path, G} from 'react-native-svg';

const SVGComponent = props => (
  <Svg
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    width="200px"
    height="200px"
    {...props}>
    <Circle
      style={{
        fill: '#366796',
      }}
      cx={256}
      cy={256}
      r={256}
    />
    <Path
      style={{
        fill: '#273B7A',
      }}
      d="M166.041,375.282l133.082,133.082c86.643-14.7,158.465-72.923,192.183-151.4L378.649,244.307 L166.041,375.282z"
    />
    <Path
      style={{
        fill: '#FDE085',
      }}
      d="M189.745,133.454l183.025,105.67c12.991,7.501,12.991,26.252,0,33.751l-183.025,105.67 c-12.991,7.501-29.229-1.876-29.229-16.875V150.331C160.516,135.33,176.755,125.954,189.745,133.454z"
    />
    <Path
      style={{
        fill: '#FFC91B',
      }}
      d="M160.516,256.862V361.67c0,15.001,16.239,24.376,29.229,16.875l183.025-105.67 c6.211-3.586,9.418-9.743,9.69-16.013H160.516z"
    />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);

export default SVGComponent;
