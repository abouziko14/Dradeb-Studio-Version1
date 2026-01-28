var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama_3",
      "name": "Panorama_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9058794463324613,
          "pitch": 0.3895319032477307,
          "rotation": 0,
          "target": "1-panorama_2"
        },
        {
          "yaw": -2.0768179495971406,
          "pitch": 0.9111687934045616,
          "rotation": 2.356194490192345,
          "target": "0-panorama_3"
        },
        {
          "yaw": -2.5445748614801946,
          "pitch": 0.4640503698564551,
          "rotation": 10.210176124166829,
          "target": "2-panorama_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama_2",
      "name": "Panorama_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.37450408928094,
          "pitch": 0.3913542418667184,
          "rotation": 11.780972450961727,
          "target": "0-panorama_3"
        },
        {
          "yaw": 2.3202327821084694,
          "pitch": 0.626037189679554,
          "rotation": 11.780972450961727,
          "target": "2-panorama_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama_1",
      "name": "Panorama_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "3-panorama"
        },
        {
          "yaw": -2.0290357381867654,
          "pitch": 0.25146790297469046,
          "rotation": 4.71238898038469,
          "target": "1-panorama_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1335711162240365,
        "pitch": 0.005006041410101858,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.4428106224245596,
          "pitch": 0.11669298776179637,
          "rotation": 0.7853981633974483,
          "target": "2-panorama_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
