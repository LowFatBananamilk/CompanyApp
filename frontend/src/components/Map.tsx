import React, { useEffect } from 'react';


declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export default function Map({ latitude, longitude, zoom }: { latitude: number, longitude: number, zoom: number }) {
  const apiKey = '';

  // 카카오 API 호출
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
          mapOption = {
            center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
            level: zoom // 지도의 확대 레벨
          };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        var mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 마커를 표시할 위치와 title 객체 배열입니다 
        var positions = [
          {
            title: '한진피엘 경주공장',
            latlng: new kakao.maps.LatLng(35.724136980121614, 129.28241053771103)
          },
          {
            title: '신진엔지니어링 본사',
            latlng: new kakao.maps.LatLng(35.662254625799214, 129.343091451232)
          },
          {
            title: '신진엔지니어링 문산공장',
            latlng: new kakao.maps.LatLng(35.678719252815995, 129.31642834078488)
          },

        ];

        for (var i = 0; i < positions.length; i++) {

          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          });
        }
      });
    });
  }, [latitude, longitude, zoom, apiKey]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </>
  );
}