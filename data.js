var APP_DATA = {
  "scenes": [
    {
      "id": "0-accueil",
      "name": "accueil",
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
        "yaw": 0.048945598092885234,
        "pitch": 0.07530744413575974,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 0.2912783276888522,
          "pitch": 0.04230127402117567,
          "rotation": 0,
          "target": "1-bureau-r-5"
        },
        {
          "yaw": 1.1552238062635158,
          "pitch": -0.33439109922243127,
          "rotation": 0,
          "target": "2-bureau-r-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bureau-r-5",
      "name": "bureau R 5",
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
          "yaw": 2.1761436026603276,
          "pitch": 0.05922922946717435,
          "rotation": 0,
          "target": "0-accueil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bureau-r-6",
      "name": "bureau R 6",
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
          "yaw": -2.5310767249554473,
          "pitch": 0.03892192742532785,
          "rotation": 0,
          "target": "6-salle-de-reunion-r-6"
        },
        {
          "yaw": 2.5094550077920337,
          "pitch": 0.038911433109921845,
          "rotation": 0,
          "target": "3-bureau-serge"
        },
        {
          "yaw": 2.6862492412554424,
          "pitch": 0.25525361426370097,
          "rotation": 0,
          "target": "0-accueil"
        },
        {
          "yaw": -2.9103134206031847,
          "pitch": -0.09359015550069749,
          "rotation": 0,
          "target": "4-r-7-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bureau-serge",
      "name": "bureau Serge",
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
          "yaw": -3.1363313422618244,
          "pitch": 0.016783879359666187,
          "rotation": 0,
          "target": "6-salle-de-reunion-r-6"
        },
        {
          "yaw": -1.6112121267465174,
          "pitch": 0.05590798887145887,
          "rotation": 0,
          "target": "2-bureau-r-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-r-7-cuisine",
      "name": "R 7 cuisine",
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
          "yaw": 3.133117316073495,
          "pitch": 0.014572533445779356,
          "rotation": 0,
          "target": "5-r-7-terrasse"
        },
        {
          "yaw": 2.8011113908548353,
          "pitch": 0.32769583787277057,
          "rotation": 0,
          "target": "2-bureau-r-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-r-7-terrasse",
      "name": "R 7 terrasse",
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
          "yaw": 1.602035767081544,
          "pitch": 0.04783198718732251,
          "rotation": 0,
          "target": "4-r-7-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salle-de-reunion-r-6",
      "name": "salle de reunion R 6",
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
          "yaw": -0.0031491805070746892,
          "pitch": 0.047202595140355186,
          "rotation": 0,
          "target": "3-bureau-serge"
        },
        {
          "yaw": -1.4814983067844576,
          "pitch": 0.07899331673223742,
          "rotation": 0,
          "target": "2-bureau-r-6"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "M115 visite",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
