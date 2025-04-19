let apiKey = "6PXRGiAAIZY3AqoYRIkP6vq101SYVD8b";
let geofencingAdminKey = "H133tsKViBULaH7llOefNkoclaZreGbpSa8aLnypjRjNiZxH";
let geofencingProjectId = "31b8b75d-1fa2-45c6-8afb-02728a694508";

const circleCenterHint = "Click on a map to select the center point.";
const circleRadiusHint = "Click on a map to set the circle radius.";
const firstVertexHint = "Click on a map to select the first vertex.";
const rectSecondVertexHint = "Click on a map to select the opposite vertex.";
const polyNextVertexHint = "Click on a map to select the next vertex. Double click it to end the drawing.";
const corridorFirstPointHint = "Click on a map to select the starting point.";
const corridorNextPointHint = "Click on a map to select the next point. Double click it to end the drawing.";

function invalidJsonErrorMsg() { return `Error while parsing JSON properties.\nExample input:\n{"key": "abc",\n'key2': 2}`; }
function saveFenceErrorMsg(err) { return `There was an error while saving the fence: ${err.response.data.message}`; }
function createProjectErrorMsg(err) { return `There was an error while creating a new project: ${err.response.data}`; }
function retrieveProjectsErrorMsg(err) { return `There was an error while retrieving project list: ${(err.response.data == "<h1>Developer Inactive</h1>" ? "Check your API key" : err.response.data)}`; }
function generateAdminKeyErrosMsg(err) {
    if (err.message == "Network Error") {
        return "Network error. Check your API key.";
    }
    else {
        return `There was an error while registering your Admin Key: ${err.response.data.message}`;
    }
}
function fetchFencesErrorMsg(err) { return `There was an error while fetching fences: ${err.response.data}`; }
function fetchFenceErrorMsg(err) { return `There was an error while fetching fence: ${err.response.data}`; }
function deleteFenceErrorMsg(err) { return `There was an error while deleting fence: ${err.response.data.message}`; }
