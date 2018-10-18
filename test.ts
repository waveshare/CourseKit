// tests go here; this will not be compiled when this package is used as a library


/*
let volt = 0

let adc = 0

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

Liquid.setPin(AnalogPin.P0)

basic.forever(() => {

    adc = Liquid.getADCValue()

    serial.writeValue("adc", adc)

    volt = Liquid.getVoltValue()

    serial.writeValue("mV", volt)

    basic.pause(500)
})
*/




/*
let noise = 0

let volt = 0

let adc = 0

Sound.setApin(AnalogPin.P0)

Sound.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Sound.getADCValue()

    serial.writeValue("adc", adc)

    volt = Sound.getVoltValue()

    //serial.writeValue("mV", volt)

    noise = Sound.getNoise()

    //serial.writeValue("noise", noise)

    basic.pause(100)
})
*/



/*
let close = 0

let volt = 0

let adc = 0

Infrared.setApin(AnalogPin.P0)

Infrared.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Infrared.getADCValue()

    serial.writeValue("adc", adc)

    volt = Infrared.getVoltValue()

    serial.writeValue("mV", volt)

    close = Infrared.getClose()

    serial.writeValue("close", close)

    basic.pause(100)
})
*/


/*
let polluted = 0

let volt = 0

let adc = 0

Gas.setApin(AnalogPin.P0)

Gas.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Gas.getADCValue()

    serial.writeValue("adc", adc)

    volt = Gas.getVoltValue()

    serial.writeValue("mV", volt)

    polluted = Gas.getPolluted()

    serial.writeValue("polluted", polluted)

    basic.pause(100)
})
*/

/*
let far = 0

let volt = 0

let adc = 0

Flame.setApin(AnalogPin.P0)

Flame.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Flame.getADCValue()

    serial.writeValue("adc", adc)

    volt = Flame.getVoltValue()

    serial.writeValue("mV", volt)

    far = Flame.getFar()

    serial.writeValue("far", far)

    basic.pause(100)
})
*/


/*
let volt = 0

let adc = 0

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

Moisture.setPin(AnalogPin.P0)

basic.forever(() => {

    adc = Moisture.getADCValue()

    serial.writeValue("adc", adc)

    volt = Moisture.getVoltValue()

    serial.writeValue("mV", volt)

    basic.pause(500)
})
*/


/*
let value = 0

serial.redirectToUSB()

MCP23017.setAddress(MCP23017.MCP23017_I2C_ADDRESS.ADDR_0x27)

basic.showIcon(IconNames.Heart)

basic.forever(() => {

    // 将A组7-0引脚分别设为01010101，转换为10进制即为85。
    MCP23017.writePin(MCP23017.PIN.A, 85)

    // 读取B组7-0引脚，并从高位开始存储，返回一个字节。
    value = MCP23017.readPin(MCP23017.PIN.B)

    serial.writeValue("rslt", value)
    
    basic.pause(200)

})

*/


/*
let temperature = 0

let humidity = 0

let pressure = 0

BME280.setAddress(BME280.BME280_I2C_ADDRESS.ADDR_0x77);

basic.forever(() => {

    pressure = BME280.pressure()

    temperature = BME280.temperature()

    humidity = BME280.humidity()

    serial.writeValue("P", pressure)

    serial.writeValue("T", temperature)

    serial.writeValue("H", humidity)

    basic.pause(1000)

})
*/



/*
let temperature = 0;

let humidity = 0;

DHT11.setPin(DigitalPin.P0);

serial.redirectToUSB();

//basic.showIcon(IconNames.Heart);

basic.forever(() => {

    temperature = DHT11.getTemperature();

    humidity = DHT11.getHumidity();

    serial.writeValue("T", temperature);

    serial.writeValue("H", humidity);

    basic.pause(500);

})
*/



/*
basic.showIcon(IconNames.Heart)

UV.setPin(AnalogPin.P0)

serial.redirectToUSB()

basic.forever(function () {

    serial.writeValue("adc", UV.getADCValue())

    serial.writeValue("mV", UV.getVoltValue())

    basic.pause(500)

})
*/


/*
basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

Tilt.setPin(DigitalPin.P1)

basic.forever(() => {

    serial.writeValue("shaking", Tilt.getWhetherShaking())

    basic.pause(100)

})
*/








/*
Tilt Sensor
*/


/*

pins.setEvents(DigitalPin.P0, PinEventType.Edge)

let item = 0

serial.redirectToUSB()

basic.forever(() => {

    basic.showNumber(item)

})

control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_FALL, () => {

    item += 1

    serial.writeValue("count", item)

})

input.onButtonPressed(Button.A, () => {

    item = 0

})
*/










/*
Rotation Sensor
*/


/*

let time = 0

let item = 0

let count = 0

pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {

    if (input.runningTime() - time > 50) {
    
        time = input.runningTime()

        count = count + 1

    }

    time = input.runningTime()

    serial.writeValue("press", 0)

})

pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {

    if (input.runningTime() - time > 50) {
    
        time = input.runningTime()

        count = count - 1

    }

    time = input.runningTime()

    serial.writeValue("press", 0)

})

pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {

    count = 0

    serial.writeValue("press", 1)

})

count = 0

item = 0

time = input.runningTime()

pins.setPull(DigitalPin.P0, PinPullMode.PullUp)

pins.setPull(DigitalPin.P1, PinPullMode.PullUp)

pins.setPull(DigitalPin.P2, PinPullMode.PullUp)

serial.redirectToUSB()

basic.forever(function () {

    while (item != count) {
    
        item = count

        serial.writeValue("item", item)

    }

    basic.pause(500)

})

*/






/*
TSL2581
*/


/*
TSL2581.setAddress(TSL2581.TSL2581_I2C_ADDRESS.ADDR_0x39)

TSL2581.initSensor()

serial.redirectToUSB()

basic.forever(function () {

    serial.writeValue("lux", TSL2581.getLux())

    basic.pause(100)

})
*/
