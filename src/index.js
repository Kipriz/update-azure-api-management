const core = require("@actions/core")
const github = require("@actions/github")
const axios = require("axios")

async function run() {
    try {
        /* required parameters */
        let required = {required: true};
        const subscriptionId = core.getInput("subscriptionId", required);
        const resourceGroup = core.getInput("resourceGroup", required);
        const serviceName = core.getInput("serviceName", required);
        const apiName = core.getInput("apiName", required);
        const authorization = core.getInput("authorization", required);
        const apiPath = core.getInput("apiPath", required);
        const linkToOpenApi = core.getInput("openApiLink", required);

        /* optional parameters */
        const format = core.getInput("format") || "openapi+json-link";
        const version = core.getInput("versionOfApiManagement") || "2020-06-01-preview";

        core.info("Configuration has been read successfully.");
        core.info(`SubscriptionId: ${subscriptionId}`);
        core.info(`resourceGroup: ${resourceGroup}`);
        core.info(`serviceName: ${serviceName}`);
        core.info(`apiName: ${apiName}`);
        core.info(`apiPath: ${apiPath}`);
        core.info(`linkToOpenApi: ${linkToOpenApi}`);

        const link = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.ApiManagement/service/${serviceName}/apis/${apiName}?api-version=${version}`;
        const data = {
            properties: {
                path: apiPath,
                format: format,
                value: linkToOpenApi
            }
        };
        const config = {
            headers: {
                "Authorization": authorization,
                "Content-type": "application/json"
            }
        };

        core.info("Start updating...");
        const response = await axios.put(link, data, config);
        core.info(`Done sending update request, response: ${response.status} ${response.statusText}`);

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();