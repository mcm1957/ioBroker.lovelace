"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[33085],{62770:(e,i,a)=>{let n,r,t,o;var _,s,d;let c;a.d(i,{TW:()=>n,tt:()=>r,is:()=>t,Uf:()=>o,hP:()=>c,N2:()=>l,TA:()=>v,kM:()=>u,e4:()=>g,Fy:()=>p,OV:()=>w,aK:()=>y,rs:()=>f,pr:()=>m,wz:()=>S,PE:()=>z,tY:()=>C,xK:()=>b,Qf:()=>j,JT:()=>h,BP:()=>L,f$:()=>W,vS:()=>H,mZ:()=>I,B7:()=>E,Mb:()=>A,cH:()=>k,kL:()=>M,yD:()=>V,vN:()=>T,uq:()=>Z,Hr:()=>D,OF:()=>P,Ir:()=>N,EW:()=>F,kV:()=>R,lo:()=>B,a2:()=>O,AC:()=>x,zn:()=>K,IG:()=>q,JL:()=>U,LD:()=>$,Db:()=>J,xw:()=>G}),function(e){e[e.Idle=0]="Idle",e[e.Including=1]="Including",e[e.Excluding=2]="Excluding",e[e.Busy=3]="Busy",e[e.SmartStart=4]="SmartStart"}(n||(n={})),function(e){e[e.Default=0]="Default",e[e.SmartStart=1]="SmartStart",e[e.Insecure=2]="Insecure",e[e.Security_S0=3]="Security_S0",e[e.Security_S2=4]="Security_S2"}(r||(r={})),function(e){e[e.Temporary=-2]="Temporary",e[e.None=-1]="None",e[e.S2_Unauthenticated=0]="S2_Unauthenticated",e[e.S2_Authenticated=1]="S2_Authenticated",e[e.S2_AccessControl=2]="S2_AccessControl",e[e.S0_Legacy=7]="S0_Legacy"}(t||(t={})),function(e){e[e.SmartStart=0]="SmartStart"}(o||(o={})),function(e){e[e.S2=0]="S2",e[e.SmartStart=1]="SmartStart"}(_||(_={})),function(e){e[e.ZWave=0]="ZWave",e[e.ZWaveLongRange=1]="ZWaveLongRange"}(s||(s={})),function(e){e[e.Controller=0]="Controller",e[e["Routing End Node"]=1]="Routing End Node",e[e["End Node"]=1]="End Node"}(d||(d={})),function(e){e[e.Error_Timeout=-1]="Error_Timeout",e[e.Error_Checksum=0]="Error_Checksum",e[e.Error_TransmissionFailed=1]="Error_TransmissionFailed",e[e.Error_InvalidManufacturerID=2]="Error_InvalidManufacturerID",e[e.Error_InvalidFirmwareID=3]="Error_InvalidFirmwareID",e[e.Error_InvalidFirmwareTarget=4]="Error_InvalidFirmwareTarget",e[e.Error_InvalidHeaderInformation=5]="Error_InvalidHeaderInformation",e[e.Error_InvalidHeaderFormat=6]="Error_InvalidHeaderFormat",e[e.Error_InsufficientMemory=7]="Error_InsufficientMemory",e[e.Error_InvalidHardwareVersion=8]="Error_InvalidHardwareVersion",e[e.OK_WaitingForActivation=253]="OK_WaitingForActivation",e[e.OK_NoRestart=254]="OK_NoRestart",e[e.OK_RestartPending=255]="OK_RestartPending"}(c||(c={}));const l=52;let v,u,g;!function(e){e[e.NotAvailable=127]="NotAvailable",e[e.ReceiverSaturated=126]="ReceiverSaturated",e[e.NoSignalDetected=125]="NoSignalDetected"}(v||(v={})),function(e){e[e.ZWave_9k6=1]="ZWave_9k6",e[e.ZWave_40k=2]="ZWave_40k",e[e.ZWave_100k=3]="ZWave_100k",e[e.LongRange_100k=4]="LongRange_100k"}(u||(u={})),function(e){e[e.Unknown=0]="Unknown",e[e.Asleep=1]="Asleep",e[e.Awake=2]="Awake",e[e.Dead=3]="Dead",e[e.Alive=4]="Alive"}(g||(g={}));const p=["unknown","asleep","awake","dead","alive"],w=(e,i)=>{if(i.device_id&&i.entry_id)throw new Error("Only one of device or entry ID should be supplied.");if(!i.device_id&&!i.entry_id)throw new Error("Either device or entry ID should be supplied.");return e.callWS({type:"zwave_js/network_status",device_id:i.device_id,entry_id:i.entry_id})},y=(e,i)=>e.callWS({type:"zwave_js/data_collection_status",entry_id:i}),f=(e,i,a)=>e.callWS({type:"zwave_js/update_data_collection_preference",entry_id:i,opted_in:a}),m=(e,i)=>e.callWS({type:"zwave_js/get_provisioning_entries",entry_id:i}),S=(e,i,a,n=r.Default,t,o,_)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/add_node",entry_id:i,inclusion_strategy:n,qr_code_string:o,qr_provisioning_information:t,planned_provisioning_entry:_}),z=(e,i)=>e.callWS({type:"zwave_js/stop_inclusion",entry_id:i}),C=(e,i)=>e.callWS({type:"zwave_js/stop_exclusion",entry_id:i}),b=(e,i,a,n)=>e.callWS({type:"zwave_js/grant_security_classes",entry_id:i,security_classes:a,client_side_auth:n}),j=(e,i,a)=>e.callWS({type:"zwave_js/validate_dsk_and_enter_pin",entry_id:i,pin:a}),h=(e,i,a)=>e.callWS({type:"zwave_js/supports_feature",entry_id:i,feature:a}),L=(e,i,a)=>e.callWS({type:"zwave_js/parse_qr_code_string",entry_id:i,qr_code_string:a}),W=(e,i,a,n,r)=>e.callWS({type:"zwave_js/provision_smart_start_node",entry_id:i,qr_code_string:n,qr_provisioning_information:a,planned_provisioning_entry:r}),H=(e,i,a,n)=>e.callWS({type:"zwave_js/unprovision_smart_start_node",entry_id:i,dsk:a,node_id:n}),I=(e,i)=>e.callWS({type:"zwave_js/node_status",device_id:i}),E=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/subscribe_node_status",device_id:i}),A=(e,i)=>e.callWS({type:"zwave_js/node_metadata",device_id:i}),k=(e,i)=>e.callWS({type:"zwave_js/node_comments",device_id:i}),M=(e,i)=>e.callWS({type:"zwave_js/get_config_parameters",device_id:i}),V=(e,i,a,n,r)=>{const t={type:"zwave_js/set_config_parameter",device_id:i,property:a,value:n,property_key:r};return e.callWS(t)},T=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/refresh_node_info",device_id:i}),Z=(e,i)=>e.callWS({type:"zwave_js/heal_node",device_id:i}),D=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/remove_failed_node",device_id:i}),P=(e,i)=>e.callWS({type:"zwave_js/begin_healing_network",entry_id:i}),N=(e,i)=>e.callWS({type:"zwave_js/stop_healing_network",entry_id:i}),F=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/subscribe_heal_network_progress",entry_id:i}),R=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/subscribe_controller_statistics",entry_id:i}),B=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/subscribe_node_statistics",device_id:i}),O=(e,i)=>e.callWS({type:"zwave_js/is_node_firmware_update_in_progress",device_id:i}),x=(e,i)=>e.callWS({type:"zwave_js/is_any_ota_firmware_update_in_progress",entry_id:i}),K=async(e,i,a,n)=>{const r=new FormData;r.append("file",a),void 0!==n&&r.append("target",n.toString());const t=await e.fetchWithAuth(`/api/zwave_js/firmware/upload/${i}`,{method:"POST",body:r});if(200!==t.status)throw new Error(t.statusText)},q=(e,i,a)=>e.connection.subscribeMessage((e=>a(e)),{type:"zwave_js/subscribe_firmware_update_status",device_id:i}),U=(e,i)=>e.callWS({type:"zwave_js/abort_firmware_update",device_id:i}),$=(e,i,a)=>e.connection.subscribeMessage(a,{type:"zwave_js/subscribe_log_updates",entry_id:i}),J=(e,i)=>e.callWS({type:"zwave_js/get_log_config",entry_id:i}),G=(e,i,a)=>e.callWS({type:"zwave_js/update_log_config",entry_id:i,config:{level:a}})},33085:(e,i,a)=>{a.r(i),a.d(i,{getZwaveDeviceActions:()=>v});var n=a(81582),r=a(62770),t=a(26765),o=a(47181);const _=()=>Promise.all([a.e(85084),a.e(35650)]).then(a.bind(a,35650)),s=()=>Promise.all([a.e(85084),a.e(46583),a.e(32454)]).then(a.bind(a,32454)),d=()=>Promise.all([a.e(85084),a.e(92696)]).then(a.bind(a,92696)),c=()=>Promise.all([a.e(85084),a.e(67029)]).then(a.bind(a,67029)),l=()=>Promise.all([a.e(88278),a.e(85084),a.e(45507),a.e(22799),a.e(12545),a.e(26272),a.e(13701),a.e(67622),a.e(71001)]).then(a.bind(a,80635)),v=async(e,i,a)=>{const v=(await(0,n.pB)(i,{domain:"zwave_js"})).find((e=>a.config_entries.includes(e.entry_id)));if(!v)return[];const u=v.entry_id,g=await(0,r.mZ)(i,a.id);if(!g||g.is_controller_node)return[];const p=[{label:i.localize("ui.panel.config.zwave_js.device_info.device_config"),icon:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",href:`/config/zwave_js/node_config/${a.id}?config_entry=${u}`},{label:i.localize("ui.panel.config.zwave_js.device_info.reinterview_device"),icon:"M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z",action:()=>{return i=e,n={device_id:a.id},void(0,o.B)(i,"show-dialog",{dialogTag:"dialog-zwave_js-reinterview-node",dialogImport:d,dialogParams:n});var i,n}},{label:i.localize("ui.panel.config.zwave_js.device_info.heal_node"),icon:"M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",action:()=>{return i=e,n={device:a},void(0,o.B)(i,"show-dialog",{dialogTag:"dialog-zwave_js-heal-node",dialogImport:_,dialogParams:n});var i,n}},{label:i.localize("ui.panel.config.zwave_js.device_info.remove_failed"),icon:"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z",action:()=>{return i=e,n={device_id:a.id},void(0,o.B)(i,"show-dialog",{dialogTag:"dialog-zwave_js-remove-failed-node",dialogImport:c,dialogParams:n});var i,n}},{label:i.localize("ui.panel.config.zwave_js.device_info.node_statistics"),icon:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",action:()=>{return i=e,n={device:a},void(0,o.B)(i,"show-dialog",{dialogTag:"dialog-zwave_js-node-statistics",dialogImport:s,dialogParams:n});var i,n}}];if(!g.ready)return p;const[w,y]=await Promise.all([(0,r.AC)(i,u),(0,r.a2)(i,a.id)]);return w&&!y||p.push({label:i.localize("ui.panel.config.zwave_js.device_info.update_firmware"),icon:"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z",action:async()=>{var n,_;(y||await(0,r.a2)(i,a.id)||await(0,t.g7)(e,{text:i.localize("ui.panel.config.zwave_js.update_firmware.warning"),dismissText:i.localize("ui.common.no"),confirmText:i.localize("ui.common.yes")}))&&(n=e,_={device:a},(0,o.B)(n,"show-dialog",{dialogTag:"dialog-zwave_js-update-firmware-node",dialogImport:l,dialogParams:_}))}}),p}}}]);