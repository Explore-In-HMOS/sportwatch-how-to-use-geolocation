import geolocation from "@system.geolocation"

export default {
    data: {
        locationType: '',
        location: '',
        coordTypes: '',
        subscribed: ''
    },
    onGetLocation() {
        const that = this;

        geolocation.getLocation({
            timeout: 2000,
            success: function (data) {
                that.location = JSON.stringify(data);
                console.info(`myconsole success ${JSON.stringify(data)}`)
            },
            fail: function (data, code) {
                console.info(`myconsole error: ${JSON.stringify(data)} ${code}`)
            },
            complete: function () {
            }
        })
    },
    onGetLocationType() {
        const that = this;
        geolocation.getLocationType({
            success: function (data) {
                console.info(`myconsole locationType ${JSON.stringify(data)}`)
                that.locationType = JSON.stringify(data);
            },
            fail: function (data, code) {
                console.info(`myconsole error: ${JSON.stringify(data)} ${code}`)
            }
        })
    },
    onSubscribe() {
        const that = this;
        geolocation.subscribe({
            success: function (data) {
                console.info(`myconsole subscribe ${JSON.stringify(data)}`)
                that.subscribed = JSON.stringify(data);
            },
            fail: function (data, code) {
                console.info(`myconsole error: ${JSON.stringify(data)} ${code}`)
            }
        })
    },
    onUnSubscribe() {
        geolocation.unsubscribe();
        this.subscribed = 'unsubscribed'
    },
    onCoordType() {
        this.coordTypes = geolocation.getSupportedCoordTypes();
    },
    onLocation() {
        this.onGetLocation();
        this.onGetLocationType();
        this.onCoordType();
    },
    onInit() {
    }
};
