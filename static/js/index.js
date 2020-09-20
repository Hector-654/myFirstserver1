//https://www.eclipse.org/paho/clients/js/

function ENDEDIDO_1() {
	
	message =new Paho.MQTT.Message("L10");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
  
}
function ENDEDIDO_2(){	
	
	message =new Paho.MQTT.Message("L1N");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
}
function ENDEDIDO_1_1() {
	
	message =new Paho.MQTT.Message("L2O");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
  
}
function ENDEDIDO_2_2() {
	
	message =new Paho.MQTT.Message("L2N");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
  
}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "654hector1@gmail.com",
    password: "naruto798199429",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("654hector1@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "654hector1@gmail.com/kop";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	text=(message.payloadString);
	console.log(text)
	if(text=="foco1 encendido"){
		document.getElementById("respuesta1").innerHTML = text;	
	}
	if(text=="foco1 Apagado"){
		document.getElementById("respuesta1").innerHTML = text;	
	}
	if(text=="foco2 encendido"){
		document.getElementById("respuesta2").innerHTML = text;	
	}
	if(text=="foco2 Apagado"){
		document.getElementById("respuesta2").innerHTML = text;	
	}
	
 
	//console.log("mensaje del sensor:"+message.payloadString);
	
	

  
  }
  
