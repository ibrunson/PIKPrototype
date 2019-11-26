class JKSSGateway {
    /**
     * Initialize a gateway to the JKSS API.
     * @param {String} baseURL - the URL of the application to which requests should be sent
     */
    constructor(baseURL = null) {
        this._baseURL = baseURL ? baseURL : 'https://ec2-107-21-69-59.compute-1.amazonaws.com:8090';
    }

    /**
     * Get the URL of the application to use
     */
    get baseURL() {
        return this._baseURL;
    }

    /**
     * Send the JKSS application an image URL to the specified endpoint
     * @param {String} endpoint which endpoint to call in the JKSS API. Must be one of ('getStoreInventory', 'identifyObject')
     * @param {String} imageURL the URL of the image to send to the API
     * @returns {JSON} The response from the API
     */
    async _JKSSRequest(endpoint, imageURL) {
        const res = await fetch(`${baseURL}/${endpoint}/?url=${imageURL}`);
        const parseRes = await res.json();
        
        return parseRes;
    }

    /**
     * Using an uploaded image, query JKSS to get store data for that image
     * @param {String} image 
     * @returns {Array} a list of links? objects? Im not sure what they return yet
     */
    getStoreData(image) {
        const storeData = this._JKSSRequest('getStoreInventory', image);
        return storeData;
    }

    /**
     * Using an uploaded image, identify the object in the image via the JKSS API
     * @param {String} image 
     */
    identifyImage(image) {
        const imageData = this._JKSSRequest('identifyObject', image);
        return imageData;
    }
}