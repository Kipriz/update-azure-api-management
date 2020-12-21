# update-azure-api-management
GitHub Action to update Azure Api Management through Management API
          
## Configuration

```yaml
steps:
  - uses: kipriz/update-azure-api-management@v1
      with:
        subscriptionId: "e4aac18b-f650-4a53-b77d-17734544787f" # Subscription ID from Azure's Subscriptions
        resourceGroup: "PROD" # Resource Group name
        serviceName: "prodapi" # Name of API in API Management
        apiName: "5f1135856301f3d7e9d820b4" # API Name. Pick it up from tracing request when you open a specific API in "API Management Services" -> APIS 
        authorization: "SharedAccessSignature integration&2foobar==" # authorization from "API Management Services" -> "Management API"  
        apiPath: "portal_prod" # API path 
        openApiLink: "" # Public link to OpenApi file. Should correspond to the format specified in "format" param.
        format: "openapi+json-link" # Optional. Format of OpenApi file. Default is openapi+json-link , other options is on: https://docs.microsoft.com/en-us/rest/api/apimanagement/2020-06-01-preview/apis/createorupdate#contentformat
        versionOfApiManagement: "2020-06-01-preview" # Optional. Azure's Management API version. Default is "2020-06-01-preview"
```
                                            
