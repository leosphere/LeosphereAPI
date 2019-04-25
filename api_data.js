define({ "api": [
  {
    "type": "get",
    "url": "/authentication/refresh_token",
    "title": "Refresh token request",
    "version": "1.0.0",
    "name": "GetRefreshToken",
    "group": "Authentication",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns a new token valid for 24 additional hours.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>The user's token to be used in all request for identification.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/authentication/login",
    "title": "Connection request",
    "version": "1.0.0",
    "name": "PostUserLogin",
    "group": "Authentication",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Requests connection authorization. The token returned is valid during 24 hours. If the Lidar is restarted , this request has to be executed again to ask for a new token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>The user's token to be used in all request for identification.</p>"
          }
        ]
      }
    },
    "filename": "./Doc.js",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_access_right",
            "description": "<p>Error 403: Only expert users or more are allowed to connect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "wrong_user_name_or_pwd",
            "description": "<p>Error 401: Client's connection refused due to wrong credentials.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "account_inactive_for_too_long",
            "description": "<p>Error 401: Client's connection refused because account is inactive.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 403 Forbidden\n    {\n      \"error\": \"no_access_right\"\n    }\nor\n    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"wrong_user_name_or_pwd\"\n    }\n    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"account_inactive_for_too_long\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_jschuhmacher_Desktop_api_311_apidoc_main_js",
    "groupTitle": "C__Users_jschuhmacher_Desktop_api_311_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/configuration/lidar",
    "title": "Get Lidar information",
    "version": "1.0.0",
    "name": "GetLidarInfo",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns  information about the Lidar</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instrument_name",
            "description": "<p>serial number of the Lidar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history",
            "description": "<p>Lidar server version</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Lidar latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Lidar longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "altitude",
            "description": "<p>Lidar altitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"instrument_name\":\"WLS200s-005\",\n\"history\":\"Windcube Lidar server 3.0.2\",\n\"latitude\":22.321234,\n\"longitude\":124.366982,\n\"altitude\":130\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/resolution_list",
    "title": "Get list of active resolution in library",
    "version": "1.0.0",
    "name": "GetResolutionList",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns the list of all active resolutions</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of active resolution in the library</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.res_id",
            "description": "<p>Resolution id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.res_name",
            "description": "<p>Resolution name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.range_gate_length",
            "description": "<p>Range gate length of the resolution</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[\n{\"res_id\":1,\n\"res_name\":\"25m\",\n\"range_gate_length\":\"25m\"\n},\n{\"res_id\":2,\n\"res_name\":\"50m\",\n\"range_gate_length\":\"50m\"\n},...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/scan_list",
    "title": "Get list of active scans in library",
    "version": "1.0.0",
    "name": "GetScanList",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns the list of active scans in library</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of active scans in the library</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.scan_id",
            "description": "<p>Scan id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.scan_name",
            "description": "<p>Scan name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.range_gate_length",
            "description": "<p>Range gate length associated to the scan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[{\n\"scan_id\":12,\n\"scan_name\":\"ppi_25m\",\n\"range_gate_length\":\"25m\"\n},\n{\n\"scan_id\":13,\n\"scan_name\":\"rhi_25m\",\n\"range_gate_length\":\"25m\"\n},\n...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/scan_parameters/:id?",
    "title": "Get scan parameters",
    "version": "1.0.0",
    "name": "GetScanParameters",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/scan_parameters\nhttp://192.168.3.5/lidar_api/v1/configuration/scan_parameters/12",
        "type": "json"
      }
    ],
    "description": "<p>Returns the definition of the scan defined by id or currently played</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id of the scan. If not set , returns the scan currently played</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "parent_identifier",
            "description": "<p>Id of the parent scan in case of composite scan. null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent_sweep_mode",
            "description": "<p>Mode of the container scan in case of composite scan. null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent_scan_name",
            "description": "<p>Name of the parent's scan in case of composite scan. null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "elementary_scan",
            "description": "<p>Definitions of the scan, or elementary scan in case of composite.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_id",
            "description": "<p>Id of the scan</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"ppi\"",
              "\"rhi\"",
              "\"dbs\"",
              "\"lubrication\"",
              "\"composite\"",
              "\"calibration\"",
              "\"fixed\"",
              "\"wipe\""
            ],
            "optional": false,
            "field": "elementary_scan.sweep_mode",
            "description": "<p>Sweep mode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elementary_scan.scan_name",
            "description": "<p>Name of the scan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.iterations",
            "description": "<p>Number of iterations in the composite ( null otherwise)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "elementary_scan.scan_is_full",
            "description": "<p>indicate if it's a full ppi ( only for ppi and calibration sweep mode). 1 is a full PPI , 0 not a full PPI, null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_number_of_turns",
            "description": "<p>Number of turns for DBS and lubrication scan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_estimated_duration",
            "description": "<p>Approximate duration of the scan in seconds. In case of fixed scan this value is equal to total_running_time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_total_running_time",
            "description": "<p>total running time for fixed scan in milliseconds. Null for scans other than fixed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_elevation",
            "description": "<p>Constant elevation of the scan used for ppi, dbs, fixed, calibration. Null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_starting_elevation",
            "description": "<p>Starting elevation of the scan used for rhi. Null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_final_elevation",
            "description": "<p>Final elevation of the scan used for rhi. Null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_azimuth",
            "description": "<p>Constant azimuth of the scan used for rhi, and fixed. Null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_starting_azimuth",
            "description": "<p>Starting azimuth of the scan used for ppi and calibration. Null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_final_azimuth",
            "description": "<p>Final azimuth of the scan used for ppi and calibration. Null otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.ray_angle_resolution",
            "description": "<p>Angle between the center of  two consecutive rays when scanning head's angular speed, and accumulation time are constants. Used for ppi,rhi.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_speed",
            "description": "<p>Scanner's rotation speed. Used for ppi,rhi.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elementary_scan.rotation_direction",
            "description": "<p>Scanner's rotation direction. Used for ppi,rhi.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.ray_accumulation_time",
            "description": "<p>Time during which the detector collects light. A ray is defined by this duration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elementary_scan.range_gate_length",
            "description": "<p>Radial dimension of range gates</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.res_id",
            "description": "<p>Id of the resolution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_display_resolution",
            "description": "<p>Distance between two consecutive range gates (for a regular distribution)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "elementary_scan.range",
            "description": "<p>Distance along the line of sight, between the instrument and the center of each range gate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_number_of_gates",
            "description": "<p>Number of range gates</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "elementary_scan.measurement_height",
            "description": "<p>Vertical distance normal to the ground, between the instrument and the center of each range gate. null if scan is different from DBS.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\n\"parent_identifier\":null,\n\"parent_sweep_mode\":null,\n\"parent_scan_name\":null,\n\"elementary_scan\":[\n{\n\"scan_id\":12,\n\"sweep_mode\":\"ppi\",\n\"scan_name\":\"Myppi\",\n\"iterations\": null,\n\"scan_is_full\":0,\n\"scan_number_of_turns\":null,\n\"scan_estimated_duration\":2 ,\n\"scan_total_running_time\":null,\n\"scan_elevation\":0.4,\n\"scan_starting_elevation\":null,\n\"scan_final_elevation\":null,\n\"scan_azimuth\":null,\n\"scan_starting_azimuth\":-1.12,\n\"scan_final_azimuth\":0.08,\n\"ray_angle_resolution\":3,\n\"scan_speed\":2,\n\"rotation_direction\":\"direct\",\n\"ray_accumulation_time\":500,\n\"range_gate_length\":\"25m\",\n\"res_id\":13,\n\"scan_display_resolution\":25,\n\"range\":[50,70,80],\n\"scan_number_of_gates\":3,\n\"measurement_height\":null\n}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"Id has not the right format. Should be an integer greater than or equal to 1 \"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/settings/:id?",
    "title": "Get settings",
    "version": "1.0.0",
    "name": "GetSettings",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/settings\nhttp://192.168.3.5/lidar_api/v1/configuration/settings/3",
        "type": "json"
      }
    ],
    "description": "<p>Returns the content of the settings currently applied to Lidar or those specified by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id of the settings. If not set, returns currents settings informations</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "settings_id",
            "description": "<p>Settings id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "settings_name",
            "description": "<p>Settings name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "dhcp",
            "description": "<p>1 if set in DHCP mode. 0 if IP address is fixed.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>IP address in case of fixed IP.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "netmask",
            "description": "<p>Netmask. Null if DHCP mode is set.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gateway",
            "description": "<p>Gateway. Null if DHCP mode is set.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferred_dns",
            "description": "<p>Preferred DNS. Null if DHCP mode is set.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alternate_dns",
            "description": "<p>Alternate DNS. Null if DHCP mode is set.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "modem",
            "description": "<p>1 if modem configuration is enable. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modem_dns",
            "description": "<p>DNS of modem configuration. Null if modem configuration is not set.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "autorun",
            "description": "<p>1 if acquisition automatically starts when Lidar is on.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "azimuth_correction",
            "description": "<p>Azimuth offset angle used if the Lidar cannot be physically oriented to the North.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "spectrum_recording",
            "description": "<p>1 if spectrum recording is activated, 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"negative\"",
              "\"positive\""
            ],
            "optional": false,
            "field": "wind_toward_lidar",
            "description": "<p>Wind coming to the lidar is &quot;positive&quot; or &quot;negative&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "default_instrumental_function_y_average",
            "description": "<p>Default average value of the y-axis of the Lorentz distribution used for beta computation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "default_instrumental_function_amplitude",
            "description": "<p>Default amplitude of variations of the Lorentz distribution used for beta computation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "default_instrumental_function_half_height_width",
            "description": "<p>Default scale parameter specifying the half height width of the Lorentz distribution used for beta computation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "default_instrumental_function_x_max",
            "description": "<p>Default maximum horizontal axis of the Lorentz distribution used for beta computation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "instrumental_function_y_average",
            "description": "<p>Interval of accepted value. Cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "instrumental_function_amplitude",
            "description": "<p>Interval of accepted value. Cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "instrumental_function_half_height_width",
            "description": "<p>Interval of accepted value. Cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "instrumental_function_x_max",
            "description": "<p>Interval of accepted value. Cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attenuated_absolute_beta_calibration_constant",
            "description": "<p>Coefficient applied to attenuated absolute beta value. Cf user manual and beta calibration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "structure_detection_activated",
            "description": "<p>1 if structure detection is activated. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "structure_threshold_detection",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "structure_threshold_gradient",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_window_measure_time",
            "description": "<p>cf user manual (in ms).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_size_edge_filter",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_altitude_max",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_size_window",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_gap_residual_mixing",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_turbulence_threshold",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_gradient_turbulence_threshold",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pbl_delta_time_max",
            "description": "<p>cf user manual.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gps_default_longitude",
            "description": "<p>Default longitude position.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gps_default_latitude",
            "description": "<p>Default latitude position.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "pitch_ok",
            "description": "<p>Interval  defining pitch status as OK.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "pitch_warning",
            "description": "<p>Interval  defining pitch status as WARNING.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "pitch_critical",
            "description": "<p>Interval  defining pitch status as CRITICAL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "pitch_unknown",
            "description": "<p>Interval defining pitch status as UNKNOWN.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "roll_ok",
            "description": "<p>Interval defining roll status as OK.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "roll_warning",
            "description": "<p>Interval defining roll status as WARNING.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "roll_critical",
            "description": "<p>Interval defining roll status as CRITICAL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "roll_unknown",
            "description": "<p>Interval defining roll status as UNKNOWN .</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "use_pump",
            "description": "<p>1 if pump is activated. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pump_synchronisation_time_ms",
            "description": "<p>Delay before pumping.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pump_duration_ms",
            "description": "<p>Duration of pumping action.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "remote_monitoring_manager_activated",
            "description": "<p>1 if monitoring functions are activated. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smtp1_server",
            "description": "<p>Smtp server .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "smtp1_port",
            "description": "<p>Smtp port .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smtp1_user",
            "description": "<p>Smtp user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email1_sender",
            "description": "<p>Email sender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "email1_recipients",
            "description": "<p>Email recipients.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "email1_cc",
            "description": "<p>Email carbon copy field .</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "email1_bcc",
            "description": "<p>Email blind carbon copy field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "\"lidar_pc_on\"",
              "\"lidar_pc_off\"",
              "\"ups\"",
              "\"start_acq\"",
              "\"stop_acq\"",
              "\"new_settings\"",
              "\"log_in\"",
              "\"system_control_on\"",
              "\"system_control_released\"",
              "\"stop_sw\"",
              "\"restart_sw\"",
              "\"reboot_pc\"",
              "\"ok\"",
              "\"warning\"",
              "\"critical\"",
              "\"hh:mm\"",
              "\"mm\""
            ],
            "optional": false,
            "field": "email1_trig",
            "description": "<p>Actions that trigger the sending of email where &quot;hh:mm&quot; defines the timestamp at which an email will be sent periodically and &quot;mm&quot; represents the period in minutes for email's sending.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ftp1_activated",
            "description": "<p>1 if FTP #1 is activated. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ftp1_status_update_period_ms",
            "description": "<p>FTP #1 update status period.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ftp1_server",
            "description": "<p>FTP  server #1.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ftp1_port",
            "description": "<p>FTP port #1.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ftp1_user",
            "description": "<p>FTP server #1  user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"csv\"",
              "\"NetCDF\""
            ],
            "optional": false,
            "field": "ftp1_file_format",
            "description": "<p>Chosen format to send files to FTP  server #1.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ftp1_compress_exported_files",
            "description": "<p>1 if files are compressed before sent. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ftp1_use_sftp",
            "description": "<p>1 if files are sent through sftp. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ftp1_warning_threshold",
            "description": "<p>Corresponds to the number of files contained in the FTP temp directory, from which the FTP status turns into Warning.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"native\"",
              "\"single_level\""
            ],
            "optional": false,
            "field": "ftp1_ftp_directory",
            "description": "<p>Files organisation on FTP server.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "\"radial_wind_data\"",
              "\"wind_reconstruction_data\"",
              "\"radial_beta_data\"",
              "\"radial_absolute_beta_data\"",
              "\"atmospherical_structure_data\"",
              "\"scans\"",
              "\"settings\"",
              "\"resolutions\"",
              "\"environmental_data\""
            ],
            "optional": false,
            "field": "ftp1_data_selection",
            "description": "<p>List of data selected. Refer to introduction for more details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smtp2_server",
            "description": "<p>Smtp server .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "smtp2_port",
            "description": "<p>Smtp port .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smtp2_user",
            "description": "<p>Smtp user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email2_sender",
            "description": "<p>Email sender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "email2_recipients",
            "description": "<p>Email recipients.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "email2_cc",
            "description": "<p>Email carbon copy field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "email2_bcc",
            "description": "<p>Email blind carbon copy field.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "\"lidar_pc_on\"",
              "\"lidar_pc_off\"",
              "\"ups\"",
              "\"start_acq\"",
              "\"stop_acq\"",
              "\"new_settings\"",
              "\"log_in\"",
              "\"system_control_on\"",
              "\"system_control_released\"",
              "\"stop_sw\"",
              "\"restart_sw\"",
              "\"reboot_pc\"",
              "\"ok\"",
              "\"warning\"",
              "\"critical\"",
              "\"hh:mm\"",
              "\"mm\""
            ],
            "optional": false,
            "field": "email2_trig",
            "description": "<p>Actions that trigger the sending of email where &quot;hh:mm&quot; defines the timestamp at which an email will be sent periodically and &quot;mm&quot; represents the period in minutes for email's sending.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ftp2_activated",
            "description": "<p>1 if FTP #2  is activated. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ftp2_status_update_period_ms",
            "description": "<p>FTP #2 update status period.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ftp2_server",
            "description": "<p>FTP #2 server.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ftp2_port",
            "description": "<p>FTP #2 port.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ftp2_user",
            "description": "<p>FTP #2 server user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"csv\"",
              "\"NetCDF\""
            ],
            "optional": false,
            "field": "ftp2_file_format",
            "description": "<p>Chosen format to send files to FTP  server #2.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ftp2_compress_exported_files",
            "description": "<p>1 if files are compressed before sent. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ftp2_use_sftp",
            "description": "<p>1 if files are sent through sftp. 0 otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ftp2_warning_threshold",
            "description": "<p>Corresponds to the number of files contained in the FTP temp directory, from which the FTP status turns into Warning.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"native\"",
              "\"single_level\""
            ],
            "optional": false,
            "field": "ftp2_ftp_directory",
            "description": "<p>Files organisation on FTP server #2.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "\"radial_wind_data\"",
              "\"wind_reconstruction_data\"",
              "\"radial_beta_data\"",
              "\"radial_absolute_beta_data\"",
              "\"atmospherical_structure_data\"",
              "\"scans\"",
              "\"settings\"",
              "\"resolutions\"",
              "\"environmental_data\""
            ],
            "optional": false,
            "field": "ftp2_data_selection",
            "description": "<p>List of data selected for. Refer to introduction for more details..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_synchronization_priority",
            "description": "<p>Source(s) selected for time synchronization.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "\"GPS_only\"",
              "\"NTP_only\"",
              "\"GPS_over_NTP\"",
              "\"NTP_over_GPS\""
            ],
            "optional": false,
            "field": "server_addresses",
            "description": "<p>NTP server addresses.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n\"settings_id\": 3,\n\"settings_name\":\"my_settings\",\n\"dhcp\": 0,\n\"ip_address\":\"192.168.3.5\",\n\"netmask\":\"255.255.255.0\",\n\"gateway\":\"192.168.3.1\",\n\"preferred_dns\": null,\n\"alternate_dns\": null,\n\"modem\": 0,\n\"modem_dns\": null,\n\"autorun\": 1,\n\"azimuth_correction\": 10,\n\"spectrum_recording\": 0,\n\"wind_toward_lidar\":\"negative\",\n\"default_instrumental_function_y_average\":  0.0027,\n\"default_instrumental_function_amplitude\": 80,\n\"default_instrumental_function_half_height_width\": 1545,\n\"default_instrumental_function_x_max\": 484.5,\n\"instrumental_function_y_average\":  [0,0.1],\n\"instrumental_function_amplitude\":  [0,6000],\n\"instrumental_function_half_height_width\":  [600,25000],\n\"instrumental_function_x_max\":  [300,15000],\n\"attenuated_absolute_beta_calibration_constant\": 1,\n\"structure_detection_activated\": 1,\n\"structure_threshold_detection\": 3,\n\"structure_threshold_gradient\": 8,\n\"pbl_window_measure_time\": 120000,\n\"pbl_size_edge_filter\": 3,\n\"pbl_altitude_max\": 6800,\n\"pbl_size_window\": 4,\n\"pbl_gap_residual_mixing\": 300,\n\"pbl_turbulence_threshold\": 0.20,\n\"pbl_gradient_turbulence_threshold\": 0.22,\n\"pbl_delta_time_max\": 900,\n\"gps_default_longitude\": 0.000000,\n\"gps_default_latitude\": 0.000000,\n\"pitch_ok\": [0,2],\n\"pitch_warning\": [2,5],\n\"pitch_critical\": [5,180],\n\"pitch_unknown\": [181,181],\n\"roll_ok\": [0,2],\n\"roll_warning\": [2,5],\n\"roll_critical\": [5,180],\n\"roll_unknown\": [181,181],\n\"use_pump\": 1,\n\"pump_synchronisation_time_ms\": 500,\n\"pump_duration_ms\": 1200,\n\"remote_monitoring_manager_activated\":1,\n\"smtp1_server\":\"smtp.office365.com\",\n\"smtp1_port\":\"587\",\n\"smtp1_user\":\"xxxx@xxx.com\",\n\"email1_sender\":\"xxxx@xxx.com\",\n\"email1_recipients\":\"xxxx@xxx.com\",\n\"email1_cc\":\"xxxx@xxx.com\",\n\"email1_bcc\":\"xxxx@xxx.com\",\n\"email1_trig \":  [ \"lidar_pc_on\" , \"ok\",\"warning\" ,\"10\",\"09:52\"],\n\"ftp1_activated\": 1,\n\"ftp1_status_update_period_ms\": 5000,\n\"ftp1_server\":\"192.168.3.45\",\n\"ftp1_port\":\"21\",\n\"ftp1_user\":\"fptUser\",\n\"ftp1_file_format\":\"NetCDF\",\n\"ftp1_compress_exported_files\":1,\n\"ftp1_use_sftp\":0,\n\"ftp1_warning_threshold\":30,\n\"ftp1_ftp_directory \":\" Native\",\n\"ftp1_data_selection \":  [ \"radial_wind_data\",\"scans\"],\n\"smtp2_server\":\"smtp.office365.com\",\n\"smtp2_port\":\"587\",\n\"smtp2_user\":\"xxxx@xxx.com\",\n\"email2_sender\":\"xxxx@xxx.com\",\n\"email2_recipients\":\"xxxx@xxx.com\",\n\"email2_cc\":\"xxxx@xxx.com\",\n\"email2_bcc\":\"xxxx@xxx.com\",\n\"email2_trig \":  [ \"LIDAR_PC_ON\" , \"OK\",\"WARNING\" ,\"10\",\"09:52:00\"],\n\"ftp2_activated\": 1,\n\"ftp2_status_update_period_(ms)\": 5000,\n\"ftp2_server\":\"192.168.3.45\",\n\"ftp2_port\":\"21\",\n\"ftp2_user\":\"fptUser\",\n\"ftp2_file_format\":\"NetCDF\",\n\"ftp2_compress_exported_files\":1,\n\"ftp2_use_sftp\":0,\n\"ftp2_warning_threshold\":30,\n\"ftp2_ftp_directory\":\" Native\",\n\"ftp2_data_selection\": [ \"radial_wind_data\",\"scans\"],\n\"time_synchronization_priority\":\"GPS_only\",\n\"server_addresses\": [\"ntp.ubuntu.org\",\"pool.ntp\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"Id has not the right format. Should be an integer greater than or equal to 1\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/settings_list",
    "title": "Get list of settings in library",
    "version": "1.0.0",
    "name": "GetSettingsList",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns the list of settings in library</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of settings in the library</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.settings_id",
            "description": "<p>Settings id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.settings_name",
            "description": "<p>Settings name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[\n{\"settings_id\":1,\n\"settings_name\":\"WLS200S-005_with_ftp\"\n},\n{\"settings_id\":2,\n\"settings_name\":\"WLS200S-005_without_ftp\"\n},...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "post",
    "url": "/configuration/save_composite",
    "title": "Save a composite scan",
    "version": "1.0.0",
    "name": "SaveComposite",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/save_composite",
        "type": "json"
      }
    ],
    "description": "<p>Saves a new composite</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "BODY_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent_scan_name",
            "description": "<p>Name of the parent's scan.The length of the string must be &lt; 64 characters and can only contain letter ( upper or lower case) , number and &quot;_&quot; &quot;-&quot; &quot; &quot; &quot;=&quot; &quot;+&quot;  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "elementary_scan",
            "description": "<p>Definitions of each elementary scan.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.scan_id",
            "description": "<p>Scan Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "elementary_scan.iterations",
            "description": "<p>Number of iteration in the composite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body example:  ",
          "content": "\n{\n\"parent_scan_name\": \"MyNewComposite\",\n\"elementary_scan\":[{\"scan_id\":13,\"iterations\":2},{\"scan_id\":15,\"iterations\":1}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scan_id",
            "description": "<p>The id of the new scan.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"scan_id\":91}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"Field {FIELD} not allowed for this sweep mode.\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "post",
    "url": "/configuration/save_from_scan/:id",
    "title": "Save scan from one id",
    "version": "1.0.0",
    "name": "SaveScanParameters",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/save_from_scan/13",
        "type": "json"
      }
    ],
    "description": "<p>Creates an saves a new scan from an existing one. If one parameter is not set, the value of the source scan will be kept.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the source scan to be set only in URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "BODY_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scan_name",
            "description": "<p>Name of the scan. The length of the string must be lower than 64 characters and can only contain letter ( upper or lower case) , number and &quot;_&quot; &quot;-&quot; &quot; &quot; &quot;=&quot; &quot;+&quot;  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_number_of_turns",
            "description": "<p>Number of turns. Can  be set only for DBS and lubrication scan.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_total_running_time",
            "description": "<p>Total running time in milliseconds. Can be set only for fixed.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_elevation",
            "description": "<p>Constant elevation of the scan. Can be set for ppi, dbs, fixed and calibration scan.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_starting_elevation",
            "description": "<p>Starting elevation of the scan. Can be set only for rhi.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_final_elevation",
            "description": "<p>Final elevation of the scan. Can be set only for rhi.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_azimuth",
            "description": "<p>Constant azimuth of the scan. Can be set only for rhi, and fixed.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_starting_azimuth",
            "description": "<p>Starting azimuth of the scan. Can be set for ppi and calibration Scan. To save a full ppi, set scan_starting_azimuth and scan_final_azimuth equal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scan_final_azimuth",
            "description": "<p>Final azimuth of the scan. Can be set for ppi and calibration. To save a full ppi, set scan_starting_azimuth and scan_final_azimuth equal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ray_angle_resolution",
            "description": "<p>Angle between the center of  two consecutive rays when scanning head's angular speed, and accumulation time are constants. Can be set for ppi and rhi. It should be a divider of the angular sector.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rotation_direction",
            "description": "<p>Scanner's rotation direction. Can be set for ppi and rhi.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ray_accumulation_time",
            "description": "<p>Time during which the detector collects light. A ray is defined by this duration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "res_id",
            "description": "<p>Id of the resolution.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "range",
            "description": "<p>Distance along the line of sight, between the instrument and the center of each range gate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "measurement_height",
            "description": "<p>Vertical distance normal to the ground, between the instrument and the center of each range gate. null if scan is different from DBS.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body example:  ",
          "content": "{\"scan_name\":\"MyNewPpi\",\n\"scan_elevation\":0.4,\n\"scan_starting_azimuth\":0,\n\"scan_final_azimuth\":4,\n\"ray_angle_resolution\":2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scan_id",
            "description": "<p>Id of the new scan.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"scan_id\":93}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"Field 'field' not allowed for this sweep mode.\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "post",
    "url": "/control/program",
    "title": "Save and start a new program",
    "version": "1.0.0",
    "name": "SaveStartProgram",
    "group": "Control",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Allows to program a scenario on the Lidar. Only the most recent version of the scans are allowed. If Lidar is in CRITICAL status this command will be refused.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "BODY_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "loop",
            "description": "<p>List of scan(s) to be executed in a loop. Must never be null.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "loop.scan_id",
            "description": "<p>Scan id. Only the most recent version of the scans ( defines by its name) is allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "loop.iteration",
            "description": "<p>Number of iteration(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scheduler",
            "description": "<p>List of scan(s)  to be scheduled. May be null.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scheduler.scan_id",
            "description": "<p>Scan id. Only the most recent version of the scans ( defines by its name) is allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scheduler.iteration",
            "description": "<p>Number of iteration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scheduler.start_time",
            "description": "<p>Start executing time in ISO8601 format (example 2018-02-05T02:00:00Z)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scheduler.period",
            "description": "<p>Duration of the periodicity. Units is defined in the followinf field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"minutes\"",
              "\"hours\"",
              "\"days\"",
              "\"weeks\""
            ],
            "optional": false,
            "field": "scheduler.unit",
            "description": "<p>unit associated to the period of execution to get the periodicity.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body example with a loop and a scheduler:",
          "content": "{\n\"loop\":[ {\"scan_id\":12,\"iteration\":3},\n\t\t\t{\"scan_id\":13,\"iteration\":1},\n\t\t\t{\"scan_id\":1,\"iteration\":1}],\n\"scheduler\":[{\"scan_id\":10,\"iteration\":1,\"start_time\":\"2018-02-05T02:00:05Z\",\"period\":2,\"unit\":\"minutes\"},\n\t\t\t{\"scan_id\":13,\"iteration\":2,\"start_time\":\"2018-02-05T04:12:10Z\",\"period\":0 , \"unit\":\"hours\" }] \n}",
          "type": "json"
        },
        {
          "title": "Body example with no scheduler:",
          "content": "\n{\n\"loop\":[ {\"scan_id\":12,\"iteration\":3},\n\t\t\t{\"scan_id\":13,\"iteration\":1},\n\t\t\t{\"scan_id\":1,\"iteration\":1}],\n\"scheduler\": null \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>results of the command</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "connection_rejected",
            "description": "<p>Error 412: A user is already operating the Lidar</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_action_done",
            "description": "<p>Error 412: State requested is the current one</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n    HTTP/1.1 412 Precondition Failed\n    {\n      \"error\": \"connection_rejected\"\n\t\t \"explanation\":  A user is already operating the Lidar\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Control"
  },
  {
    "type": "post",
    "url": "/control/command/:action",
    "title": "Send a command to the Lidar",
    "version": "1.0.0",
    "name": "doAction",
    "group": "Control",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/control/command/stop_acq",
        "type": "json"
      }
    ],
    "description": "<p>Sends a command to the Lidar. Contrary to the GUI behavior be aware that if a scan has been updated the command start_acq will still run the older version of the scan. If you want to play the new ones, update your programming and/or your composites with the /control/program request.* @apiPermission expert</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "BODY_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"start_acq\"",
              "\"stop_acq\"",
              "\"reboot_pc\"",
              "\"restart_sw\"",
              "\"stop_sw\"",
              "\"shutdown_pc\""
            ],
            "optional": false,
            "field": "action",
            "description": "<p>Action to be done on the Lidar. System control must be free. Actions available are :</p> <ul> <li> <p>Starting an acquisition: &quot;start_acq&quot; (If Lidar is in CRITICAL status this command will be refused)</p> </li> <li> <p>Stopping an acquisition: &quot;stop_acq&quot;</p> </li> <li> <p>Rebooting the Lidar computer: &quot;reboot_pc&quot;</p> </li> <li> <p>Restarting Windforge server: &quot;restart_sw&quot;</p> </li> <li> <p>Stopping Windforge server: &quot;stop_sw&quot;</p> </li> <li> <p>Stopping Lidar PC: &quot;shutdown_pc&quot; . Warning! Shutting down the PC will require a manual start. No double check will be asked.</p> </li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns true if action has  been successfully executed. Otherwise error with explanation will be returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "connection_rejected",
            "description": "<p>Error 412: A user is already operating the Lidar</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_action_done",
            "description": "<p>Error 412: State requested is the current one</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}\nHTTP/1.1 412 Precondition Failed\n{\n  \"error\": \"connection_rejected\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Control"
  },
  {
    "type": "get",
    "url": "/data/current_sweep_index",
    "title": "Get current sweep index",
    "version": "1.0.0",
    "name": "GetCurrentSweep",
    "group": "Data",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns current sweep index</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sweep_index",
            "description": "<p>Identification number of the current sweep</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"sweep_index\": 190}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/last_ray/:group/:variable?",
    "title": "Get data from last ray",
    "version": "1.0.0",
    "name": "GetLastRay",
    "group": "Data",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/last_ray/radial_wind_data\nhttp://192.168.3.5/lidar_api/v1/data/last_ray/radial_wind_data/cnr,doppler_spectrum_width",
        "type": "json"
      }
    ],
    "description": "<p>Retrieves wind and aerosol data from the last ray acquired</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"radial_wind_data\"",
              "\"wind_reconstruction_data\"",
              "\"radial_beta_data\"",
              "\"radial_absolute_beta_data\""
            ],
            "optional": false,
            "field": "group",
            "description": "<p>specified data group to retrieve. One group only used by request. Refer to introduction for more details.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "variable",
            "description": "<p>If omitted, all variables contained in the group will be returned. The list of authorized values is given at the beginning of the document.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scan_id",
            "description": "<p>Id of the scan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res_id",
            "description": "<p>Id of the resolution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "settings_id",
            "description": "<p>Id of the settings</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "range_gate_length",
            "description": "<p>Radial dimension of range gates</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sweep_index",
            "description": "<p>Identification number of the sweep</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "range",
            "description": "<p>Distance along the line of sight, between the instrument and the center of each range gate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "measurement_height",
            "description": "<p>Vertical distance normal to the ground, between the instrument and the center of each range gate. ( null for scan different from DBS)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "azimuth",
            "description": "<p>Scanning head's azimuth angle relative to true north when each measurement finished. 0 to 360. 0 is the North, 90 is the East. This angle only i.ncorporates azimuth_correction. The Lidar is not supposed to be moving.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elevation",
            "description": "<p>Scanning head's elevation angle relative to horizontal plane when each measurement finished. -90 to 90. 90 is the zenith. This angle does not incorporate any automatic corrections. The Lidar is not supposed to be moving</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp at the end of each ray measurement following ISO8601 format ( example 2018-05-11T02:12:35.123Z)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ray_index",
            "description": "<p>Index of the ray</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "measurement",
            "description": "<p>Contains wind and aerosol data measurement specified in the parameter &quot;variable&quot;. Each variable is an array of N values , with N the number of range gates and is repeated X time , where X is the number of rays.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"scan_id\": 12,\n\"res_id\": 13,\n\"settings_id\": 23,\n\"range_gate_length\":\"25m\"\n\"sweep_index\": 190, \n\"range\": [50,75,100],\n\"measurement_height\": null, \n\"timestamp\": \"2012-01-31T10:00:01.123Z\",\n\"azimuth\": 30,\n\"elevation\": 75,\n\"ray_index\":0,\n\"measurement\": {\"cnr\": [4.02,3.2,5] ,\"doppler_spectrum_width\":[3.7,2.5,2.9]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n\t\t\"error\": \"parameter_not_valid\",\n\t\t\"explanation\": \"Unknown given field: {FIELD} for group {group}\"\n\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/netcdf_file/:sweep_index/:groups",
    "title": "Get NetCDF file from a given sweep",
    "version": "1.0.0",
    "name": "GetNetCDFFile",
    "group": "Data",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/netcdf_file/123/radial_wind_data,wind_reconstruction_data",
        "type": "json"
      }
    ],
    "description": "<p>Retrieves NetCDF file from a given sweep index. To get NetCDF files between two dates , use the request to get sweep index history then iterate on the id retrieved. Cf User manual for more details about NetCDF</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sweep_index",
            "description": "<p>Identification number of the sweep</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"radial_wind_data\"",
              "\"wind_reconstruction_data\"",
              "\"radial_beta_data\"",
              "\"radial_absolute_beta_data\"",
              "\"atmospherical_structure_data\""
            ],
            "optional": false,
            "field": "group",
            "description": "<p>Specified data group to retrieve. Refer to introduction for more details.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"'sweep_index' has not the right format. Should be an integer greater than or equal to 1\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"Unknown given data group 'WrongGroup'\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/sweep_by_id/:sweep_index/:group/:variable?",
    "title": "Get data from a given sweep",
    "version": "1.0.0",
    "name": "GetSweepById",
    "group": "Data",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/sweep_by_id/190/radial_wind_data\nhttp://192.168.3.5/lidar_api/v1/data/sweep_by_id/190/radial_wind_data/cnr,doppler_spectrum_width",
        "type": "json"
      }
    ],
    "description": "<p>Retrieves wind and aerosol data for one sweep. To get data between two date , use the &quot;sweep_list&quot; request. Then iterate on this request with  the id returned.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sweep_index",
            "description": "<p>Identification number of the sweep</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"radial_wind_data\"",
              "\"wind_reconstruction_data\"",
              "\"radial_beta_data\"",
              "\"radial_absolute_beta_data\"",
              "\"atmospherical_structure_data\""
            ],
            "optional": false,
            "field": "group",
            "description": "<p>Specified data group to retrieve. One group only by request. Refer to introduction for more details.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "variable",
            "description": "<p>If omitted, all variables contained in the group will be returned. The list of authorized values is given at the beginning of the document.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scan_id",
            "description": "<p>Id of the scan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res_id",
            "description": "<p>Id of the resolution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "settings_id",
            "description": "<p>Id of the settings</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "range_gate_length",
            "description": "<p>Radial dimension of range gate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sweep_index",
            "description": "<p>Identification number of the sweep</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "range",
            "description": "<p>Distance along the line of sight, between the instrument and the center of each range gate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "measurement_height",
            "description": "<p>Vertical distance normal to the ground, between the instrument and the center of each range gate ( null except if  wind_reconstruction_data group is specified)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "azimuth",
            "description": "<p>Scanning head's azimuth angle relative to true north when each measurement finished. 0 to 360. 0 is the North, 90 is the East. This angle only incorporates azimuth_correction. The Lidar is not supposed to be moving.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elevation",
            "description": "<p>Scanning head's elevation angle relative to horizontal plane when each measurement finished. -90 to 90. 90 is the zenith. This angle does not incorporate any automatic corrections. The Lidar is not supposed to be moving</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp at the end of each ray measurement following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "ray_index",
            "description": "<p>Identification number of each ray</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "lidar_calibration",
            "description": "<p>Beta calibration values obtained during a calibration scan. Empty for other scans.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lidar_calibration.instrumental_function_y_average",
            "description": "<p>Average value of the y-axis of the Lorentz distribution obtained in the last calibration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lidar_calibration.instrumental_function_amplitude",
            "description": "<p>Amplitude of variations of the Lorentz distribution obtained in the last calibration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lidar_calibration.instrumental_function_half_height_width",
            "description": "<p>Scale parameter specifying the half height width of the Lorentz distribution obtained in the last calibration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lidar_calibration.instrumental_function_x_max",
            "description": "<p>Maximum horizontal axis of the Lorentz distribution obtained in the last calibration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "lidar_calibration.instrumental_function_status",
            "description": "<p>0 for rejected data and 1 for accepted data. Data is rejected if the beta calibration is not successful.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "measurement",
            "description": "<p>Contains wind and aerosol data measurement specified in the parameter &quot;variable&quot;. Each variable is an array of N values , with N the number of range gates and is repeated X time , where X is the number of rays.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"scan_id\": 12,\n\"res_id\": 13,\n\"settings_id\": 23,\n\"range_gate_length\":\"25m\"\n\"sweep_index\": 190, \n\"range\": [50,75,100],\n\"measurement_height\": null, \n\"timestamp\":  [\"2018-01-31T10:00:01.100Z\",\"2018-01-31T10:00:02.100Z\",\"2018-01-31T10:00:03.100Z\",...],\n\"azimuth\": [30,31,32,..],\n\"elevation\": [75,75,75,...],\n\"ray_index\": [0,1,2],\n\"lidar_calibration\": null,\n\"measurement\":[ { \"cnr\": [4.02,3.2,5] ,\"doppler_spectrum_width\":[3.9,2.5,2.9]},\n\t\t\t{ \"cnr\": [5.02,3.4,5] ,\"doppler_spectrum_width\":[3.5,2.6,2.3]},\n\t\t\t{ \"cnr\": [3.5,3.8,5.9] ,\"doppler_spectrum_width\":[3.5,2.4,2.4]},...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n\t\t\"error\": \"parameter_not_valid\",\n\t\t\"explanation\": \"Unknown given field: {FIELD} for group {group}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/sweep_list/:start_time/:end_time",
    "title": "Get sweep index history",
    "version": "1.0.0",
    "name": "GetSweepList",
    "group": "Data",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/sweep_list/2018-05-11T02:12:35Z/2018-05-11T12:12:35Z",
        "type": "json"
      }
    ],
    "description": "<p>Returns a list of sweep index between two dates</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>UTC start time of the interval following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>UTC end time of the interval following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of sweep executed between start_time and end_time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[190,191,192,193,194]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n\t\t\"error\": \"parameter_not_valid\",\n\t\t\"explanation\": \"'start_time' not valid\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/monitoring/activity/:start_time/:end_time",
    "title": "Get Lidar activity history",
    "version": "1.0.0",
    "name": "GetActivity",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL example:",
        "content": "http://192.168.3.5/lidar_api/v1/monitoring/activity/2018-12-01T12:00:00Z/2018-12-01T13:00:00Z",
        "type": "json"
      }
    ],
    "description": "<p>Returns Lidar activities between two dates</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Start time of interval to get Lidar activities history following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>Final time of interval to get Lidar activities history following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of activities.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.timestamp",
            "description": "<p>Activity timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.action",
            "description": "<p>Action explanation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.user",
            "description": "<p>User who executed the action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.ip_address",
            "description": "<p>IP address of the user who executed the action</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[{\n \"timestamp\":\"2018-05-12T09:00:00.123Z\",\n \"action\":\"START_ACQUIRING\",\n \"user\":\"expert\",\n \"ip_address\":\"192.168.3.5\"\n},\n{\n \"timestamp\":\"2018-05-12T09:10:00.200Z\",\n \"action\":\"STOP_ACQUIRING\",\n \"user\":\"expert\",\n \"ip_address\":\"192.168.3.5\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"start time not valid\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "get",
    "url": "/monitoring/devices_status",
    "title": "Get current devices status",
    "version": "1.0.0",
    "name": "GetDevicesStatus",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns current Lidar's subcomponents status</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of devices status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.device_name",
            "description": "<p>Device name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.status",
            "description": "<p>Device status value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.explanation",
            "description": "<p>Device status explanation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.code",
            "description": "<p>Device status error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[{\n \"device_name\":\"Inclinometer\",\n \"status\":\"OK\",\n \"explanation\":\"Inclinometer OK\",\n \"code\":7\n },\n {\n \"device_name\":\"Scanner\",\n \"status\":\"OK\",\n \"explanation\":\"Scanner OK\",\n \"code\":7\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "get",
    "url": "/monitoring/environmental_data/:start_time/:end_time",
    "title": "Get environmental data history",
    "version": "1.0.0",
    "name": "GetEnvironmentalData",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL example:",
        "content": "http://192.168.3.5/lidar_api/v1/monitoring/environmental_data/2018-12-01T12:00:00Z/2018-12-01T13:00:00Z",
        "type": "json"
      }
    ],
    "description": "<p>Returns environmental data between two dates</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Start time of interval to get Lidar environmental data history following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>Final time of interval to get Lidar environmental data following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of environmental data .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.timestamp",
            "description": "<p>Starting timestamp of interval used to compute environmental data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>Name of the data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.unit",
            "description": "<p>Unit of the data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.sample_number",
            "description": "<p>Number of sample used to compute mean , min and max values in the 30 minutes interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.mean",
            "description": "<p>Mean value of the data computed on the 30 minutes interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.min",
            "description": "<p>Minimum value of the data computed during the 30 minutes interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.max",
            "description": "<p>Maximum value of the data computed during the 30 minutes interval</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[\n{\"timestamp\":\"2018-05-12T09:00:00Z\",\n\"name\":\"pitch\",\n\"unit\":\"°\",\n\"sample_number\":360,\n\"mean\":0.5,\n\"min\":0.2,\n\"max\":0.7\n},\n{\"timestamp\":\"2018-05-12T09:00:00Z\",\n\"name\":\"roll\",\n\"unit\":\"°\",\n\"sampleNumber\":360,\n\"mean\":0.5,\n\"min\":0.2,\n\"max\":0.7\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"start time not valid\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "get",
    "url": "/monitoring/global_status",
    "title": "Get global status",
    "version": "1.0.0",
    "name": "GetGlobalStatus",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Returns the global status of the Lidar.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Lidar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "explanation",
            "description": "<p>Status explanation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Status error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"explanation\": \"LIDAR ACQUIRING\",\n  \"code\":54\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "GET",
    "url": "/monitoring/logs",
    "title": "get logs from the Lidar",
    "version": "1.0.0",
    "name": "GetLogs",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Get logs archive from the Lidar. Sends to the user one zipped file. Warning: This action can be long and cannot be stopped. Stop acquisition before.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>results of the command</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "get",
    "url": "/monitoring/devices_status/:start_time/:end_time",
    "title": "Get devices status history",
    "version": "1.0.0",
    "name": "GetdevicesStatus",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL example:",
        "content": "http://192.168.3.5/lidar_api/v1/monitoring/devices_status/2018-12-01T12:00:00Z/2018-12-01T13:00:00Z",
        "type": "json"
      }
    ],
    "description": "<p>Returns devices status history between two dates</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Start time of interval to get devices status history following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>Final time of interval to get devices status history following ISO8601 format ( example 2018-05-11T02:12:35Z)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of devices status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.timestamp",
            "description": "<p>Status computation time following ISO8601 format ( example 2018-05-11T02:12:35Z).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.device_name",
            "description": "<p>Device name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.status",
            "description": "<p>Device status value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.explanation",
            "description": "<p>Device status explanation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.code",
            "description": "<p>Device status error code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[{\n \"timestamp\":\"2018-05-12T09:00:00.123Z\",\n \"device_name\":\"Inclinometer\",\n \"status\":\"OK\",\n \"explanation\":\"Inclinometer OK\",\n \"code\":7\n},\n{\n\"timestamp\":\"2018-05-12T09:00:01.203Z\",\n\"device_name\":\"Scanner\",\n\"status\":\"OK\",\n\"explanation\":\"Scanner OK\",\n\"code\":7\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"start time not valid\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./Doc.js",
    "groupTitle": "Monitoring"
  }
] });
